from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


class User(AbstractUser):
    username = models.CharField(
        _("username"), default="", max_length=150, blank=True
    )
    email = models.EmailField(_("email address"), unique=True)
    # model manager
    objects = CustomUserManager()
    # the unique identifier of a user
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email
