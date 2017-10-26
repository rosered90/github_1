# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="caitong_security_index"),
    # url(r'^draw/$', views.draw_price, name="draw_price"),
    # url(r'^manage/$', views.prize_list, name='caitong_security_prize_list'),
    # url(r'^prize_new/$', views.prize_edit, name='caitong_security_prize_new'),
    # url(r'^prize_edit/(?P<prize_id>\d+)$', views.prize_edit, name='caitong_security_prize_edit'),
    # url(r'^prize_delete/(?P<prize_id>\d+)$', views.prize_delete, name='caitong_security_prize_delete'),
    # url(r'^user_list/$', views.user_list, name='caitong_security_user_list'),
    # url(r'prize_update/(?P<prize_id>\d+)$', views.update_exchanged, name='caitong_security_prize_update'),
 ]
