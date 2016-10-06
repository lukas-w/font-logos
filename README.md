# font-linux #

![Available logos](assets/preview.png)

Font-linux is an icon font containing logos of popular linux distributions for 
inclusion in websites.

## Usage ##

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

To use the font, include `assets/font-linux.css` as well as the
fonts in your project and use the CSS classes listed below.

	<link href="/assets/fontlinux.css" rel="stylesheet">

Or just link to it using [RawGit](//rawgit.com) (served via [MaxCDN](//www.maxcdn.com)'s network):

	<link href="//cdn.rawgit.com/Lukas-W/font-linux/v0.7/assets/font-linux.css" rel="stylesheet">

Available logos are:

| Distribution | CSS class                | Inclusion code
| -------------|--------------------------|-------------------------------------
| AOSC OS      | `fl-aosc`                | `<span class="fl-aosc"></span>`
| Arch Linux   | `fl-archlinux`           | `<span class="fl-archlinux"></span>`
| Apple        | `fl-apple`               | `<span class="fl-apple"></span>`
| CentOS       | `fl-centos`              | `<span class="fl-centos"></span>`
| CoreOS       | `fl-coreos`              | `<span class="fl-coreos"></span>`
| Debian       | `fl-debian`              | `<span class="fl-debian"></span>`
| elementary OS| `fl-elementary`          | `<span class="fl-elementary"></span>`
| Fedora       | `fl-fedora[-inverse]`    | `<span class="fl-fedora"></span>`
| FreeBSD      | `fl-freebsd`             | `<span class="fl-freebsd"></span>`
| Gentoo       | `fl-gentoo`              | `<span class="fl-gentoo"></span>`
| Linux Mint   | `fl-linuxmint[-inverse]` | `<span class="fl-linuxmint"></span>`
| Mageia       | `fl-mageia`              | `<span class="fl-mageia"></span>`
| Manjaro      | `fl-manjaro`             | `<span class="fl-manjaro"></span>`
| Mandriva     | `fl-mandriva`            | `<span class="fl-mandriva"></span>`
| NixOS        | `fl-nixos`               | `<span class="fl-nixos"></span>`
| OpenSUSE     | `fl-opensuse`            | `<span class="fl-opensuse"></span>`
| Raspberry Pi | `fl-raspberry-pi`        | `<span class="fl-raspberry-pi"></span>`
| Red Hat      | `fl-redhat`              | `<span class="fl-redhat"></span>`
| Sabayon      | `fl-sabayon`             | `<span class="fl-sabayon"></span>`
| Slackware    | `fl-slackware[-inverse]` | `<span class="fl-slackware"></span>`
| Tux          | `fl-tux`                 | `<span class="fl-tux"></span>`
| Ubuntu       | `fl-ubuntu[-inverse]`    | `<span class="fl-ubuntu"></span>`

## Dependencies ##
* This project uses [fontcustom](//fontcustom.github.io/fontcustom/) to compile vectors into fonts.
* [wkhtmltopdf](http://wkhtmltopdf.org/) is used to generate this readme's preview image.

## Compilation of the vectors ##

After making changes to one of the vectors, the fonts have to be recompiled.
From the root directory, run:

	fontcustom compile

To compile everything including the readme's `preview.png`, run:

	sh ./compile.sh

To stage the new revision:

	git add assets .fontcustom-manifest.json
