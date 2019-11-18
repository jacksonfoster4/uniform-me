from django.shortcuts import render
from rest_framework import generics
from .models import Request
from .serializers import RequestSerializer

# Create your views here.
class ListRequestsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Request.objects.all()
    serializer_class = RequestSerializer