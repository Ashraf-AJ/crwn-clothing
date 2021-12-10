from rest_framework import serializers
from . import models

common_fields = (
    "id",
    "name",
    "image_url",
    "price",
)


class HatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hat
        fields = common_fields


class JacketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Jacket
        fields = common_fields


class SneakersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sneaker
        fields = common_fields


class MensSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Men
        fields = common_fields


class WomensSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Women
        fields = common_fields
