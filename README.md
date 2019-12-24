# Parcel, React, Typescript Browser Extension Sample

This was a little experiment of mine to see how putting together a browser extension that made use of
[Parcel](https://parceljs.org) for bundling, built in Typescript and rendering from React would look.

Makes use of the [Parcel WebExtension Plugin](https://github.com/kevincharm/parcel-plugin-web-extension)
and [SVGR](https://www.smooth-code.com/open-source/svgr/) for importing SVGs as React components.

# Setup

- `yarn install`
- `yarn package`

This should build and package the extension into `web-ext-artifacts` which you can load into firefox through `about:debugging` or chrome `chrome://extensions/`.

# Credits

Hexagon Icon from [Feather Icons](https://feathericons.com/). Converted to pngs for Chromes sake with Affinity Designer.
