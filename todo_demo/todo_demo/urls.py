# -*- encoding: utf-8 -*-

from django.contrib import admin
from django.conf.urls import url, include

from todo_demo import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.root, name='home'),
]
