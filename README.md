# project-kopie
A simple browser extension to copy text from PC to phone over QR

![Use case 1](https://raw.githubusercontent.com/Chinmay-KB/project-kopie/master/screenshots/kopie1.jpg)

## What is Kopie?
Think of all those times when you needed to copy a lengthy URL, or a few lines of text, or some activation code to your phone. What are your ways? Mail yourself the text? Open Whatsapp web or any other messaging service and send youself the code? Now you have Kopie!
Kopie sits cosily in your browser extension list, ready to convert any text you have copied into a QR code. Just point your phone camera at it and you have that little piece of text on your phone!

### Limitations
I went on a hit and trial spree to find out what's the maximum length of text it can convert to QR code. Found out that it actually can handle everything thrown at it, but the bottleneck is the phone camera, which can not process a very dense QR. Hence I have manually throttled the character length at 500 characters for now. Also this has not yet been tested in firefox, any contribution towards that is welcome !

### Installation
I will try to publish this extension in the Chrome web store and Firefox Browser add-ons, until then you can side load it on your browser.
* Clone this repository `https://github.com/Chinmay-KB/project-kopie.git`
* Enable developer mode by going to chrome://extensions/ or its equivalent in other Chromium based browser.
* Select "Load Unpacked" and navigate to the extension folder of the cloned copy of this repository
* The icon should beside the address bar.
