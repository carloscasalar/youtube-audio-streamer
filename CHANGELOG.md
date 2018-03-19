## 1.2.0 (2018-XX-YY)
*Add:*
  * Listen button redirects to a new page `/player` that allows listen the audio with rustic audio controls.

*Fix:*
  * Upgrade node version to current LTS: 8.9
  * Upgrade nested dependency of momentjs to 2.19.3 due to known vulnerabilities in 2.18.1 (through scribe-js)
  * Upgrade nested dependency ytdl-core to 0.20.2 due to [this issue](https://github.com/JamesKyburz/youtube-audio-stream/issues/110#issuecomment-369415811)

## 1.1.0 (2017-09-17)
*Add:*
  * Index page at `/`.
  * Use simple material style from [getmdl.io](https://getmdl.io/started/index.html)

## 1.0.2 (2017-09-17)
*Add:*
  * Add log messages when stream ends.
  * Add pm2 process manager to docker image.

## 1.0.1 (2017-08-20)
*Fix:*
  * Expose PORT 3000 on docker image.
  * StreamController dependencies are no correctly injected.

## 1.0.0 (2017-08-20)

*Add:*
  * Youtube streamer endpoint at `/stream-by-url?youtubeUrl=YOUTUBE_URL`