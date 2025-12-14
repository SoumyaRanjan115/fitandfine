# Fit&Fine - Gatsby Version

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


3.  **Run**:
    ```bash
    npm run develop
    ```

## Project Structure

*   `src/pages`: Gatsby File System Routing.
*   `gatsby-browser.js`: Wraps pages in the `Layout` component.
*   `gatsby-config.js`: Plugin configuration.
*   `export const Head`: SEO metadata for each page.
