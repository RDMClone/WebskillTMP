var scripts = ['https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js'];
var loaded = 0;

function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

function loadScripts() {
    for (var i = 0; i < scripts.length; i++) {
        loadScript(scripts[i], function () {
            loaded++;
            if (loaded == scripts.length) {
                hljs.highlightAll()
            }
        });
    }
}

loadScripts();
