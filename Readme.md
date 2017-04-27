# mobile_dev_plus_test_2017_esp8266
ESP 8266 Mobile Dev Plus Test nodejs code. This works along with https://github.com/lgleasain/mobile_dev_plus_test_2017_esp8266 to use a nodemcu with neopixels to display small messages and colors.

## Usage
To run this simply clone the repo, make sure that you have node.js installed.  run npm install and then node index.j

This script emits a chat message using socket.io to a socket that your nodemcu is listening to. The message is expected to be a json structure in the format of {pixel_#: {'r': 0, 'g': 0, 'b': 0}, ...}

It is aimed towards using a 4x4 array of neopixels. As such a few letters have been defined which will generate the raw format by sending in the letter,  foregound and background colors. It also allows you to monitor some Twitter streams and display a message on receiving it. Messages are sent by sending letters in one second intervals.

If you monitor more than 2 streams you will be rate limited. You will want to set this up under you own Twitter credentials instead of the ones listed here.  You can set these up under your account at https://apps.twitter.com/ .  
