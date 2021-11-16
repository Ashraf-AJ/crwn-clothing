from rest_framework import serializers
from . import models


class HatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hat
        fields = (
            "id",
            "name",
            "image_url",
            "price",
        )


class JacketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Jacket
        fields = (
            "id",
            "name",
            "image_url",
            "price",
        )


class SneakersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sneaker
        fields = (
            "id",
            "name",
            "image_url",
            "price",
        )


class MensSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Men
        fields = (
            "id",
            "name",
            "image_url",
            "price",
        )


class WomensSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Women
        fields = (
            "id",
            "name",
            "image_url",
            "price",
        )
