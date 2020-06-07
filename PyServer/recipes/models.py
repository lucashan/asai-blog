from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=80, blank=False, default='')
    ethnicity = models.CharField(max_length=80,blank=False, default='')
    url_path = models.CharField(max_length=80, blank=False, default='')
    image_path = models.CharField(max_length=80,blank=False, default='')
    description = models.CharField(max_length=200, blank=False, default='')
    video_link = models.CharField(max_length=80,blank=False, default='')