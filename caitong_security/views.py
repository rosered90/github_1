# -*- coding: utf-8 -*-
import pytz
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import render_to_response, get_object_or_404
from django.template import RequestContext
import logging

# from haotu.crm.customer.models import Customer
# from haotu.utils import dtutils
# from haotuWeixin.caitong_security.models import SecurityUser
# from haotuWeixin.decorator import weixin_required
# from django.contrib import messages
# from django.contrib.auth.decorators import login_required
#
# from haotuWeixin.views import get_page_count
# from .models import PrizeConfig, SecurityUser
# from .forms import PrizeConfigForm
# from django.utils import timezone
# from datetime import datetime
#
# from haotuWeixin.caitong_security.utils import cache, CACHE_TIME, TEMP_CACHE_TIME, SECURITY


logger = logging.getLogger('django')

__author__ = 'Administrator'

#
# @weixin_required()
def index(request):
# 	# request.session['now_customer'] = 77
# 	customer_id = request.session["now_customer"]
# 	customer = get_object_or_404(Customer, pk=customer_id)
# 	security_user_test = SecurityUser.objects.filter(customer=customer)
# 	if not security_user_test.exists():
# 		security_user = SecurityUser(customer=customer)
# 		security_user.save()
# 	else:
# 		security_user = security_user_test[0]
# 	mobile_phone = security_user.mobile_phone
# 	address = security_user.address
# 	receive_name = security_user.receive_name
# 	logger.info('caitong_time %s' % dtutils.now_local())
# 	if dtutils.now_local() > datetime(2017, 10, 24, 23, 59, 59).replace(tzinfo=pytz.timezone('Asia/Shanghai')):
# 		out_date = 0
# 	else:
# 		out_date = 1
	return render_to_response('caitong_security/index.html', locals(), context_instance=RequestContext(request))
#
#
# def draw_price(request):
# 	# request.session['now_customer'] = 48
# 	return render_to_response('caitong_security/test.html', locals(), context_instance=RequestContext(request))
#
#
# @login_required()
# def prize_list(request):
# 	"""
# 	奖品列表页面
# 	:param request:
# 	:return:
# 	"""
# 	page_count = get_page_count(request)
# 	prize_list = PrizeConfig.objects.filter(del_status=0).order_by('random')
# 	return render_to_response('caitong_control/prize_list.html', locals(), context_instance=RequestContext(request))
#
#
# @login_required()
# def prize_edit(request, prize_id=None):
# 	"""
# 	奖品编辑页面
# 	:param request:
# 	:param prize_id:
# 	:return:
# 	"""
# 	prize_type = PrizeConfig.TYPE
# 	if request.method == 'POST':
# 		if prize_id:
# 			prize = get_object_or_404(PrizeConfig, pk=prize_id)
# 			form = PrizeConfigForm(request.POST, request.FILES, instance=prize)
# 		else:
# 			form = PrizeConfigForm(request.POST, request.FILES)
# 		if form.is_valid():
# 			prize = form.save()
# 			prize_cache_id = prize.id
# 			prize_config = {'random': float(prize.random), 'max': int(prize.max)}
# 			cache.set(SECURITY + 'prize_config_' + str(prize_cache_id), prize_config, CACHE_TIME)
# 		return HttpResponseRedirect(reverse('caitong_security_prize_list'))
# 	else:
# 		if prize_id:
# 			prize = PrizeConfig.objects.get(pk=prize_id)
# 			form = PrizeConfigForm(instance=prize)
# 		else:
# 			form = PrizeConfigForm()
# 	return render_to_response('caitong_control/prize_edit.html', locals(), context_instance=RequestContext(request))
#
#
# @login_required()
# def prize_delete(request, prize_id):
# 	"""
# 	奖品删除方法
# 	:param request:
# 	:param prize_id:
# 	:return:
# 	"""
# 	prize = get_object_or_404(PrizeConfig, pk=prize_id)
# 	prize.del_status = 1
# 	prize.save()
# 	return HttpResponseRedirect(reverse('caitong_security_prize_list'))
#
#
# @login_required()
# def user_list(request):
# 	"""
# 	用户列表页面
# 	:param request:
# 	:return:
# 	"""
# 	page_count = get_page_count(request)
# 	user_list = SecurityUser.objects.filter(del_status=0).order_by('-create_time')
# 	return render_to_response('caitong_control/user_list.html', locals(), context_instance=RequestContext(request))
#
#
# @login_required()
# def update_exchanged(request, prize_id):
# 	"""
# 	更新已兑换数量的缓存
# 	:param request:
# 	:param prize_id:
# 	:return:
# 	"""
# 	all_cache = SECURITY + 'success_' + str(prize_id)
# 	cache.set(all_cache, 0, CACHE_TIME)
# 	return HttpResponseRedirect(reverse('caitong_security_prize_list'))
