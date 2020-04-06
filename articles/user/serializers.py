from rest_framework import serializers
from articles.models import Article, UserData



class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('username', 'email', 'password', 'token')