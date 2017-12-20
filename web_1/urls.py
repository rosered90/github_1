from django.conf.urls import patterns,url
from .import views

urlpatterns = patterns('',

    url(r'^$', views.web_list, name="index"),
    url(r'^dot/$', views.dot_float, name="dot_float"),
    url(r'^js/$', views.js_test, name="js_test"),
    url(r'^ajax/$', views.ajax, name="ajax"),
    url(r'^test/$', views.test, name="test"),
    url(r'^add/$', views.add, name="add"),
    url(r'^au/$', views.ajax_username, name="au"),
    url(r'^shop/$', views.shopping, name="shop"),
    url(r'^vue1/$', views.vue_ceshi, name="vue1"),

)
