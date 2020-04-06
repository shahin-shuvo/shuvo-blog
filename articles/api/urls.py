from django.urls import path
from articles.api import views
from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter


app_name = 'articles'

router = DefaultRouter()
router.register('', ArticleViewSet, basename='article')
urlpatterns = router.urls


# urlpatterns = [

#     # /listView
#     path('', views.ArticleListView.as_view()),

#     # /detail View
#     path('<pk>/', views.ArticleDetailView.as_view()),

#     # /create View
#     path('create/', views.ArticleCreateView.as_view()),

#     # /update View
#     path('articles/<pk>/update/', views.ArticleUpdateView.as_view()),

#     # /delete View
#     path('articles/<pk>/delete/', views.ArticleDeleteView.as_view())



# ]
