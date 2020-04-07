from rest_framework import viewsets
from articles.models import Article, Comment
from .serializers import ProfileSerializer, CommentSerializer
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView)

from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


class ProfileListView(ListAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        token = self.kwargs['token']
        return Article.objects.filter(userToken=token)


class CommentRetriveView(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        postid = self.kwargs['postid']
        return Comment.objects.filter(postID=postid)


class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
