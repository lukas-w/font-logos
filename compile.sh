#! /usr/bin/env bash
fontcustom compile -F
wkhtmltoimage --crop-w 888 ./assets/icon_preview.html ./assets/preview.png
