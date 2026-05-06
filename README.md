# Dream Study

Dream Study is a focused, single-page study dashboard designed to help you stay consistent every day. It combines a session timer, motivational quote rotation, countdown-to-goal strip, task tracking, study logs, and progress graphs into one interface.

> Tech stack: vanilla HTML + CSS + JavaScript (no framework, no build step).

---

## Features

- **Focus session timer**
  - Start, pause/resume, and stop study sessions.
  - Session completion card with duration summary.
  - Keyboard shortcuts (`Space` for start/pause, `Esc` for stop).

- **Goal countdown strip**
  - Full-width visual countdown (days/hours/minutes/seconds).
  - Custom goal name and target date.
  - Toggle countdown visibility on/off.

- **Daily workflow support**
  - “Right Now” panel for current block awareness.
  - Day settings/configuration entry point.

- **Task management**
  - Add daily tasks quickly.
  - Track completion progress.

- **Study logging**
  - View session history by **Today / Week / Month**.
  - Manual “Add Hours” for offline study tracking.

- **Statistics and streaks**
  - Today, week, month totals.
  - Daily average, all-time total, streak counters, and tasks summary.

- **Graphs view**
  - Range presets: weekly, bi-weekly, monthly.
  - Visual styles: bar, line, area.
  - Month navigation for longer-term review.

- **Data export & reset tools**
  - Export/backup support.
  - Data clear/reset action.

- **Local-first storage**
  - All app state is persisted in browser `localStorage`.
  - No backend required.

---

## Project Structure

```text
.
├── index.html      # App markup and panel structure
├── styles.css      # Theme, layout, components, responsive styling
├── script.js       # App logic (timer, tasks, logs, charts, settings)
├── logo.svg        # Brand/logo asset
└── favicon.svg     # Favicon asset
```

---

## Getting Started

### 1) Clone the repository

```bash
git clone github.com/Shriyash-24/dream-study
cd dream-study
```

### 2) Run locally

Because this is a static app, you can open `index.html` directly, but using a local server is recommended.

**Option A (Python):**

```bash
python3 -m http.server 8080
```

Then open: <http://localhost:8080>

**Option B (VS Code Live Server):**

- Install the **Live Server** extension.
- Right-click `index.html` → **Open with Live Server**.

---

## Usage Guide

1. **Start a study session**
   - Click **Start**.
   - Use **Pause** when needed.
   - Click **Stop** to save the session.

2. **Set your countdown goal**
   - Open **MISC** panel.
   - Use **Countdown Settings**.
   - Set a goal name and exam/deadline date.

3. **Track tasks daily**
   - Go to **Tasks** panel.
   - Add your highest-priority tasks for the day.

4. **Review progress**
   - Open **Overview** for totals and streak.
   - Open **Log** for session-level history.
   - Open **Graphs** (left panel toggle) for trend analysis.

5. **Backup data**
   - Open **MISC** → **Export** regularly.

---

## Data Storage

The app stores data in `localStorage` under these keys:

- `focus_timer_v1`
- `focus_sessions_v1`
- `focus_config_v1`
- `focus_day_plan_v1`

If you clear browser storage, your local app data is removed unless previously exported.

---

## Customization Ideas

- Add your own quote list in `script.js` (`QUOTES` array).
- Change visual theme tokens in `styles.css` (`:root` variables).
- Point the logo link in `index.html` to your preferred destination.
- Extend graph presets or add CSV import/export.

---

## Browser Compatibility

Dream Study should work in modern Chromium-, Firefox-, and WebKit-based browsers that support:

- ES6+ JavaScript
- CSS custom properties
- `localStorage`
- `<canvas>`

---

## Troubleshooting

- **Buttons do nothing**
  - Open browser DevTools Console and check for JavaScript errors.

- **Data disappeared**
  - Verify you are using the same browser/profile.
  - Check whether storage was cleared.

- **Countdown not updating**
  - Recheck target date in countdown settings.
  - Confirm your system date/time is correct.

---

## License

This project is licensed under the **MIT Licence**.
