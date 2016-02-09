# font-linux #

![Available logos](assets/preview.png)

Font-linux is an icon font containing logos of popular linux distributions for 
inclusion in websites.

## Usage ##
To use the font, include `assets/font-linux.css` as well as the
fonts in your project and use the CSS classes listed below.

	<link href="/assets/fontlinux.css" rel="stylesheet">

Or just link to it using [RawGit](//rawgit.com) (served via [MaxCDN](//www.maxcdn.com)'s network):

	<link href="//cdn.rawgit.com/Lukas-W/font-linux/v0.1/assets/font-linux.css" rel="stylesheet">

Available logos are:

| Distribution | CSS class                | Inclusion code
| -------------|--------------------------|-------------------------------------
| Arch Linux   | `fl-archlinux`           | `<span class="fl-archlinux"></span>`
| CentOS       | `fl-centos`              | `<span class="fl-centos"></span>`
| CoreOS       | `fl-coreos`              | `<span class="fl-coreos"></span>`
| Debian       | `fl-debian`              | `<span class="fl-debian"></span>`
| Fedora       | `fl-fedora`              | `<span class="fl-fedora"></span>`
| Gentoo       | `fl-gentoo`              | `<span class="fl-gentoo"></span>`
| Linux Mint   | `fl-linuxmint[-inverse]` | `<span class="fl-linuxmint"></span>`
| Mageia       | `fl-mageia`              | `<span class="fl-mageia"></span>`
| Mandriva     | `fl-mandriva`            | `<span class="fl-mandriva"></span>`
| OpenSUSE     | `fl-opensuse`            | `<span class="fl-opensuse"></span>`
| Red Hat      | `fl-redhat`              | `<span class="fl-redhat"></span>`
| Slackware    | `fl-slackware[-inverse]` | `<span class="fl-slackware"></span>`
| Ubuntu       | `fl-ubuntu[-inverse]`    | `<span class="fl-ubuntu"></span>`

## Dependencies ##
This project uses [fontcustom](//fontcustom.github.io/fontcustom/) to compile vectors into fonts.

## Compilation of the vectors ##

After making changes to one of the vectors, the fonts have to be recompiled.
From the root directory, run:

	fontcustom compile

To stage the new revision:

	git add assets .fontcustom-manifest.json
