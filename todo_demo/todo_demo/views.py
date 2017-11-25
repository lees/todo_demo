# -*- encoding: utf-8 -*-

from rest_framework import viewsets

from todo_demo import models
from todo_demo import serializers


class TodoViewSet(viewsets.ModelViewSet):
	queryset = models.Todo.objects.all()
	serializer_class = serializers.TodoSerializer
