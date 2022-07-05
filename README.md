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

|     Distribution     |       CSS class        |                 Code                 |
| -------------------- | ---------------------- | ------------------------------------ |
| Alpine               | `fl-alpine`            | <i class="fl-alpine"></i>            |
| AOSC OS              | `fl-aosc`              | <i class="fl-aosc"></i>              |
| Apple                | `fl-apple`             | <i class="fl-apple"></i>             |
| Arch Linux           | `fl-archlinux`         | <i class="fl-archlinux"></i>         |
| CentOS               | `fl-centos`            | <i class="fl-centos"></i>            |
| CoreOS               | `fl-coreos`            | <i class="fl-coreos"></i>            |
| Debian               | `fl-debian`            | <i class="fl-debian"></i>            |
| Devuan               | `fl-devuan`            | <i class="fl-devuan"></i>            |
| Docker               | `fl-docker`            | <i class="fl-docker"></i>            |
| elementary OS        | `fl-elementary`        | <i class="fl-elementary"></i>        |
| Fedora               | `fl-fedora`            | <i class="fl-fedora"></i>            |
| Fedora (inverse)     | `fl-fedora-inverse`    | <i class="fl-fedora-inverse"></i>    |
| FreeBSD              | `fl-freebsd`           | <i class="fl-freebsd"></i>           |
| Gentoo               | `fl-gentoo`            | <i class="fl-gentoo"></i>            |
| Linux Mint           | `fl-linuxmint`         | <i class="fl-linuxmint"></i>         |
| Linux Mint (inverse) | `fl-linuxmint-inverse` | <i class="fl-linuxmint-inverse"></i> |
| Mageia               | `fl-mageia`            | <i class="fl-mageia"></i>            |
| Mandriva             | `fl-mandriva`          | <i class="fl-mandriva"></i>          |
| Manjaro              | `fl-manjaro`           | <i class="fl-manjaro"></i>           |
| NixOS                | `fl-nixos`             | <i class="fl-nixos"></i>             |
| OpenSUSE             | `fl-opensuse`          | <i class="fl-opensuse"></i>          |
| Raspberry pi         | `fl-raspberry-pi`      | <i class="fl-raspberry-pi"></i>      |
| Red Hat              | `fl-redhat`            | <i class="fl-redhat"></i>            |
| Sabayon              | `fl-sabayon`           | <i class="fl-sabayon"></i>           |
| Slackware            | `fl-slackware`         | <i class="fl-slackware"></i>         |
| Slackware (inverse)  | `fl-slackware-inverse` | <i class="fl-slackware-inverse"></i> |
| Tux                  | `fl-tux`               | <i class="fl-tux"></i>               |
| Ubuntu               | `fl-ubuntu`            | <i class="fl-ubuntu"></i>            |
| Ubuntu (inverse)     | `fl-ubuntu-inverse`    | <i class="fl-ubuntu-inverse"></i>    |
| Alma Linux           | `fl-almalinux`         | <i class="fl-almalinux"></i>         |
| ArchLabs             | `fl-archlabs`          | <i class="fl-archlabs"></i>          |
| Artix Linux          | `fl-artix`             | <i class="fl-artix"></i>             |
| Budgie               | `fl-budgie`            | <i class="fl-budgie"></i>            |
| Deepin               | `fl-deepin`            | <i class="fl-deepin"></i>            |
| Endeavour OS         | `fl-endeavour`         | <i class="fl-endeavour"></i>         |
| Ferris               | `fl-ferris`            | <i class="fl-ferris"></i>            |
| Flathub              | `fl-flathub`           | <i class="fl-flathub"></i>           |
| GNU Guix             | `fl-gnu-guix`          | <i class="fl-gnu-guix"></i>          |
| illumos              | `fl-illumos`           | <i class="fl-illumos"></i>           |
| Kali Linux           | `fl-kali-linux`        | <i class="fl-kali-linux"></i>        |
| OpenBSD              | `fl-openbsd`           | <i class="fl-openbsd"></i>           |
| Parrot OS            | `fl-parrot`            | <i class="fl-parrot"></i>            |
| Pop!_OS              | `fl-pop-os`            | <i class="fl-pop-os"></i>            |
| Rocky Linux          | `fl-rocky-linux`       | <i class="fl-rocky-linux"></i>       |
| Snappy               | `fl-snappy`            | <i class="fl-snappy"></i>            |
| Solus                | `fl-solus`             | <i class="fl-solus"></i>             |
| Void                 | `fl-void`              | <i class="fl-void"></i>              |
| Zorin OS             | `fl-zorin`             | <i class="fl-zorin"></i>             |

## Building ##

Make sure you have the following dependencies installed:
* Node, Python and jq to run the build scripts
* [FontForge](//fontforge.org) to generate the fonts
* [wkhtmltopdf](http://wkhtmltopdf.org/) to generate this readme's preview image

Then run `make`.
