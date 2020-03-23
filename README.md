# json-font

Simple class that can load a font from JSON
Fonts can be converted from BDF by using [bdf2json](https://github.com/oisteink/bdf2json)

Inspired in part by u8g2

usage:
```javascript
const jf = requre(json-font);
let font = new jf.json-font('fontname.json');
```