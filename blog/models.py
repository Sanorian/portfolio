from django.db import models

class Post(models.Model):
    post_name = models.CharField(max_length=200, default="Default Name")
    post_text = models.CharField(max_length=5000)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.post_name