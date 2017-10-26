# -*- coding: utf-8 -*-
import memcache

cache = memcache.Client(['127.0.0.1:11211'], debug=0)
CACHE_TIME = 86400
TEMP_CACHE_TIME = 60
# 当前活动的缓存前缀，用来和其他活动进行区分
SECURITY = 'security_'
