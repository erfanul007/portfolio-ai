# Md Erfanul Islam Bhuiyan - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, education, and achievements as a software engineer and competitive programmer.

![Portfolio Screenshot](public/screenshot.png)

## 🚀 Live Demo

[View Live Demo](https://erfanul007.github.io/portfolio-ai/)

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with dark/light mode toggle
- **Interactive Sections**: Smooth navigation between different portfolio sections
- **Typewriter Effect**: Dynamic text animation in the hero section
- **Skills Visualization**: Interactive skill categories with visual progress indicators
- **Project Showcase**: Highlighting key projects with technologies used
- **Competitive Programming**: Showcasing achievements in coding competitions
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: Built with accessibility in mind

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Styling**: TailwindCSS
- **Animation**: Custom CSS animations
- **State Management**: React Context API
- **Navigation**: Custom navigation system with smooth scrolling
- **Deployment**: [Add your deployment platform]

## 🏗️ Project Structure

```
portfolio-ai/
├── public/             # Static assets
├── src/
│   ├── components/     # UI components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   ├── sections/   # Main page sections
│   │   └── ui/         # Reusable UI components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
└── package.json        # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/erfanul007/portfolio-ai.git
   cd portfolio-ai
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🤖 Created with Cursor AI

This entire portfolio website was built using **Cursor AI**, powered by Claude 3.7 Sonnet. The development process was completely AI-assisted with:

- **No manual code editing**: All code was generated and modified through AI suggestions
- **Iterative development**: The portfolio was built through a series of conversations with the AI
- **Responsive design**: AI implemented responsive layouts for all device sizes
- **Custom animations**: Including typewriter effects and smooth transitions
- **Complex components**: Such as the skills visualization with circular progress indicators

The AI was able to understand requirements, suggest implementations, and make adjustments based on feedback, demonstrating the power of AI-assisted development for creating professional web applications.

## 📝 License

[MIT License](LICENSE)

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [github.com/erfanul007](https://github.com/erfanul007)

## 📦 Deployment

This portfolio is configured for deployment on GitHub Pages. To deploy:

### Option 1: Using npm scripts (Recommended)

1. Simply run the deploy script:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project (`npm run build`)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Make your site available at `https://erfanul007.github.io/portfolio-ai/`

### Option 2: Using GitHub Actions

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site to GitHub Pages when you push to the main branch.

3. Your site will be available at `https://erfanul007.github.io/portfolio-ai/`

### Option 3: Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

© 2024 Md Erfanul Islam Bhuiyan. All Rights Reserved.
