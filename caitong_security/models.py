# -*- coding: utf-8 -*-
from django.db import models
# from rose.models import Customer

# TYPE_ONE = 1
# TYPE_TWO = 2
# TYPE_THREE = 3
# TYPE_FOUR = 4
# TYPE_FIVE = 5
# TYPE = {TYPE_ONE: '一等奖', TYPE_TWO: '二等奖', TYPE_THREE: '三等奖', TYPE_FOUR: "四等奖", TYPE_FIVE: "精美礼品"}


DEL_STATUS_AVAILABLE = 0
DEL_STATUS_NOT_AVAILABLE = 1
DEL_STATUS = {DEL_STATUS_AVAILABLE: "可用", DEL_STATUS_NOT_AVAILABLE: "不可用"}


class PrizeConfig(models.Model):

	TYPE_REAL = 0
	TYPE_VIRTUAL = 1
	TYPE = {TYPE_REAL: "实体奖品", TYPE_VIRTUAL: "虚拟奖品"}

	random = models.CharField(max_length=30, verbose_name="中奖概率")
	max = models.CharField(max_length=30, verbose_name="奖品总数")
	type = models.IntegerField(choices=TYPE.items(), verbose_name="奖品类型")
	info = models.CharField(max_length=30, verbose_name="备注")
	del_status = models.IntegerField(default=0, choices=DEL_STATUS.items(), verbose_name="删除状态")
	exchanged = models.IntegerField(default=0, verbose_name="已兑换数量")

	def __unicode__(self):
		return self.TYPE.get(self.type)


class SecurityUser(models.Model):
	# customer = models.OneToOneField(Customer, verbose_name="绑定的微信用户信息")
	is_win = models.IntegerField(default=0, verbose_name="是否抽奖")  # 0为未抽奖，1为已抽奖
	create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
	del_status = models.IntegerField(default=0, choices=DEL_STATUS.items(), verbose_name="删除状态")
	mobile_phone = models.CharField(max_length=11, blank=True, null=True, verbose_name="手机号码")
	address = models.CharField(max_length=200, blank=True, null=True, verbose_name="地址")
	receive_name = models.CharField(max_length=10, blank=True, null=True, verbose_name="收件人")
	prize_config = models.ForeignKey(PrizeConfig, null=True, blank=True, verbose_name="中奖信息")  # null为未中奖 not null为中奖信息

	def name(self):
		return self.customer.display_name() or ''
