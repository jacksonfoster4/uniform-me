# Generated by Django 2.2.7 on 2019-11-18 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0002_request_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='request',
            name='notes',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
