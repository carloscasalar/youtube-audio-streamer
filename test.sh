#!/bin/bash
# script for "fast" local testing
docker rmi youtube-audio-streamer
docker build . -t youtube-audio-streamer
docker run --rm -it -p 3000:3000 youtube-audio-streamer