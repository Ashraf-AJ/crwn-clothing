import json
from . import models

with open("products/shop.json", "r") as f:
    data = json.load(f)

models_dict = {
    "hats": models.Hat,
    "jackets": models.Jacket,
    "sneakers": models.Sneaker,
    "mens": models.Men,
    "womens": models.Women,
}


def add_items(key, data, model):
    items = data[key]["items"]
    model.objects.bulk_create(
        [
            model(
                name=item["name"],
                image_url=item["imageUrl"],
                price=int(item["price"]),
            )
            for item in items
        ]
    )


for key, model in models_dict.items():
    add_items(key, data, model)
