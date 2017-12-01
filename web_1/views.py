# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.template import RequestContext
import json
from django import forms


# Create your views here.


def web_list(request):
	"""
	测试web的第一个url参数
	:param request:
	:return:
	"""
	return render_to_response('web_1/index.html', locals(), context_instance=RequestContext(request))


def dot_float(request):
	return render_to_response('web_1/dot_float.html', locals(), context_instance=RequestContext(request))


def js_test(request):
	"""
	测试jQuery方法
	:param request:
	:return:
	"""
	return render_to_response('web_1/js_test.html', locals(), context_instance=RequestContext(request))


def ajax(request):
	"""
	测试jQUery异步
	:param request:
	:return:
	"""
	return render_to_response('web_1/ajax.html', locals(), context_instance=RequestContext(request))


def ajax_username(request):
	"""
	供异步使用的测试html
	:param request:
	:return:
	"""
	username = request.GET['username']
	content = request.GET['content']
	# a = int(username)
	# b = int(content)
	return HttpResponse(u'姓名：' + username + u'<br/>内容：' + content)


def test(request):
	return render_to_response('web_1/test.html', locals(), context_instance=RequestContext(request))


def add(request):
	a = request.GET['a']
	b = request.GET['b']
	a = int(a)
	b = int(b)
	return HttpResponse(str(a + b))


def form_action(request):
	return render_to_response('web_1/js_test.html', locals(), context_instance=RequestContext(request))


def shopping(request):
	return render_to_response('web_1/shopping.html', locals(), context_instance=RequestContext(request))
