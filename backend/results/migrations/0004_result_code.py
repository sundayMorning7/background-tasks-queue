# Generated by Django 3.1.6 on 2021-02-12 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('results', '0003_result_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='code',
            field=models.TextField(default=''),
        ),
    ]