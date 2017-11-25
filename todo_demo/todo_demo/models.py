# -*- encoding: utf-8 -*-

from django.db import models

class Todo(models.Model):
	name  = models.CharField(max_length=512)
	note  = models.TextField(default="", blank=True)
	added = models.DateTimeField(auto_now_add=True)