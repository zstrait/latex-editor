# LaTeX Editor

- A sleek, single-page LaTeX editor for writing and previewing equations instantly.
- Built to provide a high-performance, accessible alternative to existing LaTeX tools.

### [→ Live Demo ←](https://zstrait.github.io/latex-editor/)

## Tech Stack
* React & JavaScript
* CSS
* KaTeX (LaTeX Rendering)
* CodeMirror

## Features
- **Live Rendering:**
    - Real-time LaTeX preview powered by KaTeX.
    - Configurable rendering delay to optimize performance while typing.
- **Advanced Editor:**
    - High-performance editor using CodeMirror with full LaTeX syntax highlighting.
    - Customizable editor settings including live rendering toggle, syntax highlighting toggle, and auto-newline.
- **Formatting & Style Controls:**
    - Granular control over font size and line spacing.
    - Alignment support for left, center, and right orientations.
    - Built-in toggles for common math styles like bold (\mathbf) and italic (\mathit).
- **Symbol & Template Library:**
    - Quick-access sidebar for common LaTeX symbols including Operators, Logic/Sets, Greek letters, and complex Structures (Integrals, Summations, Limits, etc.).
    - Categorized menus for effortless navigation through LaTeX syntax.
- **Export Functionality:**
    - Easily export your LaTeX source code to a local `.txt` file.

## Running Locally

**1) Clone the repository**
   ```bash
   git clone https://github.com/zstrait/latex-editor.git
   ```

**2) Install Dependencies**
   ```bash
   npm install
   ```

**3) Start the development server**
   ```bash
   npm run dev
   ```

**4) Build for production**
   ```bash
   npm run build
   ```
