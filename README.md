# droidscript-alt

An alternate interface for [DroidScript](http://droidscript.org/) to `app.*`.

This project is currently in beta and unstable: large chunks of code may suddenly change or appear. If something seems missing, try uninstalling/reinstalling.

## Installation

```
yarn add https://github.com/EGM/droidscript-alt
```

## License

MIT

## Example

```
import { alt } from "droidscript-alt"

function OnStart() {
    const layout = alt.createLayout("Linear", "VCenter,FillXY");

    const text = alt.createText("Hello")
        .setTextSize(32);

    layout.addChild(text);

    alt.addLayout(layout);
}
```
Some differences from the standard basic example:

1. The `import` statement. This project is meant to be modularized. Create layouts in one file, import them into a main app if you want.

2. Camel-casing. Method names have been changed from `GetType()` to `getType()`, more inline with mainstream programming practices.

3. `object.set*` methods returns the object it modifies, so multiple set methods can be chained together. Some `object.add*` also chain, such as `.addChild`.

Other differences that aren't shown:

1. Types. Because *TypeScript*.

2. Standardized parameter names. For example `clr`, `color`, and `colour` are all now `color` and `txt` and `text` are now `text`.

3. Abbreviated parameters have been expanded. For example `AdjustColor(hue,sat,bright,cont)` is now `adjustColor(hue,saturation,brightness,contrast)`, as this works better with Intellisense and TypeScript tools working with the source code.

## Why is this a thing?

*This wasn't created because DroidScript is broken, it works great.*

![cartoon](https://github.com/EGM/droidscript-alt/raw/master/19ff247.png)

I started out wanting a better way to organize my code than what was offered -- just wanting to write a quick type file and use TypeScript and Rollup to pull everything together. Suddenly it was like finding out how sausage was made. Soon it became easier to rewrite app.js objects and functions as classes.