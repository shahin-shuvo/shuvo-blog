# Generated by Django 3.0.5 on 2020-04-07 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0019_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='commentID',
            field=models.CharField(default='null', max_length=120),
        ),
    ]
