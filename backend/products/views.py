from rest_framework import generics
from . import models, serializers


class HatsList(generics.ListAPIView):
    queryset = models.Hat.objects.all()
    serializer_class = serializers.HatsSerializer


class JacketsList(generics.ListAPIView):
    queryset = models.Jacket.objects.all()
    serializer_class = serializers.JacketsSerializer


class SneakersList(generics.ListAPIView):
    queryset = models.Sneaker.objects.all()
    serializer_class = serializers.SneakersSerializer


class MensList(generics.ListAPIView):
    queryset = models.Men.objects.all()
    serializer_class = serializers.MensSerializer


class WomensList(generics.ListAPIView):
    queryset = models.Women.objects.all()
    serializer_class = serializers.WomensSerializer
