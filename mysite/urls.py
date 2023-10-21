from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("/", include("extractText.urls")),
    path("admin/", admin.site.urls),
    path('converter/', include("video2audio2text.urls")),
]
