# -*- coding: utf-8 -*-
import models

from django.contrib import admin

class SimpleAdmin(admin.ModelAdmin):
    pass

admin.site.register(models.Todo, SimpleAdmin)