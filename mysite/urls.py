
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('articles.api.urls')),
    path('user/', include('articles.user.urls')),
    path('myprofile/', include('articles.profile.urls')),
    path('articles/', include('articles.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),


]
