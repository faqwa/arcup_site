# ArcUp Astro Refactor — Execution Plan for Codex

**Owner:** Ali Saleh  
**Assistant:** VS Code Codex / Copilot  
**Purpose:** Reorganize ArcUp site into a maintainable scaffold with shared CSS and a reusable page template.  
**Repository root:** `src/` (see structure below)

---

## PROJECT STRUCTURE SNAPSHOT
src/
components/
ArcCanvas.astro
CalloutPanel.astro
Card.astro
Footer.astro
LinkButton.astro
PageNavigation.astro
SectionDivider.astro
SectionHeader.astro
SiteHeader.astro
StatusBadge.astro
layouts/
BaseLayout.astro
pages/
about/
founder.astro
mission.astro
origin.astro
how/
(page files)
projects/
(page files)
about.astro
how.astro
index.astro
join.astro
projects.astro
styles/
components/
header.css
status-badge.css
pages/
about.css
home.css
how.css
join.css
project-detail.css
projects.css
global.css


---

## STEP 0 — FAMILIARISATION  *(no code edits)*

1. Read all `.astro` files under `src/pages` and `src/components`.  
   - Identify which components appear in which pages.  
2. Read every CSS file.  
   - Distinguish:  
     - component-specific CSS (`styles/components`)  
     - page-specific CSS (`styles/pages`)  
     - `global.css`  
3. Produce a quick **summary report in chat**:  
   - List each page and which CSS files it imports.  
   - Note duplicate or overlapping class names.  
   - Note unused global CSS rules.  
4. Ask Ali **one confirmation question**:  
   > “Ready to start Phase 1 (template build) using current components and global.css?”

Do **not** modify files during this phase.

---

## PHASE 1 — TEMPLATE PAGE CREATION

**Goal:** Build `_TemplatePage.astro` that demonstrates all common components working with global CSS.

### Tasks
1. Create `src/pages/_TemplatePage.astro`.  
   - Import `BaseLayout.astro`.  
   - Import `global.css`.  
   - Use existing components: `SectionHeader`, `Card`, `LinkButton`, etc.  
   - Include at least: hero block, 3-card grid, and simple CTA footer.
2. Ensure page compiles and renders with `npm run dev`.
3. After rendering successfully, post in chat:  
   > “Template page builds successfully. Would you like to preview or adjust styling before CSS merge?”

**Rules**
- Keep all text placeholder (“Lorem ipsum…”).  
- Do not add comments inside code.  
- If unsure about styling, ask Ali in chat (e.g., “Should headings be centered by default?”).  

---

## PHASE 2 — CSS CONSOLIDATION

**Goal:** Merge page-specific and component-specific CSS into a unified global system.

### Tasks
1. Analyse overlap across `styles/pages/*.css` and `styles/components/*.css`.  
2. Combine duplicates into `styles/global.css` where appropriate.  
3. Ask Ali in chat for visual decisions (color variants, spacing, hover).  
4. Once confirmed, delete redundant rules from page CSS.  
5. Ensure each page imports only the global CSS.  
6. Confirm via `npm run dev` that visuals remain correct.

---

## PHASE 3 — REPORT & CLEANUP

1. Generate `docs/REFRACTOR_SUMMARY.md` listing:  
   - Files changed  
   - Removed page CSS  
   - Tokens/variables unified  
   - Any pending decisions
2. Ask Ali:  
   > “All pages render and CSS unified. Should I merge this branch into main?”

---

## INTERACTION POLICY

- ❌ No inline comments inside code.  
- ✅ All clarification/questions happen **in the chat interface**.  
- ✅ Stop after each phase until Ali confirms to continue.  
- ✅ Never modify written content (headings, paragraphs, copy).  
- ✅ Always verify with `npm run dev` that build passes.

---

## HOW ALI REVIEWS WORK
After each phase, Ali will:
1. Run `npm run dev` to visually inspect the site.
2. Give feedback or stylistic preferences.
3. Approve moving to the next phase.

---

**End of README_CODEX_TASKS.md**
