from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [

    path('article_comment/create/', views.CommentCreateView.as_view()),

    path('article_comment/<postid>/', views.CommentRetriveView.as_view()),

]