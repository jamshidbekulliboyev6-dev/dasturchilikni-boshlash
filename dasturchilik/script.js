(function () {
    var S = {
        py: {
            code: '<span class="cm"># Salomlashuvchi dastur</span>\nism = <span class="st">"Dilnoza"</span>\n\n<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="st">1</span>, 4):\n    <span class="fn">print</span>(<span class="st">f"{i}. Salom, {ism}!"</span>)',
            out: ['1. Salom, Dilnoza!', '2. Salom, Dilnoza!', '3. Salom, Dilnoza!']
        },
        js: {
            code: '<span class="cm">// Salomlashuvchi dastur</span>\n<span class="kw">const</span> ism = <span class="st">"Dilnoza"</span>;\n\n<span class="kw">for</span> (<span class="kw">let</span> i = 1; i &lt;= 3; i++) {\n  console.<span class="fn">log</span>(<span class="st">`${i}. Salom, ${ism}!`</span>);\n}',
            out: ['1. Salom, Dilnoza!', '2. Salom, Dilnoza!', '3. Salom, Dilnoza!']
        }
    };
    var cur = 'py', code = document.getElementById('code'), out = document.getElementById('out'), timer = null;
    function show(l) {
        cur = l; code.innerHTML = S[l].code;
        out.innerHTML = '<em>Natija shu yerda chiqadi…</em>';
        clearTimeout(timer);
        document.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', t.dataset.l === l) });
    }
    document.querySelectorAll('.tab').forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.l) }) });
    document.getElementById('run').addEventListener('click', function () {
        clearTimeout(timer); out.textContent = '';
        var lines = S[cur].out, i = 0;
        (function next() {
            if (i < lines.length) { out.textContent += (i ? '\n' : '') + lines[i++]; timer = setTimeout(next, 380); }
        })();
    });
    show('py');
})();