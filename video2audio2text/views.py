from urllib import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.http import HttpResponse

import moviepy.editor as mp 
import speech_recognition as sr 

@api_view(['POST'])
def change_video_to_audio(request):

    uploaded_file = request.FILES['file']

    # Save the uploaded file to a temporary location
    temp_file_path = default_storage.save('temp_video.mp4', ContentFile(uploaded_file.read()));
    resText="";

    if temp_file_path:
        resText = extractTextFromVideoFile('media/'+temp_file_path, "hi-IN")
        print(resText)


    # return Response({'message': 'File converted successfully'})
    return Response({'message': 'Conversion successful', 'resText': resText}, status=status.HTTP_200_OK)


def extractTextFromVideoFile(file, textLang="en-US"):

    try:
        finalText = ""

        # Load the video 
        video = mp.VideoFileClip(file) 
        # video = mp.VideoFileClip("https://www.youtube.com/watch?v=k6WmiOhFCdY") 

        # Set the start and end times for the 1-minute clip
        start_time = 0  # Start time in seconds
        end_time = 60   # End time in seconds (1 minute)
        iteration = 0;

        while end_time < video.duration or (video.duration  < 60 and iteration == 0):
            
            if end_time > video.duration:
                end_time = video.duration

            # Create the 1-minute clip
            video_clip = video.subclip(start_time, end_time)

            # Extract the audio from the clip
            audio_clip = video_clip.audio
            audio_clip.write_audiofile("res.wav")

            # Initialize recognizer
            r = sr.Recognizer()

            # Load the audio file
            with sr.AudioFile("res.wav") as source:
                data = r.record(source)

            # Convert speech to text
            text = r.recognize_google(data, language=textLang) 

            finalText = finalText + text 

            start_time = start_time + 61  # Start time in seconds
            end_time = end_time + 60


            if end_time > video.duration and start_time < end_time:
                end_time = video.duration
            
            iteration = iteration + 1;

        return finalText;

    except Exception as e:
        print(str(e))