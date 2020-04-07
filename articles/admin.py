from django.contrib import admin
from .models import Article, UserData, Comment

# Register your models here.
admin.site.register(Article)
admin.site.register(UserData)
admin.site.register(Comment)