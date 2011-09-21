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
		for (var i = 0; i < inp.files; i++) {
			console.log(inp.files[i].name); // yay html5!
		}
	});
```
