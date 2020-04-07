from rest_framework import serializers
from articles.models import Article, UserData, Comment


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'userName', 'userToken')


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('userName', 'email', 'password')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('comment', 'postID', 'userToken', 'userName', 'commentID')