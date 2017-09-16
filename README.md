# Youtube video streamer [![Build Status](https://travis-ci.org/carloscasalar/youtube-audio-streamer.svg?branch=master)](https://travis-ci.org/carloscasalar/youtube-audio-streamer)

This is a simple youtube audio streamer. It stream sound of a provided youtube URL to your browser.

After start point your browser to `http://localhost:3000/stream-by-url?youtubeUrl=[YOUTUBE URL ENCODED URL]`.
i. e., to listen the audio of `https://youtu.be/OZHinPswQ1g` just point the browser to 
`http://localhost:3000/stream-by-url?youtubeUrl=https%3A%2F%2Fyoutu.be%2FOZHinPswQ1g`

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
