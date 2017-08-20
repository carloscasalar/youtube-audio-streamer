#!/usr/bin/env bash
# Create test container and run test inside (in the same way as made in travis)
docker rmi youtube-audio-streamer
docker rmi youtube-audio-streamer-travis
npm run clean
docker build . -f Dockerfile -t youtube-audio-streamer
docker build . -f Dockerfile-travis -t youtube-audio-streamer-travis
docker run --rm -it -e "NODE_ENV=CI" youtube-audio-streamer-travis
