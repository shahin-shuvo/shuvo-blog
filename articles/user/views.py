from rest_framework import viewsets
from .serializers import UserDataSerializer
from articles.models import UserData

from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserDataSerializer
    queryset = UserData.objects.all()

