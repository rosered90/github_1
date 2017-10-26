from django.conf.urls import patterns,url
from .import views

urlpatterns = patterns('',

    url(r'^$', views.web_list, name="index"),
    url(r'^dot/$', views.dot_float, name="dot_float"),
)
