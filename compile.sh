#! /usr/bin/env bash
fontcustom compile -F
wkhtmltoimage --crop-w 888 ./assets/fonts/icon_preview.html ./assets/fonts/preview.png
