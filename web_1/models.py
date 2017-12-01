#-*- coding:utf-8 -*-
from django.db import models

# Create your models here.

class message(models.Model):
	user = models.CharField(max_length=255, verbose_name="用户")
	msg = models.CharField(max_length=1000, verbose_name="信息")
	time = models.DateTimeField(auto_now_add=True, verbose_name="发送时间")