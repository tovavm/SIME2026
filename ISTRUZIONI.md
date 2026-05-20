# MELICOR Stand App — Istruzioni

## Installazione

### Android
1. Aprire **Chrome** sul telefono
2. Andare su: `https://tovavm.github.io/SIME2026/`
3. Toccare i **tre puntini** ⋮ in alto a destra
4. Selezionare **«Aggiungi alla schermata Home»** → **Aggiungi**
5. Aprire l'app una volta **con connessione internet** — poi funziona offline

### iPhone
1. Aprire **Safari** (non Chrome)
2. Andare su: `https://tovavm.github.io/SIME2026/`
3. Toccare il pulsante **Condividi** ↑ in basso
4. Selezionare **«Aggiungi alla schermata Home»** → **Aggiungi**
5. Aprire l'app una volta **con connessione internet** — poi funziona offline

---

## Registrazione visitatore (📋 Registra)

1. Selezionare la **lingua** del visitatore: IT EN FR DE SP
2. Compilare **Nome** e **Cognome** (obbligatori)
3. Compilare **Telefono** ed **Email** (entrambi obbligatori)
4. Selezionare il **priorità contatto** con il tasto a destra:
   - 💬 in alto = WhatsApp preferito
   - ✉️ in basso = Email preferita (default)
5. Selezionare la sezione **Laser** (scelta multipla):
   - «Nessun laser» disattiva le altre opzioni
   - Le altre si possono selezionare insieme
6. Selezionare i prodotti di interesse
7. Aggiungere note se necessario
8. Toccare **Salva visitatore**

---

## Lista visitatori (👥 Visitatori)

- Visualizza tutti i visitatori registrati con statistiche
- Il badge 🛒 indica che il visitatore ha già un ordine
- Campo **Note manager** — modificabile, si salva automaticamente
- **⬇ Scarica CSV** — esporta tutti i dati in formato Excel
- **📤** — condivide il CSV via WhatsApp, email o Telegram
- Il sistema ricorda di fare il backup ogni 10 visitatori

### Come aprire il CSV in Excel
Non fare doppio clic sul file. Procedura corretta:
**Excel → Dati → Da testo/CSV → selezionare il file → separatore: virgola → Carica**

---

## Ordine (🛒 Ordine)

1. Selezionare il cliente dal menu a tendina
   *(oppure toccare «🛒 Crea ordine» nella scheda visitatore)*
2. Aggiungere quantità con i tasti **+** e **−**
3. Impostare la **sconto globale %** se necessario
4. Spuntare **IVA 22%** se richiesto
5. Spuntare **«Invia copia al cliente»** per inviare l'ordine via email
6. Toccare **Salva ordine**
   - L'ordine viene salvato nel database
   - Se spuntata la copia, si apre automaticamente l'app email con il testo dell'ordine già compilato

---

## Backup dati

I dati sono salvati nel database locale del dispositivo (IndexedDB).
**Fare il backup CSV alla fine di ogni giornata.**

| Evento | Azione |
|--------|--------|
| Ogni 10 visitatori | Notifica automatica di backup |
| Fine giornata | Scaricare CSV manualmente |
| Fine congresso | Scaricare CSV + condividere via email |

---

## Cancellazione dati

🗑 **Cancella tutti i dati** — richiede il PIN del responsabile stand.
La cancellazione è irreversibile — assicurarsi di aver esportato il CSV prima.

---

## Aggiornamento app prima di un nuovo congresso

Modificare nel file `index.html` il blocco CONFIG (riga ~428):

```
const CONFIG = {
  eventName:  'Nome Congresso',
  eventCity:  'Città',
  eventDates: 'GG–GG Mese AAAA',
  standNumber: 'XX',
};
```

Modificare nel file `products.js` i prezzi se necessario.
Aggiornare la versione in `sw.js`: `melicor-v4` → `melicor-v5`.
Caricare i file aggiornati su GitHub — l'app si aggiorna entro 1–2 minuti.

---

## File nel repository

| File | Descrizione |
|------|-------------|
| `index.html` | App principale — form, lista, ordini |
| `products.js` | Catalogo prodotti e prezzi |
| `sw.js` | Service worker — gestisce la cache offline |
| `icon.png` | Icona dell'app |
| `CHANGELOG.md` | Registro delle modifiche |
| `ISTRUZIONI.md` | Questo file |
