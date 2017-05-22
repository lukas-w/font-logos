# font-os #

![Available logos](assets/fonts/preview.png)

font-os is an icon font containing Operating System logos to be used on your website.

## Usage ##

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

To use the font, include `assets/css/font-os.css` as well as the
fonts in your project and use the CSS classes listed below.

	<link href="/assets/css/font-os.css" rel="stylesheet">

Or via `npm`

`npm install font-os --save`


Available logos are:

| Distribution | CSS class                | Inclusion code
| -------------|--------------------------|-------------------------------------
| Alpine       | `fo-alpine`              | `<span class="fo-alpine"></span>`
| AOSC OS      | `fo-aosc`                | `<span class="fo-aosc"></span>`
| Arch Linux   | `fo-archlinux`           | `<span class="fo-archlinux"></span>`
| Apple        | `fo-apple`               | `<span class="fo-apple"></span>`
| CentOS       | `fo-centos`              | `<span class="fo-centos"></span>`
| CoreOS       | `fo-coreos`              | `<span class="fo-coreos"></span>`
| Debian       | `fo-debian`              | `<span class="fo-debian"></span>`
| Docker       | `fo-docker`              | `<span class="fo-docker"></span>`
| elementary OS| `fo-elementary`          | `<span class="fo-elementary"></span>`
| Fedora       | `fo-fedora[-inverse]`    | `<span class="fo-fedora"></span>`
| FreeBSD      | `fo-freebsd`             | `<span class="fo-freebsd"></span>`
| Gentoo       | `fo-gentoo`              | `<span class="fo-gentoo"></span>`
| Linux Mint   | `fo-linuxmint[-inverse]` | `<span class="fo-linuxmint"></span>`
| Mageia       | `fo-mageia`              | `<span class="fo-mageia"></span>`
| Manjaro      | `fo-manjaro`             | `<span class="fo-manjaro"></span>`
| Mandriva     | `fo-mandriva`            | `<span class="fo-mandriva"></span>`
| NixOS        | `fo-nixos`               | `<span class="fo-nixos"></span>`
| OpenSUSE     | `fo-opensuse`            | `<span class="fo-opensuse"></span>`
| Raspberry Pi | `fo-raspberry-pi`        | `<span class="fo-raspberry-pi"></span>`
| Red Hat      | `fo-redhat`              | `<span class="fo-redhat"></span>`
| Sabayon      | `fo-sabayon`             | `<span class="fo-sabayon"></span>`
| Slackware    | `fo-slackware[-inverse]` | `<span class="fo-slackware"></span>`
| Tux          | `fo-tux`                 | `<span class="fo-tux"></span>`
| Ubuntu       | `fo-ubuntu[-inverse]`    | `<span class="fo-ubuntu"></span>`

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
