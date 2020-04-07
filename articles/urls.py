from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [

    path('comment/create/', views.CommentCreateView.as_view()),

    path('comment/<postid>/', views.CommentRetriveView.as_view()),

]