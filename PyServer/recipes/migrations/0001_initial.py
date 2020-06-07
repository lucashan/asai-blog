# Generated by Django 3.0.7 on 2020-06-07 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=80)),
                ('ethnicity', models.CharField(default='', max_length=80)),
                ('url_path', models.CharField(default='', max_length=80)),
                ('image_path', models.CharField(default='', max_length=80)),
                ('description', models.CharField(default='', max_length=200)),
                ('video_link', models.CharField(default='', max_length=80)),
            ],
        ),
    ]
