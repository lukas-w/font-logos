# font-logos #

![Available logos](assets/preview.png)

Font-logos is an icon font containing logos of popular linux distributions and other open source software for inclusion in websites.

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

## Installation ##

Install the font by downloading and unpacking the latest release's zip manually or installing it from npm.

	npm install font-logos

To use the font, include `assets/font-logos.css` as well as the
fonts in your project and use the CSS classes listed below.

	<link href="/assets/fontlogos.css" rel="stylesheet">

Alternatively just link to it using a CDN such as [jsDelivr](//jsdelivr.com):

	<link href="//cdn.jsdelivr.net/gh/Lukas-W/font-logos@v0.17/assets/font-logos.css" rel="stylesheet">

## Usage ##


Available logos are:

| Distribution  | CSS class                  | Inclusion code                          |
| ------------- | -------------------------- | --------------------------------------- |
| Alma Linux    | `fl-almalinux`             | `<span class="fl-almalinux"></span>`    |
| Alpine        | `fl-alpine`                | `<span class="fl-alpine"></span>`       |
| AOSC OS       | `fl-aosc`                  | `<span class="fl-aosc"></span>`         |
| Arch Linux    | `fl-archlinux`             | `<span class="fl-archlinux"></span>`    |
| ArchLabs      | `fl-archlabs`              | `<span class="fl-archlabs"></span>`     |
| Artix Linux   | `fl-artix`                 | `<span class="fl-artix"></span>`        |
| Apple         | `fl-apple`                 | `<span class="fl-apple"></span>`        |
| Budgie        | `fl-budgie`                | `<span class="fl-budgie"></span>`       |
| CentOS        | `fl-centos`                | `<span class="fl-centos"></span>`       |
| CoreOS        | `fl-coreos`                | `<span class="fl-coreos"></span>`       |
| Debian        | `fl-debian`                | `<span class="fl-debian"></span>`       |
| Deepin        | `fl-deepin`                | `<span class="fl-deepin"></span>`       |
| Devuan        | `fl-devuan`                | `<span class="fl-devuan"></span>`       |
| Docker        | `fl-docker`                | `<span class="fl-docker"></span>`       |
| elementary OS | `fl-elementary`            | `<span class="fl-elementary"></span>`   |
| Fedora        | `fl-fedora[-inverse]`      | `<span class="fl-fedora"></span>`       |
| Ferris        | `fl-ferris`                | `<span class="fl-ferris"></span>`       |
| FreeBSD       | `fl-freebsd`               | `<span class="fl-freebsd"></span>`      |
| Gentoo        | `fl-gentoo`                | `<span class="fl-gentoo"></span>`       |
| illumos       | `fl-illumos`               | `<span class="fl-illumos"></span>`      |
| Kali Linux    | `fl-kali-linux`            | `<span class="fl-kali-linux"></span>`   |
| Linux Mint    | `fl-linuxmint[-inverse]`   | `<span class="fl-linuxmint"></span>`    |
| Mageia        | `fl-mageia`                | `<span class="fl-mageia"></span>`       |
| Manjaro       | `fl-manjaro`               | `<span class="fl-manjaro"></span>`      |
| Mandriva      | `fl-mandriva`              | `<span class="fl-mandriva"></span>`     |
| NixOS         | `fl-nixos`                 | `<span class="fl-nixos"></span>`        |
| OpenBSD       | `fl-openbsd`               | `<span class="fl-openbsd"></span>`      |
| OpenSUSE      | `fl-opensuse`              | `<span class="fl-opensuse"></span>`     |
| Pop!_OS       | `fl-pop-os`                | `<span class="fl-pop-os"></span>`       |
| Raspberry Pi  | `fl-raspberry-pi`          | `<span class="fl-raspberry-pi"></span>` |
| Red Hat       | `fl-redhat`                | `<span class="fl-redhat"></span>`       |
| Sabayon       | `fl-sabayon`               | `<span class="fl-sabayon"></span>`      |
| Slackware     | `fl-slackware[-inverse]`   | `<span class="fl-slackware"></span>`    |
| Solus         | `fl-solus`                 | `<span class="fl-solus"></span>`        |
| Tux           | `fl-tux`                   | `<span class="fl-tux"></span>`          |
| Ubuntu        | `fl-ubuntu[-inverse]`      | `<span class="fl-ubuntu"></span>`       |
| Void          | `fl-void`                  | `<span class="fl-void"></span>`         |
| Zorin OS      | `fl-zorin`                 | `<span class="fl-zorin"></span>`        |

## Dependencies ##
* This project uses [fontcustom](https://github.com/FontCustom/fontcustom) to compile vectors into fonts.
* [wkhtmltopdf](http://wkhtmltopdf.org/) is used to generate this readme's preview image.

## Compilation of the vectors ##

After making changes to one of the vectors, the fonts have to be recompiled.
From the root directory, run:

	fontcustom compile

To compile everything including the readme's `preview.png`, run:

	sh ./compile.sh

To stage the new revision:

	git add assets .fontcustom-manifest.json
