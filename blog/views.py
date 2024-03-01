from django.shortcuts import get_object_or_404, render
from .models import Post

def index(request):
    return render(request, "blog/blog.html", {"posts_list": Post.objects.order_by("-id")})