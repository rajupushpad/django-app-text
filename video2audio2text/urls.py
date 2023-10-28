from django.urls import path
from . import views

urlpatterns = [
    path('change-video-to-audio/', views.change_video_to_audio, name='change-video-to-audio'),
    path('extract-audio-from-video/', views.extract_audio_from_video, name='extract-audio-from-video'),
]
