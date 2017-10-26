from django.conf.urls import patterns, include, url

from django.contrib import admin
from web_1 import views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'ceshi_web.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^web1/', include('web_1.urls')),
    url(r'^login/', views.login),
    url(r'^caitong/', include('caitong_security.urls')),

)
