# Generated by Django 2.2.7 on 2019-11-22 03:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0007_auto_20191120_1757'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]