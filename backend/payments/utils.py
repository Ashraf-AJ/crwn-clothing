def build_line_items(items):
    return [
        {
            "price_data": {
                "currency": "usd",
                "unit_amount": item.get("price", 0) * 100,
                "product_data": {
                    "name": item.get("name", ""),
                    "images": [item.get("imageUrl")],
                },
            },
            "quantity": item.get("quantity", 0),
        }
        for item in items
    ]
