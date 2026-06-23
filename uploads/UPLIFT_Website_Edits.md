# UPLIFT^ Website: Edit-Anweisungen

**Datei:** `UPLIFT_Website__standalone_.html`
**Zweck der Seite:** Visitenkarte / Seriositätsbeleg (Besucher kommt meist über den Akquise-Brief und prüft Seriosität).
**Stand:** 23.06.2026

Diese Datei listet alle gewünschten Änderungen. Jeder Punkt nennt die Stelle, den aktuellen Text/Zustand ("VORHER") und die gewünschte Fassung ("NACHHER"). Bitte nur diese Stellen anfassen, der übrige Inhalt bleibt unverändert.

Hinweis zur Schreibweise: Keine Geviert- oder Halbgeviertstriche (Bindestriche als Satzzeichen) verwenden. Stattdessen Komma, Punkt, Doppelpunkt oder "und"/"oder". Wort-Bindestriche (z.B. "herstellerneutral", "UPLIFT^-Verbund") sind in Ordnung.

---

## TEIL A: Technische und strukturelle Korrekturen

### A1. Platzhalter-Impressum füllen
**Stelle:** Unterseite "Impressum" (und identische Verantwortliche-Stelle-Angaben in "Datenschutz").
**Problem:** Enthält Platzhalterdaten, die die Seriosität massiv untergraben.
**VORHER (zu ersetzen):**
- Name: "Max Mustermann"
- Telefon: "+49 (0) 123 44 55 66"
- USt-ID: "DE999999999"

**NACHHER:** Durch die echten, finalen Unternehmensdaten ersetzen:
- Verantwortliche Person: [echter Name eintragen]
- Telefon: 0174 966 7018 (siehe A2, muss überall identisch sein)
- USt-ID: [echte USt-ID eintragen, oder Zeile entfernen, falls noch nicht vorhanden]
- Adresse prüfen: Glockenblumenstr. 16, 80935 München (konsistent halten)

Gilt für beide Vorkommen: Impressum-Seite UND Abschnitt "Hinweis zur verantwortlichen Stelle" auf der Datenschutz-Seite.

---

### A2. Telefonnummer vereinheitlichen
**Problem:** Footer und Kontaktseite nutzen `0174 966 7018`, das Impressum nutzt eine abweichende Platzhalternummer.
**NACHHER:** Überall dieselbe Nummer verwenden: **0174 966 7018** (auch im `tel:`-Link, dort als `+491749667018`). Die abweichende Impressums-Nummer entfernen.

---

### A3. Verirrtes "^" im Haltungs-Block korrigieren
**Stelle:** Startseite, Abschnitt "Unsere Haltung", dritte Karte "Langfristige Perspektiven".
**Problem:** Das vorangestellte Caret-Zeichen (`^`) sitzt dort durch einen Zeilenumbruch falsch und sieht anders aus als bei den beiden Nachbar-Karten ("Eigenständigkeit zuerst", "Auf Augenhöhe").
**NACHHER:** Die Überschrift exakt nach demselben Muster wie die Nachbarn aufbauen, also das `^` als `<span class="caret-mark">^</span>` direkt vor dem Titeltext, ohne Zeilenumbruch dazwischen:
`<h3 class="h3"><span class="caret-mark">^</span> Langfristige Perspektiven</h3>`

---

### A4. Hartkodierte Höhen in der Vertrauensleiste entfernen
**Stelle:** Startseite, Abschnitt "Vertrauensleiste" (`section.trust`).
**Problem:** Mehrere inline gesetzte `height: 102px` (am `<section>`, am inneren `.container` und an einem `.trust__item`). Das schneidet auf Mobilgeräten oder bei längeren Texten ab.
**NACHHER:** Alle drei inline `style="height: 102px"` entfernen. Die Höhe soll sich automatisch aus dem Inhalt und dem vorhandenen Padding ergeben.

---

### A5. Theming-Ballast eindampfen
**Problem:** Das CSS trägt auf allen vier Unterseiten einen kompletten Design-Tweak-Baukasten mit, der für die ausgelieferte Seite nicht gebraucht wird: `data-accent` (blue/green/orange), `data-char` (editorial/industrie), `data-theme="dark"`, `data-density`, `data-wire`, sowie das `localStorage`-Skript ("uplift-tweaks"), das diese Tweaks vor dem Paint anwendet.
**NACHHER:** Auf die final tatsächlich genutzte Darstellung reduzieren:
- Die nicht genutzten Tweak-Regelblöcke entfernen (alle `html[data-accent=...]`, `html[data-char=...]`, `html[data-theme="dark"]`, `html[data-density=...]`, `html[data-wire=...]`).
- Das `<script>`, das `localStorage` ausliest und die `data-*`-Attribute setzt, entfernen.
- Die `.ph`-Platzhalter-Logik mit dem `data-wire`-Schraffur-Look kann ebenfalls raus, sofern keine Bild-Platzhalter mehr im Wireframe-Look gebraucht werden.
- Wichtig: Diese Bereinigung auf ALLEN vier Seiten identisch durchführen (index, gespraech, impressum, datenschutz), da das CSS überall dupliziert ist.

---

### A6. Bilder ergänzen
**Problem:** Die Seite ist komplett bildlos (nur graue Flächen). Für eine Handwerks- und Service-Marke fehlt damit das wichtigste visuelle Vertrauenssignal.
**NACHHER:** Mindestens ein echtes, hochwertiges Bild einbinden, idealerweise:
- Hero-Bereich der Startseite: ein Foto (Aufzug, Technik im Einsatz, oder Team), das den grauen `hero__bg`-Platzhalter ersetzt.
- Optional weitere Bilder bei Leistungen oder im Verbund-Abschnitt.

*Hinweis: Bildmaterial muss noch bereitgestellt werden. Falls noch keine eigenen Fotos vorliegen, diesen Punkt als offen markieren und vorerst die graue Fläche belassen.*

---

## TEIL B: Inhaltliche Änderungen (Texte)

### B1. Hero-Lead (Startseite)
**Stelle:** Startseite, Hero, Lead-Satz unter der Headline "Regionaler Aufzugsservice aus einer Hand."
**VORHER:** "Wartung, Prüfung und Modernisierung von Betrieben, die ihre Region kennen, gebündelt in einem starken Verbund."
**NACHHER:** "Wartung, Prüfung und Instandhaltung für Ihre Anlage, zuverlässig vor Ort und gestützt durch ein starkes Netzwerk."
*(Headline "Regionaler Aufzugsservice aus einer Hand." bleibt unverändert.)*

---

### B2. Vertrauensleiste, drei Punkte (Startseite)
**Stelle:** Startseite, Abschnitt "Vertrauensleiste" (`section.trust`), die drei `.trust__item`.
**Problem:** Die bisherigen drei Punkte gehören zu unterschiedlichen Kategorien und wirken zusammenhanglos.
**VORHER:**
1. "Wartung, Inspektion und Modernisierung aus einer Hand"
2. "24/7 Bereitschafts- und Notfalldienst im UPLIFT^-Verbund"
3. "Prüfung und Sicherheit nach BetrSichV und ZÜS"

**NACHHER (alle drei ersetzen, gemeinsamer Leitgedanke "Was den Verbund ausmacht"):**
1. "Persönliche Ansprechpartner vor Ort, in Ihrer Region"
2. "Die Stärke eines überregionalen Verbunds im Rücken"
3. "Unabhängig und herstellerneutral, statt konzerngebunden"

---

### B3. Leistungen, Intro (Startseite)
**Stelle:** Startseite, Abschnitt "Leistungen", Lead-Text unter "Unser Leistungsversprechen".
**VORHER:** "UPLIFT^ baut den Verbund derzeit auf. Wofür wir stehen, ist klar: ein vollständiger Service rund um den Aufzug, erbracht von den Betrieben in unserem Verbund."
**NACHHER:** "Rund um den Aufzug bieten die Betriebe im UPLIFT^-Verbund das komplette Leistungsspektrum, von der Wartung bis zur Modernisierung."

---

### B4. Verbund-Intro (Startseite, dunkles Band)
**Stelle:** Startseite, Abschnitt "Verbund", Lead-Satz (letzter Satz des Intros, nach "...gewachsene Nähe zu den Kunden.").
**VORHER:** "Was dazukommt, nimmt Last von den Schultern und macht den Service stärker."
**NACHHER:** "Was der Verbund beisteuert, stärkt genau das, worauf es ankommt: Verfügbarkeit, Tempo und Qualität vor Ort."

---

### B5. Haltung, "Langfristige Perspektiven" (Startseite)
**Stelle:** Startseite, Abschnitt "Unsere Haltung", dritte Karte, Fließtext.
*(Die Überschriften-Korrektur dazu siehe A3.)*
**VORHER:** "Wir bauen einen Verbund, der besteht, ohne schnelle Weiterveräußerung."
**NACHHER:** "Wir denken in Jahrzehnten, nicht in Verkaufszyklen. Was wir aufbauen, soll bestehen bleiben."

---

### B6. FAQ "Verliere ich die Kontrolle über meine Firma?" (Gesprächsseite)
**Stelle:** Unterseite "gespraech", Abschnitt FAQ, erste Frage.
**VORHER:** "Nein. Sie bleiben zunächst Geschäftsführer mit voller operativer Verantwortung. Das Tempo bestimmen Sie mit."
**NACHHER:** "Nein. Ihr Betrieb wird weiter von Ihnen geführt. Wenn Sie möchten, bleiben Sie auch langfristig an Bord, das Tempo des Übergangs stimmen wir gemeinsam ab."

---

### B7. FAQ "Was passiert mit meinem Namen und meiner Marke?" (Gesprächsseite)
**Stelle:** Unterseite "gespraech", Abschnitt FAQ, zweite Frage.
**VORHER:** "Ihr Firmenname bleibt. Erst später, und nur wenn sinnvoll, kommt ein dezenter Zusatz wie „ein UPLIFT^-Unternehmen“ hinzu."
**NACHHER:** "Der Name bleibt Ihrer. Eine sichtbare Zugehörigkeit zum Verbund gibt es nur, wenn Sie sie wollen."

---

### B8. Kontakt-CTA (Gesprächsseite)
**Stelle:** Unterseite "gespraech", Abschnitt "Kontakt", rechte Karte ("Per E-Mail").
**Problem:** Der bisherige Text erklärt die mailto-Mechanik umständlich und wirkt für weniger technikaffine Leser eher abschreckend.
**VORHER:** "Schreiben Sie uns direkt. Mit einem Klick öffnet sich eine vorbereitete E-Mail in Ihrem Mailprogramm, den Text passen Sie einfach an."
**NACHHER:** Den erklärenden Satz entfernen. Stattdessen schlichte Aufforderung, der eigentliche mailto-Link/Button bleibt funktional erhalten (öffnet weiterhin die vorbereitete E-Mail). Vorgeschlagener Text: "Klicken Sie hier, um uns zu schreiben." Der Button-Text "E-Mail schreiben" kann bleiben oder zu "Hier schreiben" werden.

---

## NICHT zu ändern (bewusste Entscheidungen, bitte unverändert lassen)

- **Vision, Absatz 3** ("Substanz und Reaktionsfähigkeit eines starken Verbunds ... macht uns zum richtigen Partner"): bleibt bewusst bold, NICHT abschwächen.
- **Leistungskarte "24/7 Notdienst"**: bleibt unverändert.
- **Prozess Schritt 3 / 48-Stunden-Kaufpreisindikation** ("belastbare Einschätzung. Schnell und verlässlich."): bleibt unverändert.
- **Vision, Absatz 1** ("schultern das heute allein"): bleibt unverändert.

---

## Zusammenfassung der zu ändernden Stellen

| Nr. | Typ | Stelle |
|-----|-----|--------|
| A1 | Technik/Recht | Impressum + Datenschutz: Platzhalterdaten ersetzen |
| A2 | Technik | Telefonnummer überall vereinheitlichen |
| A3 | Render-Bug | Haltung: "^" bei "Langfristige Perspektiven" |
| A4 | Responsive | Vertrauensleiste: inline-Höhen entfernen |
| A5 | Code-Hygiene | Theming-Tweak-Baukasten entfernen (alle 4 Seiten) |
| A6 | Visuell | Bild(er) ergänzen (Material ausstehend) |
| B1 | Text | Hero-Lead |
| B2 | Text | Vertrauensleiste: drei Punkte |
| B3 | Text | Leistungen-Intro |
| B4 | Text | Verbund-Intro |
| B5 | Text | Haltung: "Langfristige Perspektiven" |
| B6 | Text | FAQ: Kontrolle |
| B7 | Text | FAQ: Name/Marke |
| B8 | Text | Kontakt-CTA |
