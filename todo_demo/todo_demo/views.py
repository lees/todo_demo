# -*- encoding: utf-8 -*-

from django.http import HttpResponse

def root(request):
	return HttpResponse("Hello world")