# Youtube video streamer [![Build Status](https://travis-ci.org/carloscasalar/youtube-audio-streamer.svg?branch=master)](https://travis-ci.org/carloscasalar/youtube-audio-streamer)

## Installation

```
$ npm install
```

## Build

```
$ npm run build
```

## Start

```
$ npm run start
```

You can also run the app inside a docker container executing `run.sh` script.
It will create local image called `youtube-audio-streamer`.

## Test

```
$ npm test
```

You can also test it inside a docker container executing `test.sh` script.
It will create two Docker images: `youtube-audio-streamer` and `youtube-audio-streamer-travis`.

## Docker image

Build:
```
$ docker build . -t youtube-audio-streamer
```

Run container:
```
$ docker run --rm -it -p 3000:3000 youtube-audio-streamer
```

## Deploy to now.sh

[![Deploy to
now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/carloscasalar/youtube-audio-streamer/tree/master)
