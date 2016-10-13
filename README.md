# fis-parser-webp

A parser for fis to convert png or jpg file to webp.

* useAge

```js
// fis-conf.js
fis.match('*.{jpg,png}', {
	rExt: '.webp',
	parser: fis.plugin('webp',{
	    quality: 60
	})
})
```