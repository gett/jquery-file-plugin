# jquery file plugin
the famous jquery file plugin is now on github. 
it's easy to use. just include `jquery` and `index.js` and you are ready to go.

``` js
$('#myelem').file(function(inp) {
	// a file has been chosen - now do what you want with the input
});
```

it also supports html5 files

``` js
$('#myelem').file(function(inp) {
	for (var i = 0; i < inp.files.length; i++) {
		console.log(inp.files[i].name); // yay html5!
	}
});
```

if you want to upload the file after it has been chosen you need to attach it to a form

``` js
$('#myelem').file(function(inp) {
	inp.id = inp.name = 'myFileInput';
	
	$('<form enctype="multipart/form-data" action="/upload" method="post"></form>')
		.append(inp).hide().appendTo('body').submit();
});
```

## License (MIT)

Copyright (C) 2011 by Ge.tt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.