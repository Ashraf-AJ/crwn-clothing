from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import stripe

from .utils import build_line_items

stripe.api_key = settings.STRIPE_SECRET_KEY


class PublishableKey(APIView):
    def get(self, request):
        return Response(
            data=settings.STRIPE_PUBLISHABLE_KEY, status=status.HTTP_200_OK
        )


class CreatePaymentView(APIView):
    def post(self, request):
        items = request.data
        try:
            checkout_session = stripe.checkout.Session.create(
                success_url=settings.STRIPE_PAYMENT_SUCCESS_URL,
                cancel_url=settings.STRIPE_PAYMENT_CANCEL_URL,
                payment_method_types=["card"],
                mode="payment",
                line_items=build_line_items(items),
            )
        except Exception as e:
            return Response(data=str(e))

        return Response(data=checkout_session["id"], status=status.HTTP_200_OK)
