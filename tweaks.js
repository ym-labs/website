/* ============================================================
   UPLIFT^  ·  Tweaks
   Kleiner, persistenter Steuerpanel. Schreibt nach
   localStorage("uplift-tweaks") und setzt data-Attribute /
   CSS-Variablen auf <html>. Funktioniert über beide Seiten.
   ============================================================ */
(function () {
  var KEY = "uplift-tweaks";
  var DEFAULTS = { char: "grotesk", theme: "light", accent: "none", radius: 6, density: "normal", wire: "off" };

  function load() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function save(t) { try { localStorage.setItem(KEY, JSON.stringify(t)); } catch (e) {} }

  var t = load();

  function apply() {
    var r = document.documentElement;
    if (t.char && t.char !== "grotesk") r.setAttribute("data-char", t.char);
    else r.removeAttribute("data-char");
    if (t.theme && t.theme !== "light") r.setAttribute("data-theme", t.theme);
    else r.removeAttribute("data-theme");
    if (t.accent && t.accent !== "none") r.setAttribute("data-accent", t.accent);
    else r.removeAttribute("data-accent");
    r.setAttribute("data-density", t.density);
    r.setAttribute("data-wire", t.wire);
    r.style.setProperty("--radius", t.radius + "px");
  }
  apply();

  /* ---------- Panel-Markup ---------- */
  var css = ''
    + '#tw-btn{position:fixed;right:18px;bottom:18px;z-index:9999;width:46px;height:46px;border-radius:50%;'
    + 'border:1px solid var(--line-2,#c8c8cc);background:#fff;color:#1b1b1d;font-family:var(--mono,monospace);'
    + 'font-size:18px;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.12);display:grid;place-items:center;}'
    + '#tw-btn:hover{transform:translateY(-1px);}' 
    + '#tw-panel{position:fixed;right:18px;bottom:74px;z-index:9999;width:300px;max-width:calc(100vw - 36px);'
    + 'max-height:calc(100vh - 110px);overflow:auto;'
    + 'background:#fff;border:1px solid var(--line,#dcdcdf);border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.18);'
    + 'padding:18px;font-family:var(--font,sans-serif);color:#1b1b1d;display:none;}'
    + '#tw-panel.open{display:block;}'
    + '#tw-panel h5{margin:0 0 14px;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;'
    + 'font-family:var(--mono,monospace);color:#9a9aa0;display:flex;justify-content:space-between;align-items:center;}'
    + '#tw-panel h5 button{border:0;background:none;font-size:18px;cursor:pointer;color:#9a9aa0;line-height:1;}'
    + '.tw-hr{border:0;border-top:1px solid #ececee;margin:18px 0;}'
    + '.tw-cap{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;font-family:var(--mono,monospace);'
    + 'color:#b4b4ba;margin:0 0 12px;}'
    + '.tw-row{margin-bottom:16px;}'
    + '.tw-row > span{display:block;font-size:.74rem;font-weight:600;letter-spacing:.02em;color:#5a5a5e;margin-bottom:8px;}'
    + '.tw-seg{display:flex;gap:6px;flex-wrap:wrap;}'
    + '.tw-seg button{flex:1;min-width:0;font:inherit;font-size:.8rem;padding:8px 4px;border:1px solid #dcdcdf;'
    + 'background:#fff;border-radius:7px;cursor:pointer;color:#5a5a5e;white-space:nowrap;}'
    + '.tw-seg button[aria-pressed="true"]{border-color:#1b1b1d;background:#1b1b1d;color:#fff;}'
    + '.tw-sw{display:flex;gap:8px;}'
    + '.tw-sw button{width:30px;height:30px;border-radius:50%;cursor:pointer;border:2px solid #fff;'
    + 'box-shadow:0 0 0 1px #dcdcdf;}'
    + '.tw-sw button[aria-pressed="true"]{box-shadow:0 0 0 2px #1b1b1d;}'
    + '.tw-range{display:flex;align-items:center;gap:10px;}'
    + '.tw-range input{flex:1;}'
    + '.tw-range b{font-family:var(--mono,monospace);font-size:.78rem;min-width:34px;text-align:right;color:#5a5a5e;}';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.id = "tw-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Tweaks öffnen");
  btn.textContent = "^";

  var panel = document.createElement("div");
  panel.id = "tw-panel";
  panel.innerHTML = ''
    + '<h5>Tweaks <button type="button" id="tw-close" aria-label="Schließen">×</button></h5>'
    + '<p class="tw-cap">Charakter &amp; Stimmung</p>'
    + '<div class="tw-row"><span>Schriftbild</span><div class="tw-seg" id="tw-char">'
    +   '<button data-v="grotesk">Grotesk</button>'
    +   '<button data-v="editorial">Editorial</button>'
    +   '<button data-v="industrie">Industrie</button>'
    + '</div></div>'
    + '<div class="tw-row"><span>Tonalität</span><div class="tw-seg" id="tw-theme">'
    +   '<button data-v="light">Hell</button>'
    +   '<button data-v="dark">Dunkel</button>'
    + '</div></div>'
    + '<hr class="tw-hr">'
    + '<p class="tw-cap">Feintuning</p>'
    + '<div class="tw-row"><span>Akzentfarbe</span><div class="tw-sw" id="tw-accent">'
    +   '<button data-v="none"   title="Schwarz-Weiß" style="background:#1b1b1d;"></button>'
    +   '<button data-v="blue"   title="Blau"   style="background:oklch(0.55 0.16 255);"></button>'
    +   '<button data-v="green"  title="Grün"   style="background:oklch(0.55 0.13 155);"></button>'
    +   '<button data-v="orange" title="Orange" style="background:oklch(0.62 0.15 45);"></button>'
    + '</div></div>'
    + '<div class="tw-row"><span>Eckenradius</span><div class="tw-range">'
    +   '<input type="range" id="tw-radius" min="0" max="20" step="1"><b id="tw-radius-v"></b>'
    + '</div></div>'
    + '<div class="tw-row"><span>Abstände</span><div class="tw-seg" id="tw-density">'
    +   '<button data-v="compact">Kompakt</button>'
    +   '<button data-v="normal">Normal</button>'
    +   '<button data-v="airy">Luftig</button>'
    + '</div></div>'
    + '<div class="tw-row"><span>Wireframe-Look (skizzige Platzhalter)</span><div class="tw-seg" id="tw-wire">'
    +   '<button data-v="off">Aus</button>'
    +   '<button data-v="on">An</button>'
    + '</div></div>';

  function mount() {
    document.body.appendChild(btn);
    document.body.appendChild(panel);
    sync();

    btn.addEventListener("click", function () { panel.classList.toggle("open"); });
    panel.querySelector("#tw-close").addEventListener("click", function () { panel.classList.remove("open"); });

    bindSwatch("#tw-accent", "accent");
    bindSeg("#tw-char", "char");
    bindSeg("#tw-theme", "theme");
    bindSeg("#tw-density", "density");
    bindSeg("#tw-wire", "wire");

    var range = panel.querySelector("#tw-radius");
    range.addEventListener("input", function () {
      t.radius = +range.value;
      panel.querySelector("#tw-radius-v").textContent = t.radius + "px";
      apply(); save(t);
    });
  }

  function bindSeg(sel, prop) {
    panel.querySelectorAll(sel + " button").forEach(function (b) {
      b.addEventListener("click", function () {
        t[prop] = b.dataset.v; apply(); save(t); sync();
      });
    });
  }
  function bindSwatch(sel, prop) {
    panel.querySelectorAll(sel + " button").forEach(function (b) {
      b.addEventListener("click", function () {
        t[prop] = b.dataset.v; apply(); save(t); sync();
      });
    });
  }

  function sync() {
    ["char", "theme", "density", "wire"].forEach(function (prop) {
      panel.querySelectorAll("#tw-" + prop + " button").forEach(function (b) {
        b.setAttribute("aria-pressed", b.dataset.v === t[prop]);
      });
    });
    panel.querySelectorAll("#tw-accent button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.v === t.accent);
    });
    var range = panel.querySelector("#tw-radius");
    range.value = t.radius;
    panel.querySelector("#tw-radius-v").textContent = t.radius + "px";
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
