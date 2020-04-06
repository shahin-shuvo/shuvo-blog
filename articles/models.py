from django.db import models
from datetime import datetime
from django.utils import timezone


# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    userName = models.CharField(max_length=120)
    userToken = models.CharField(max_length=520)
    postID = models.CharField(max_length=520)
    def __str__(self):
        return self.title


class UserData(models.Model):
    username = models.CharField(max_length=120)
    email = models.CharField(max_length=520)
    password = models.CharField(max_length=520)
    token = models.CharField(max_length=520)
    def __str__(self):
        return self.userName
