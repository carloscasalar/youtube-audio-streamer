## 1.2.0 (2018-XX-YY)
Modified:
  * Upgrade node version to current LTS: 8.9
  * Upgrade nested dependency of momentjs to 2.19.3 due to known vulnerabilities in 2.18.1 (through scribe-js)

## 1.1.0 (2017-09-17)
Added:
  * Index page at `/`.
  * Use simple material style from https://getmdl.io/started/index.html

## 1.0.2 (2017-09-17)
Added:
  * Add log messages when stream ends.
  * Add pm2 process manager to docker image.

## 1.0.1 (2017-08-20)
Fixed:
  * Expose PORT 3000 on docker image.
  * StreamController dependencies are no correctly injected.

## 1.0.0 (2017-08-20)

Features:
  * Youtube streamer endpoint at `/stream-by-url?youtubeUrl=YOUTUBE_URL`