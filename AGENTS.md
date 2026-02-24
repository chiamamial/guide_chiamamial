# AGENTS.md

Guida operativa per lavorare su questo repository.

Questo documento definisce regole non negoziabili per mantenere
stabilità, coerenza e qualità nel tempo.

------------------------------------------------------------------------

# 1) Obiettivo del progetto

Sito statico o semi-statico con priorità:

1.  Stabilità visuale desktop/mobile
2.  Coerenza architetturale CSS e naming
3.  Accessibilità base corretta
4.  SEO tecnica minima funzionante
5.  Performance buona, non perfetta

Non è una web app complessa. Non introdurre complessità non necessaria.

------------------------------------------------------------------------

# 2) Principi fondamentali

-   Modifiche piccole e mirate.
-   Nessun refactor ampio non richiesto.
-   Nessuna dipendenza npm senza motivo forte.
-   Se una modifica rompe qualcosa, non si merge.
-   Se qualcosa è ambiguo, si privilegia semplicità e stabilità.

------------------------------------------------------------------------

# 3) Stack e confini

## Framework

Definito nel progetto (Astro / Next / altro).

## Output

-   Preferibilmente statico.
-   JS solo dove necessario (menu, slider, sync layout, ecc.).

## Dipendenze

-   Non aggiungere librerie UI pesanti.
-   Non introdurre framework CSS se già esiste sistema custom.
-   Ogni nuova dipendenza deve avere motivazione concreta.

------------------------------------------------------------------------

# 4) Struttura repository

Struttura consigliata:

src/ pages/ components/ layouts/ styles/ content/ o data/ public/

Regola: ogni file deve avere ownership chiara.

------------------------------------------------------------------------

# 5) Design System e CSS

## 5.1 Design Tokens

Usare token semantici, non meccanici.

Esempi corretti: - --space-section - --type-title-lg - --color-bg -
--radius-card

Evitare token legati a valori rigidi come --space-14px.

------------------------------------------------------------------------

## 5.2 CSS a Layer

Ordine obbligatorio: 1. base 2. components 3. utilities 4. pages

Regole: - Non usare !important - Non usare selettori globali
aggressivi - Controllare sempre layer, specificità e ordine import prima
di forzare soluzioni

------------------------------------------------------------------------

## 5.3 Naming

Convenzione BEM-like:

block\_\_element--modifier

Regole: - No abbreviazioni ambigue. - Preferire modifier espliciti nel
markup. - Evitare override annidati inutili.

------------------------------------------------------------------------

# 6) Regole UI condivise

Ogni progetto deve definire comportamenti UI critici che non devono
rompersi: - Navbar / hamburger - CTA mobile/desktop - Sezioni con layout
sincronizzato - Sticky header

Se una modifica li tocca, test manuale obbligatorio.

------------------------------------------------------------------------

# 7) JavaScript

-   Niente script globali inutili.
-   Selezione elementi difensiva.
-   Niente duplicazione di logica.
-   Utility riusabili quando necessario.

------------------------------------------------------------------------

# 8) SEO tecnica

Checklist minima: - Dominio canonico https corretto - Tag canonical
coerente - Meta OG coerenti - JSON-LD valido - Sitemap aggiornata -
Nessun link rotto

------------------------------------------------------------------------

# 9) Accessibilità

-   aria-label su icone
-   Focus visibile
-   Elementi cliccabili navigabili da tastiera
-   alt="" per immagini decorative
-   alt descrittivo per immagini informative

------------------------------------------------------------------------

# 10) Performance

-   Lazy loading immagini sotto la fold
-   Asset ottimizzati
-   Evitare JS eccessivo
-   Non inseguire 100/100 Lighthouse a scapito del codice

------------------------------------------------------------------------

# 11) Workflow operativo

Prima di chiudere una task: 1. npm run build 2. Controllo desktop 3.
Controllo mobile 4. Verifica navbar, CTA, sezioni critiche 5. Nessun
errore console

------------------------------------------------------------------------

# 12) Quality Gates

Devono passare: - Build - Lint

Se presenti: - Test e2e - Visual regression - A11y check

Se CI fallisce, non si merge.

------------------------------------------------------------------------

# 13) Filosofia

Il repository deve rimanere: - leggibile - prevedibile - stabile

Se una soluzione è fragile, non è accettabile.
