# Generated by Django 3.0.5 on 2020-04-05 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_remove_article_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='userName',
            field=models.CharField(default='user', max_length=120),
        ),
        migrations.AddField(
            model_name='article',
            name='userToken',
            field=models.CharField(default='hhhh', max_length=520),
        ),
    ]
