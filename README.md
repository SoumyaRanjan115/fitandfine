# FitLife Pro

A comprehensive fitness and diet plan website featuring success stories, subscription plans, and interactive contact forms.

## 🚀 Deployment to Vercel

This project is configured for seamless deployment on Vercel.

### Option 1: Vercel CLI (Recommended)

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Deploy**:
    Run the following command in the project root:
    ```bash
    vercel
    ```
    Follow the prompts to link your account and project.

### Option 2: Git Integration

1.  Push this code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Log in to [Vercel](https://vercel.com).
3.  Click "Add New..." > "Project".
4.  Import your repository.
5.  Vercel will automatically detect the **Vite** framework settings:
    *   **Build Command**: `vite build`
    *   **Output Directory**: `dist`
6.  Click **Deploy**.

## 🛠 Project Setup

This project uses **Vite** + **React**.

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Structure

*   `src/` - (Conceptually the root)
    *   `components/` - Reusable UI components.
    *   `pages/` - Page views.
    *   `data/` - Mock data.
*   `vite.config.ts` - Build configuration.
*   `vercel.json` - Routing configuration.
