# -*- coding:utf-8 -*-
from django.forms import ModelForm
from .models import PrizeConfig, SecurityUser


class PrizeConfigForm(ModelForm):
    class Meta:
        model = PrizeConfig
        fields = ["random", "info", "max", "type"]


