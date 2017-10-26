# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.template import RequestContext
import json
from django import forms



# Create your views here.


def web_list(requst):

	return render_to_response('web_1/index.html', locals(), context_instance=RequestContext(requst))


def dot_float(requst):

	return render_to_response('web_1/dot_float.html', locals(), context_instance=RequestContext(requst))


class LoginForm(forms.Form):
	"""
	定义用户输入的规则
	"""
	#  定义login.html中的input中标签中的name=user的标签规则
	user = forms.CharField(required=True)
	pwd = forms.CharField(required=True)


def login(request):
	if request.method == 'POST':
		obj = LoginForm(request.POST)  # 把login.html中用户输入的内容封装到LoginForm类交给它处理
		ret = obj.is_valid()  # 如果提交的数据符合LoginForm中的规则,则返回True,否则返回False
		if ret:
			print(obj.clean())  # 如果符合规则以字典的形式打印出用户提交的数据
		else:
			print(obj.errors)  # 如果不符合规则以字典的形式打印出错误
	return render_to_response('web_1/ajax.html', locals(), context_instance=RequestContext(request))

