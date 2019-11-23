# Generated by Django 2.2.7 on 2019-11-22 22:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0013_auto_20191122_0310'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='last_modified',
            field=models.DateField(default=datetime.datetime(2019, 11, 22, 22, 23, 45, 583889, tzinfo=utc)),
        ),
    ]
