# UPLIFT^ Designsystem (v1.1)

Pragmatisches Token-System, abgeleitet aus Logo (Nunito, Farbverlauf #0064E1 → #0081FB) und Brief-Schrift (Arial). Stand: 23.06.2026.

Grundprinzip: Entscheidungen einmal treffen, als benannte Tokens festhalten, überall darauf verweisen. Konsistenz zwischen Web und Brief entsteht dadurch automatisch.

---

## 0. Logo und Marken-Assets

Alle Logo-Varianten liegen als Vektor (SVG) vor und teilen denselben horizontalen Markenverlauf #0064E1 → #0081FB (links nach rechts). Im Logo bleibt der Verlauf erhalten; im UI sonst Volltöne (siehe Abschnitt 1).

| Datei | Inhalt | viewBox (B × H) | Seitenverhältnis | Einsatz |
|-------|--------|------------------|------------------|---------|
| `Uplift_Logo.svg` | Vollständige Wortmarke `^UPLIFT` (Symbol + UP in Nunito Black, LIFT in Nunito Medium) | 1903 × 378 | ca. 5 : 1 | Primäres Logo: Website-Header, Briefkopf, Deck-Titel, überall wo Platz für die volle Marke ist |
| `uplift_caret_up.svg` | Bildmarke `^UP` mit Verlauf (ohne LIFT) | 884 × 398 | ca. 2.2 : 1 | Kompaktlogo, wo die volle Wortmarke zu breit ist: Favicon, App-/Social-Avatar, Brief-Ecke, kleine Header |
| `uplift_caret.svg` | Nur das `^`-Signet, Verlauf | 216 × 227 | ca. 0.95 : 1 | Marken-Signet als ruhiges Grafikelement: großes dezentes `^` im Hero oder dunklen Band, Favicon-Alternative |
| `uplift_caret_solid.svg` | Nur das `^`-Signet, einfarbig #0064E1 | 216 × 227 | ca. 0.95 : 1 | Kleine Größen und einfarbige Kontexte, wo ein Verlauf unruhig wirkt: Stempel, einfarbiger Druck, sehr kleine UI-Elemente |

### Einsatzregeln (wichtig: Dosierung)

Das echte `^`-Signet ist ein gezeichnetes Vektor-Element, NICHT das getippte Caret aus der Mono-Schrift, das aktuell auf der Website an sehr vielen Stellen steht (Eyebrows, Trust-Leiste, jede Haltungs-Überschrift, Buttons). Wenn man alle diese durch das satte Verlaufs-Signet ersetzt, wirkt es wie Konfetti und verliert seine Wirkung.

Regel: Echtes Signet nur an wenigen, bedeutungstragenden Stellen. Im Fließtext können die getippten Carets sogar ganz entfallen.

Empfohlene Einsatzorte für das echte SVG:
- **Favicon** ersetzen (aktuell Emoji-Aufzug). `uplift_caret.svg` oder `uplift_caret_up.svg`.
- **Wortmarke in Nav und Footer**: das hochgestellte Caret im "UPLIFT" durch das echte Signet ersetzen, statt Mono-Zeichen.
- **Ein großes, ruhig platziertes `^`** als dezentes Grafikelement im Hero oder im dunklen Verbund-Band (hier darf es groß sein). `uplift_caret.svg`.
- Überall sonst (Eyebrows, Aufzählungen): getipptes Zeichen reicht oder ganz weglassen.

### Schutzregeln
- Seitenverhältnis nie verzerren, immer proportional skalieren.
- Schutzzone: rundum mindestens die Höhe des `^`-Signets freihalten.
- Verlauf nicht verändern (Richtung, Farben, Stops bleiben wie definiert).
- Auf farbigen/dunklen Flächen: einfarbig weiß statt Verlauf, falls der Kontrast sonst leidet.
- Logo-Text nicht in Systemschrift rendern lassen (siehe Hinweis unten).

### Offener Punkt: Wortmarke als Pfade
`Uplift_Logo.svg` referenziert die Schrift noch als echte Glyphen (`font-family:'Nunito'`), nicht als Vektorpfade. Auf Systemen ohne installiertes Nunito rendert die Wortmarke dann in einer Ersatzschrift. Vor breitem Einsatz sollte der Schriftzug einmal in Pfade ("outlined") umgewandelt werden, damit das Logo überall identisch aussieht. Die drei abgeleiteten Signet-Dateien sind bereits reine Pfade und davon nicht betroffen.

---

## 1. Farbe

### Markenblau (aus dem Logo abgeleitete Skala)
Der Logo-Verlauf bleibt dem Logo (und evtl. einem Hero-Akzent) vorbehalten. Im UI Volltöne verwenden, keine Verläufe auf Buttons/Flächen.

| Token | Hex | Verwendung |
|-------|-----|-----------|
| blue-50 | #E8F1FD | Badge-/Flächenhintergrund, sehr hell |
| blue-200 | #A9CEF6 | helle Akzentflächen, Borders |
| blue-400 | #0081FB | hellerer Markenton (zweite Logo-Farbe) |
| **blue-500 (brand)** | **#0064E1** | **primärer Akzent: Buttons, Links, ^-Symbol** |
| blue-700 | #0A4DA8 | Hover-Zustand, Text-auf-Hell, dunkler Akzent |

Regel: Akzentfarbe ist teuer. Blau für genau EINE Sache pro Bildschirm (wichtigster Button, ^). Der Rest bleibt neutral.

### Neutrale (von der bestehenden Website übernommen)
| Token | Hex | Verwendung |
|-------|-----|-----------|
| bg | #FFFFFF | Seitenhintergrund |
| surface | #F5F5F6 | Karten, Bänder, Flächen |
| surface-2 | #ECECEE | tiefere Flächen |
| line | #DCDCDF | Trennlinien, Borders |
| line-2 | #C8C8CC | stärkere Borders |
| ink-3 | #9A9AA0 | Hinweistext, Labels |
| ink-2 | #5A5A5E | Sekundärtext |
| ink | #1B1B1D | Haupttext, dunkle Bänder |

---

## 2. Typografie (Weg B: Nunito Display + Arial Body)

| Rolle | Schrift | Gewicht | Verwendung |
|-------|---------|---------|-----------|
| Display | Nunito | 800 / 900 | Headlines (h1, h2, h3), Wortmarke, ^-Symbol |
| Body | Arial / Helvetica | 400 / 600 | Fließtext, Lead, Tabellen, Briefe |
| Utility | Mono (System) | 400 | Eyebrows, Labels, Kennzahlen (wie bisher) |

Begründung: Nunito trägt den freundlich-zugänglichen Markencharakter in den Überschriften ("menschliche Alternative zum Konzern"), ohne dass lange Sachtexte verspielt wirken. Arial ist bereits die Brief-Schrift, dadurch sind Web und Brief automatisch konsistent. Nunito sparsam einsetzen (nur Headlines + ^), nicht im Fließtext.

Einbindung Web: Nunito via Google Fonts (Gewichte 500, 800, 900).
Einbindung Brief: Arial als Body behalten; Überschriften/Absender in Nunito, falls auf dem System verfügbar, sonst Arial Bold als Fallback.

---

## 3. Abstände (4er-Skala)

4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 104 (px)

Keine beliebigen Zwischenwerte mehr. Section-Padding bleibt 104, Gap 24-28, Gutter 32 (wie auf der Website bereits angelegt).

---

## 4. Form

| Token | Wert |
|-------|------|
| radius | 6px |
| Border-Standard | 1px solid line (#DCDCDF) |
| Border-Hover | 1px solid ink |

---

## 5. Type Scale (von der Website, beibehalten)

| Rolle | Größe (clamp) |
|-------|---------------|
| h1 | 2.4rem → 4rem |
| h2 | 1.9rem → 2.85rem |
| h3 | 1.22rem |
| lead | 1.05rem → 1.3rem |
| body | 17px (16px mobil) |

---

## 6. Ready-to-use: CSS-Token-Block

Ersetzt/ergänzt den bestehenden `:root`-Block der Website. Damit zieht Blau + Nunito automatisch durch alle Komponenten, weil diese bereits auf die Variablen zeigen.

```css
/* Google Fonts im <head> ergänzen:
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;800;900&display=swap" rel="stylesheet"> */

:root {
  /* — Markenblau — */
  --blue-50:  #E8F1FD;
  --blue-200: #A9CEF6;
  --blue-400: #0081FB;
  --blue-500: #0064E1;   /* brand / primärer Akzent */
  --blue-700: #0A4DA8;

  /* — Neutrale — */
  --bg:        #ffffff;
  --surface:   #f5f5f6;
  --surface-2: #ececee;
  --ink:       #1b1b1d;
  --ink-2:     #5a5a5e;
  --ink-3:     #9a9aa0;
  --line:      #dcdcdf;
  --line-2:    #c8c8cc;
  --band:      #1b1b1d;
  --band-ink:  #f4f4f5;

  /* — Akzent jetzt = Markenblau (vorher Tinte) — */
  --accent:     var(--blue-500);
  --accent-ink: #ffffff;       /* weiße Schrift auf blauem Button */

  /* — Form — */
  --radius: 6px;

  /* — Typografie — */
  --font:      Arial, "Helvetica Neue", Helvetica, "Segoe UI", Roboto, sans-serif;
  --font-head: "Nunito", var(--font);   /* Headlines + Wortmarke */
  --mono:      "SFMono-Regular", ui-monospace, "Cascadia Mono", Menlo, Consolas, monospace;

  /* — Rhythmus — */
  --section-pad: 104px;
  --gap: 28px;
  --maxw: 1180px;
  --gutter: 32px;
}
```

Hinweis: Wenn der Theming-Tweak-Baukasten (siehe separate Edit-Liste, Punkt A5) entfernt wird, sind die `data-accent`/`data-char`-Blöcke ohnehin weg. Dann ist dieses `:root` die einzige Quelle der Wahrheit.

---

## 7. Anwendungsregeln (Kurzfassung)

1. Blau nur für den wichtigsten Call-to-Action pro Bildschirm und das ^-Symbol.
2. Nunito nur in Headlines und Wortmarke, nie im Fließtext.
3. Abstände nur aus der 4er-Skala.
4. Verläufe nur im Logo / Hero, nie im UI.
5. Brief: Arial-Body, Nunito-Headlines, #0064E1 für Wortmarke und dünne Akzentlinie.
6. Logo: vollständige Wortmarke (`Uplift_Logo.svg`) als Standard; `uplift_caret_up.svg` wo es eng wird; das `^`-Signet (`uplift_caret.svg` / `_solid`) nur sparsam und an bedeutungstragenden Stellen (Favicon, Wortmarke, ein ruhiger Hero-Akzent), nicht als Streudeko.
