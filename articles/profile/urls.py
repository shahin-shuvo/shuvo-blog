from django.urls import path
from . import views


app_name = 'articles'
urlpatterns = [

    # /profileView
    path('<token>/', views.ProfileListView.as_view()),
    # /profile data View
    path('user/<token>/', views.UserView.as_view()),

]
