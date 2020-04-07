from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [

    # /profileView
    path('<token>/', views.ProfileListView.as_view()),
    
    path('comment/create/', views.CommentCreateView.as_view()),

    path('comment/<postid>/', views.CommentRetriveView.as_view()),

]