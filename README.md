# Figma Test - Spirit Animal Quiz

A Next.js application that helps users find their spirit animal through a simple quiz.

## Features

- Multi-step quiz flow with persistent state
- Dynamic color selection
- Mobile-friendly UI
- Summary page showing all selections

## Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Context API for state management

## Getting Started

1. Clone this repository
   ```
   git clone https://github.com/niravbeni/figma-test.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Render Deployment (Recommended)

This repository includes a `render.yaml` file for easy deployment on Render:

1. Fork or clone this repository
2. Sign up for [Render](https://render.com)
3. Create a new Web Service and connect your GitHub repository
4. Render will automatically detect the configuration
5. Click "Create Web Service"

Alternatively, you can use the "Deploy to Render" button below:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Vercel Deployment

This application can also be deployed on Vercel:

1. Create an account on [Vercel](https://vercel.com)
2. Connect this GitHub repository
3. Deploy with the default settings

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js applications
- **GitHub Pages**: Requires additional configuration for Next.js
- **AWS Amplify**: Provides CI/CD pipeline integration

## Note About Streamlit

If you're looking to deploy this on Streamlit Cloud, please note that Streamlit is designed for Python applications, not JavaScript/Next.js applications. You would need to rewrite this application in Python using the Streamlit framework.

## License

MIT
