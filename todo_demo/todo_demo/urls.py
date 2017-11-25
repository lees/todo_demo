# -*- encoding: utf-8 -*-

from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static

from rest_framework import routers

from todo_demo import views


router = routers.DefaultRouter()
router.register(r'todos', views.TodoViewSet)

# urlpatterns = [
#     url(r'^admin/', admin.site.urls),
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    # url(r'^test/?$', views.index, name='index'),
]
