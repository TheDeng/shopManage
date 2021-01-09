from django.db import models

# Create your models here.
class Shop(models.Model):
    """
    店铺
    """
    name=models.CharField(default="",max_length=50,verbose_name="名字",help_text="名字")
    money=models.CharField(default="",max_length=50,verbose_name="注册资金",help_text="注册资金")
    person=models.CharField(default="",max_length=50,verbose_name="注册人",help_text="注册人")
    location=models.CharField(default="",max_length=50,verbose_name="注册区域",help_text="注册区域")

    class Meta:
        verbose_name = "店铺"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name