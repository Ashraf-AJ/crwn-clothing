from django.contrib.auth import get_user_model
from django.conf import settings
from django.utils.module_loading import import_string
from rest_framework import serializers

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"],
        )
        user.save()
        return user


# custom serializers for dj-rest-auth
class UserDetailsSerializer(serializers.ModelSerializer):
    """
    User model w/o password
    """

    @staticmethod
    def validate_username(username):
        if "allauth.account" not in settings.INSTALLED_APPS:
            # We don't need to call the all-auth
            # username validator unless its installed
            return username

        from allauth.account.adapter import get_adapter

        username = get_adapter().clean_username(username)
        return username

    class Meta:
        extra_fields = []
        # see https://github.com/iMerica/dj-rest-auth/issues/181
        # UserModel.XYZ causing attribute error while importing other
        # classes from `serializers.py`. So, we need to check whether the auth model has
        # the attribute or not
        if hasattr(UserModel, "email"):
            extra_fields.append("email")
        if hasattr(UserModel, "username"):
            extra_fields.append("username")
        model = UserModel
        fields = ("pk", *extra_fields)
        read_only_fields = ("email",)


class JWTSerializer(serializers.Serializer):
    access_token = serializers.CharField()
    # refresh_token = serializers.CharField()
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        """
        Required to allow using custom USER_DETAILS_SERIALIZER in
        JWTSerializer. Defining it here to avoid circular imports
        """
        rest_auth_serializers = getattr(settings, "REST_AUTH_SERIALIZERS", {})

        JWTUserDetailsSerializer = import_string(
            rest_auth_serializers.get(
                "USER_DETAILS_SERIALIZER",
                "dj_rest_auth.serializers.UserDetailsSerializer",
            ),
        )

        user_data = JWTUserDetailsSerializer(
            obj["user"], context=self.context
        ).data
        return user_data
