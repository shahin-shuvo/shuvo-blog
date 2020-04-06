from django.contrib import admin
from .models import Article, UserData

# Register your models here.
admin.site.register(Article)
admin.site.register(UserData)