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

	<link href="//cdn.jsdelivr.net/npm/font-logos@1/assets/font-logos.css" rel="stylesheet">

## Usage ##

Include an icon using the corresponding CSS class in an empty element:

	<i class="fl-[icon]"></i>

Add `fl-fw` as class for a fixed width icon.

Available logos are:

|       Distribution        |       CSS class        |                  Code                  | Code point | Image
| ------------------------- | ---------------------- | -------------------------------------- | ---------- | -----------
| Alma Linux                | `fl-almalinux`         | `<i class="fl-almalinux"></i>`         | `0xf31d`   | <img src="vectors/almalinux.svg" width="24">
| Alpine                    | `fl-alpine`            | `<i class="fl-alpine"></i>`            | `0xf300`   | <img src="vectors/alpine.svg" width="24">
| AOSC OS                   | `fl-aosc`              | `<i class="fl-aosc"></i>`              | `0xf301`   | <img src="vectors/aosc.svg" width="24">
| Apple                     | `fl-apple`             | `<i class="fl-apple"></i>`             | `0xf302`   | <img src="vectors/apple.svg" width="24">
| ArchLabs                  | `fl-archlabs`          | `<i class="fl-archlabs"></i>`          | `0xf31e`   | <img src="vectors/archlabs.svg" width="24">
| Arch Linux                | `fl-archlinux`         | `<i class="fl-archlinux"></i>`         | `0xf303`   | <img src="vectors/archlinux.svg" width="24">
| ArcoLinux                 | `fl-arcolinux`         | `<i class="fl-arcolinux"></i>`         | `0xf330`   | <img src="vectors/arcolinux.svg" width="24">
| Artix Linux               | `fl-artix`             | `<i class="fl-artix"></i>`             | `0xf31f`   | <img src="vectors/artix.svg" width="24">
| BigLinux                  | `fl-biglinux`          | `<i class="fl-biglinux"></i>`          | `0xf331`   | <img src="vectors/biglinux.svg" width="24">
| Budgie                    | `fl-budgie`            | `<i class="fl-budgie"></i>`            | `0xf320`   | <img src="vectors/budgie.svg" width="24">
| CentOS                    | `fl-centos`            | `<i class="fl-centos"></i>`            | `0xf304`   | <img src="vectors/centos.svg" width="24">
| CoreOS                    | `fl-coreos`            | `<i class="fl-coreos"></i>`            | `0xf305`   | <img src="vectors/coreos.svg" width="24">
| Crystal Linux             | `fl-crystal`           | `<i class="fl-crystal"></i>`           | `0xf332`   | <img src="vectors/crystal.svg" width="24">
| Debian                    | `fl-debian`            | `<i class="fl-debian"></i>`            | `0xf306`   | <img src="vectors/debian.svg" width="24">
| Deepin                    | `fl-deepin`            | `<i class="fl-deepin"></i>`            | `0xf321`   | <img src="vectors/deepin.svg" width="24">
| Devuan                    | `fl-devuan`            | `<i class="fl-devuan"></i>`            | `0xf307`   | <img src="vectors/devuan.svg" width="24">
| Docker                    | `fl-docker`            | `<i class="fl-docker"></i>`            | `0xf308`   | <img src="vectors/docker.svg" width="24">
| elementary OS             | `fl-elementary`        | `<i class="fl-elementary"></i>`        | `0xf309`   | <img src="vectors/elementary.svg" width="24">
| Endeavour OS              | `fl-endeavour`         | `<i class="fl-endeavour"></i>`         | `0xf322`   | <img src="vectors/endeavour.svg" width="24">
| Fedora                    | `fl-fedora`            | `<i class="fl-fedora"></i>`            | `0xf30a`   | <img src="vectors/fedora.svg" width="24">
| Fedora (inverse)          | `fl-fedora-inverse`    | `<i class="fl-fedora-inverse"></i>`    | `0xf30b`   | <img src="vectors/fedora-inverse.svg" width="24">
| Ferris                    | `fl-ferris`            | `<i class="fl-ferris"></i>`            | `0xf323`   | <img src="vectors/ferris.svg" width="24">
| Flathub                   | `fl-flathub`           | `<i class="fl-flathub"></i>`           | `0xf324`   | <img src="vectors/flathub.svg" width="24">
| FreeBSD                   | `fl-freebsd`           | `<i class="fl-freebsd"></i>`           | `0xf30c`   | <img src="vectors/freebsd.svg" width="24">
| Garuda Linux              | `fl-garuda`            | `<i class="fl-garuda"></i>`            | `0xf333`   | <img src="vectors/garuda.svg" width="24">
| Gentoo                    | `fl-gentoo`            | `<i class="fl-gentoo"></i>`            | `0xf30d`   | <img src="vectors/gentoo.svg" width="24">
| GNOME                     | `fl-gnome`             | `<i class="fl-gnome"></i>`             | `0xf334`   | <img src="vectors/gnome.svg" width="24">
| GNU Guix                  | `fl-gnu-guix`          | `<i class="fl-gnu-guix"></i>`          | `0xf325`   | <img src="vectors/gnu-guix.svg" width="24">
| Hyperbola GNU/Linux-libre | `fl-hyperbola`         | `<i class="fl-hyperbola"></i>`         | `0xf335`   | <img src="vectors/hyperbola.svg" width="24">
| illumos                   | `fl-illumos`           | `<i class="fl-illumos"></i>`           | `0xf326`   | <img src="vectors/illumos.svg" width="24">
| Kali Linux                | `fl-kali-linux`        | `<i class="fl-kali-linux"></i>`        | `0xf327`   | <img src="vectors/kali-linux.svg" width="24">
| Linux Mint                | `fl-linuxmint`         | `<i class="fl-linuxmint"></i>`         | `0xf30e`   | <img src="vectors/linuxmint.svg" width="24">
| Linux Mint (inverse)      | `fl-linuxmint-inverse` | `<i class="fl-linuxmint-inverse"></i>` | `0xf30f`   | <img src="vectors/linuxmint-inverse.svg" width="24">
| LXLE                      | `fl-lxle`              | `<i class="fl-lxle"></i>`              | `0xf336`   | <img src="vectors/lxle.svg" width="24">
| Mageia                    | `fl-mageia`            | `<i class="fl-mageia"></i>`            | `0xf310`   | <img src="vectors/mageia.svg" width="24">
| Mandriva                  | `fl-mandriva`          | `<i class="fl-mandriva"></i>`          | `0xf311`   | <img src="vectors/mandriva.svg" width="24">
| Manjaro                   | `fl-manjaro`           | `<i class="fl-manjaro"></i>`           | `0xf312`   | <img src="vectors/manjaro.svg" width="24">
| NixOS                     | `fl-nixos`             | `<i class="fl-nixos"></i>`             | `0xf313`   | <img src="vectors/nixos.svg" width="24">
| OpenBSD                   | `fl-openbsd`           | `<i class="fl-openbsd"></i>`           | `0xf328`   | <img src="vectors/openbsd.svg" width="24">
| OpenSUSE                  | `fl-opensuse`          | `<i class="fl-opensuse"></i>`          | `0xf314`   | <img src="vectors/opensuse.svg" width="24">
| Parabola GNU/Linux-libre  | `fl-parabola`          | `<i class="fl-parabola"></i>`          | `0xf337`   | <img src="vectors/parabola.svg" width="24">
| Parrot OS                 | `fl-parrot`            | `<i class="fl-parrot"></i>`            | `0xf329`   | <img src="vectors/parrot.svg" width="24">
| Pop!_OS                   | `fl-pop-os`            | `<i class="fl-pop-os"></i>`            | `0xf32a`   | <img src="vectors/pop-os.svg" width="24">
| Puppy Linux               | `fl-puppy`             | `<i class="fl-puppy"></i>`             | `0xf338`   | <img src="vectors/puppy.svg" width="24">
| Raspberry pi              | `fl-raspberry-pi`      | `<i class="fl-raspberry-pi"></i>`      | `0xf315`   | <img src="vectors/raspberry-pi.svg" width="24">
| Red Hat                   | `fl-redhat`            | `<i class="fl-redhat"></i>`            | `0xf316`   | <img src="vectors/redhat.svg" width="24">
| Rocky Linux               | `fl-rocky-linux`       | `<i class="fl-rocky-linux"></i>`       | `0xf32b`   | <img src="vectors/rocky-linux.svg" width="24">
| Sabayon                   | `fl-sabayon`           | `<i class="fl-sabayon"></i>`           | `0xf317`   | <img src="vectors/sabayon.svg" width="24">
| Slackware                 | `fl-slackware`         | `<i class="fl-slackware"></i>`         | `0xf318`   | <img src="vectors/slackware.svg" width="24">
| Slackware (inverse)       | `fl-slackware-inverse` | `<i class="fl-slackware-inverse"></i>` | `0xf319`   | <img src="vectors/slackware-inverse.svg" width="24">
| Snappy                    | `fl-snappy`            | `<i class="fl-snappy"></i>`            | `0xf32c`   | <img src="vectors/snappy.svg" width="24">
| Solus                     | `fl-solus`             | `<i class="fl-solus"></i>`             | `0xf32d`   | <img src="vectors/solus.svg" width="24">
| Trisquel GNU/Linux        | `fl-trisquel`          | `<i class="fl-trisquel"></i>`          | `0xf339`   | <img src="vectors/trisquel.svg" width="24">
| Tux                       | `fl-tux`               | `<i class="fl-tux"></i>`               | `0xf31a`   | <img src="vectors/tux.svg" width="24">
| Ubuntu                    | `fl-ubuntu`            | `<i class="fl-ubuntu"></i>`            | `0xf31b`   | <img src="vectors/ubuntu.svg" width="24">
| Ubuntu (inverse)          | `fl-ubuntu-inverse`    | `<i class="fl-ubuntu-inverse"></i>`    | `0xf31c`   | <img src="vectors/ubuntu-inverse.svg" width="24">
| Void                      | `fl-void`              | `<i class="fl-void"></i>`              | `0xf32e`   | <img src="vectors/void.svg" width="24">
| Zorin OS                  | `fl-zorin`             | `<i class="fl-zorin"></i>`             | `0xf32f`   | <img src="vectors/zorin.svg" width="24">

## Building ##

Make sure you have the following dependencies installed:
* Node, Python and jq to run the build scripts
* [FontForge](//fontforge.org) to generate the fonts
* [wkhtmltopdf](http://wkhtmltopdf.org/) to generate this readme's preview image

Then run `npm install`/`yarn install` and `make`.
