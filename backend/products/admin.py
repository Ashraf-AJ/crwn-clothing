from django.contrib import admin
from . import models

models_list = [
    models.Hat,
    models.Jacket,
    models.Sneaker,
    models.Men,
    models.Women,
]
admin.site.register(models_list)
