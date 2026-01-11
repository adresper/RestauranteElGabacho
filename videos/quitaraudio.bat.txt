@echo off
echo Quitando audio de todos los videos...
echo.

ffmpeg -i "evento1.mp4" -c:v copy -an "evento1-SA.mp4"
ffmpeg -i "evento2.mp4" -c:v copy -an "evento2-SA.mp4"
ffmpeg -i "evento3.mp4" -c:v copy -an "evento3-SA.mp4"
ffmpeg -i "vistadellugarvideo.mp4" -c:v copy -an "vistadellugarvideo-SA.mp4"
ffmpeg -i "vistadellugarvideo2.mp4" -c:v copy -an "vistadellugarvideo2-SA.mp4"

echo ¡Listo! Audio quitado de 5 videos.
pause