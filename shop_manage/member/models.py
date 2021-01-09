from django.db import models

# Create your models here.

class Member(models.Model):
    """
    会员信息
    """
    name=models.CharField(default="",max_length=30,verbose_name="姓名",help_text="姓名")
    sex=models.CharField(default="",max_length=30,verbose_name="性别",help_text="性别")
    phone=models.CharField(default="",max_length=30,verbose_name="手机号",help_text="手机号")
    value=models.CharField(default="",max_length=30,verbose_name="积分值",help_text="积分值")

    class Meta:
        verbose_name="会员"
        verbose_name_plural=verbose_name
    def __str__(self):
        return self.name