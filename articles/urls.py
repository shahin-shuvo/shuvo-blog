from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [

    # /profileView
    path('<token>/', views.ProfileListView.as_view()),
    # /profileView
    #path('user/', views.ProfileListView.as_view()),

]