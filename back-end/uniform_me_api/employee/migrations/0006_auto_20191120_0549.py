# Generated by Django 2.2.7 on 2019-11-20 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0005_auto_20191120_0436'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='has_thirty_day_alert',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]