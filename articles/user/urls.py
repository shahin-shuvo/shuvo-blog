from django.urls import path
from articles.user.views import UserViewSet
from rest_framework.routers import DefaultRouter


app_name = 'articles'

router = DefaultRouter()
router.register('', UserViewSet, basename='user')
urlpatterns = router.urls
