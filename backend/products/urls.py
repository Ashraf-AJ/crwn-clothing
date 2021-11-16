from django.urls import path
from . import views

urlpatterns = [
    path("hats/", views.HatsList.as_view(), name="hats-list"),
    path("jackets/", views.JacketsList.as_view(), name="jackets-list"),
    path("sneakers/", views.SneakersList.as_view(), name="sneakers-list"),
    path("mens/", views.MensList.as_view(), name="mens-list"),
    path("womens/", views.WomensList.as_view(), name="womens-list"),
]
