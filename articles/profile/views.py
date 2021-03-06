from rest_framework import viewsets
from articles.models import Article, UserData
from .serializers import ProfileSerializer
from articles.user.serializers import UserDataSerializer
from rest_framework.generics import (ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView)

from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


class ProfileListView(ListAPIView):
    serializer_class = ProfileSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        token = self.kwargs['token']
        return Article.objects.filter(userToken= token)

class UserView(ListAPIView):
    serializer_class = UserDataSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        token = self.kwargs['token']
        return UserData.objects.filter(token= token)