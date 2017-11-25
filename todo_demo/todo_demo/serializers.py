# -*- encoding: utf-8 -*-

from todo_demo import models

from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Todo
		fields = '__all__'