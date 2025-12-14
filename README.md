# FitLife Pro - Gatsby Version

This project is structured for the **Gatsby Framework**.

## Quick Start (Migrating to Real Gatsby)

To run this as a full production Gatsby application on your local machine:

1.  **Initialize Gatsby**:
    ```bash
    npm init gatsby
    # Follow prompts (Project name: fitlifepro, CMS: No, Styling: TailwindCSS)
    ```

2.  **Copy Files**:
    Move the files from this preview into your new Gatsby project:
    *   Copy contents of `components/` -> `src/components/`
    *   Copy contents of `pages/` -> `src/pages/`
    *   Copy contents of `data/` -> `src/data/`
    *   Copy contents of `types.ts` -> `src/types.ts`
    *   Copy `gatsby-config.js` -> Project Root
    *   Copy `gatsby-browser.js` -> Project Root

3.  **Update Imports**:
    In this preview, we used `react-router-dom` to make the links work in the browser.
    In your real Gatsby project, find and replace:
    
    ```typescript
    import { Link } from 'react-router-dom';
    // CHANGE TO:
    import { Link } from 'gatsby';
    ```

    (Check `components/Layout.tsx`, `components/Hero.tsx`, and `pages/404.tsx`)

4.  **Run**:
    ```bash
    npm run develop
    ```

## Project Structure

*   `src/pages`: Gatsby File System Routing.
*   `gatsby-browser.js`: Wraps pages in the `Layout` component.
*   `gatsby-config.js`: Plugin configuration.
*   `export const Head`: SEO metadata for each page.
