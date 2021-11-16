from django.db import models
from django.utils.translation import ugettext_lazy as _


class CollectionInfo(models.Model):
    name = models.CharField(_("name"), max_length=150)
    image_url = models.URLField(_("image_url"))
    price = models.IntegerField(_("price"))

    def __str__(self):
        return self.name

    class Meta:
        abstract = True


class Hat(CollectionInfo):
    pass


class Jacket(CollectionInfo):
    pass


class Sneaker(CollectionInfo):
    pass


class Men(CollectionInfo):
    pass


class Women(CollectionInfo):
    pass
