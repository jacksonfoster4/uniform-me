# Generated by Django 2.2.7 on 2019-11-18 04:42

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0004_auto_20191118_0425'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='last_modified',
            field=models.DateField(default=datetime.datetime(2019, 11, 18, 4, 42, 19, 908930, tzinfo=utc)),
        ),
    ]
