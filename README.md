# font-logos #

![Available logos](assets/readme-header.png)

font-logos is an icon font containing logos of popular linux distributions and other open source software.

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

## Installation ##

Install the font by downloading and unpacking the latest release's zip manually or installing it from npm:

	npm install font-logos

To use the font, include `assets/font-logos.css` as well as the
fonts in your project and use the CSS classes listed below.

	<link href="/assets/font-logos.css" rel="stylesheet">

Alternatively just link to it using a CDN such as [jsDelivr](//jsdelivr.com):

	<link href="//cdn.jsdelivr.net/npm/font-logos@0.18.0/assets/font-logos.css" rel="stylesheet">

## Usage ##

Include an icon using the corresponding CSS class in an empty element:

	<i class="fl-[icon]"></i>

Add `fl-fw` as class for a fixed width icon.

Available logos are:

|     Distribution     |       CSS class        |                  Code                  | Code point
| -------------------- | ---------------------- | -------------------------------------- | ---------
| Alma Linux           | `fl-almalinux`         | `<i class="fl-almalinux"></i>`         | `0xf31d`
| Alpine               | `fl-alpine`            | `<i class="fl-alpine"></i>`            | `0xf300`
| AOSC OS              | `fl-aosc`              | `<i class="fl-aosc"></i>`              | `0xf301`
| Apple                | `fl-apple`             | `<i class="fl-apple"></i>`             | `0xf302`
| ArchLabs             | `fl-archlabs`          | `<i class="fl-archlabs"></i>`          | `0xf31e`
| Arch Linux           | `fl-archlinux`         | `<i class="fl-archlinux"></i>`         | `0xf303`
| Artix Linux          | `fl-artix`             | `<i class="fl-artix"></i>`             | `0xf31f`
| Budgie               | `fl-budgie`            | `<i class="fl-budgie"></i>`            | `0xf320`
| CentOS               | `fl-centos`            | `<i class="fl-centos"></i>`            | `0xf304`
| CoreOS               | `fl-coreos`            | `<i class="fl-coreos"></i>`            | `0xf305`
| Debian               | `fl-debian`            | `<i class="fl-debian"></i>`            | `0xf306`
| Deepin               | `fl-deepin`            | `<i class="fl-deepin"></i>`            | `0xf321`
| Devuan               | `fl-devuan`            | `<i class="fl-devuan"></i>`            | `0xf307`
| Docker               | `fl-docker`            | `<i class="fl-docker"></i>`            | `0xf308`
| elementary OS        | `fl-elementary`        | `<i class="fl-elementary"></i>`        | `0xf309`
| Endeavour OS         | `fl-endeavour`         | `<i class="fl-endeavour"></i>`         | `0xf322`
| Fedora               | `fl-fedora`            | `<i class="fl-fedora"></i>`            | `0xf30a`
| Fedora (inverse)     | `fl-fedora-inverse`    | `<i class="fl-fedora-inverse"></i>`    | `0xf30b`
| Ferris               | `fl-ferris`            | `<i class="fl-ferris"></i>`            | `0xf323`
| Flathub              | `fl-flathub`           | `<i class="fl-flathub"></i>`           | `0xf324`
| FreeBSD              | `fl-freebsd`           | `<i class="fl-freebsd"></i>`           | `0xf30c`
| Gentoo               | `fl-gentoo`            | `<i class="fl-gentoo"></i>`            | `0xf30d`
| GNU Guix             | `fl-gnu-guix`          | `<i class="fl-gnu-guix"></i>`          | `0xf325`
| illumos              | `fl-illumos`           | `<i class="fl-illumos"></i>`           | `0xf326`
| Kali Linux           | `fl-kali-linux`        | `<i class="fl-kali-linux"></i>`        | `0xf327`
| Linux Mint           | `fl-linuxmint`         | `<i class="fl-linuxmint"></i>`         | `0xf30e`
| Linux Mint (inverse) | `fl-linuxmint-inverse` | `<i class="fl-linuxmint-inverse"></i>` | `0xf30f`
| Mageia               | `fl-mageia`            | `<i class="fl-mageia"></i>`            | `0xf310`
| Mandriva             | `fl-mandriva`          | `<i class="fl-mandriva"></i>`          | `0xf311`
| Manjaro              | `fl-manjaro`           | `<i class="fl-manjaro"></i>`           | `0xf312`
| NixOS                | `fl-nixos`             | `<i class="fl-nixos"></i>`             | `0xf313`
| OpenBSD              | `fl-openbsd`           | `<i class="fl-openbsd"></i>`           | `0xf328`
| OpenSUSE             | `fl-opensuse`          | `<i class="fl-opensuse"></i>`          | `0xf314`
| Parrot OS            | `fl-parrot`            | `<i class="fl-parrot"></i>`            | `0xf329`
| Pop!_OS              | `fl-pop-os`            | `<i class="fl-pop-os"></i>`            | `0xf32a`
| Raspberry pi         | `fl-raspberry-pi`      | `<i class="fl-raspberry-pi"></i>`      | `0xf315`
| Red Hat              | `fl-redhat`            | `<i class="fl-redhat"></i>`            | `0xf316`
| Rocky Linux          | `fl-rocky-linux`       | `<i class="fl-rocky-linux"></i>`       | `0xf32b`
| Sabayon              | `fl-sabayon`           | `<i class="fl-sabayon"></i>`           | `0xf317`
| Slackware            | `fl-slackware`         | `<i class="fl-slackware"></i>`         | `0xf318`
| Slackware (inverse)  | `fl-slackware-inverse` | `<i class="fl-slackware-inverse"></i>` | `0xf319`
| Snappy               | `fl-snappy`            | `<i class="fl-snappy"></i>`            | `0xf32c`
| Solus                | `fl-solus`             | `<i class="fl-solus"></i>`             | `0xf32d`
| Tux                  | `fl-tux`               | `<i class="fl-tux"></i>`               | `0xf31a`
| Ubuntu               | `fl-ubuntu`            | `<i class="fl-ubuntu"></i>`            | `0xf31b`
| Ubuntu (inverse)     | `fl-ubuntu-inverse`    | `<i class="fl-ubuntu-inverse"></i>`    | `0xf31c`
| Void                 | `fl-void`              | `<i class="fl-void"></i>`              | `0xf32e`
| Zorin OS             | `fl-zorin`             | `<i class="fl-zorin"></i>`             | `0xf32f`

## Building ##

Make sure you have the following dependencies installed:
* Node, Python and jq to run the build scripts
* [FontForge](//fontforge.org) to generate the fonts
* [wkhtmltopdf](http://wkhtmltopdf.org/) to generate this readme's preview image

Then run `make`.
