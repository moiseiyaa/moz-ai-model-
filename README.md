# PuppyHub USA - Frontend

![PuppyHub USA Logo](public/images/logo.png)

A modern, responsive frontend for PuppyHub USA - a premier puppy adoption service connecting loving families with healthy, ethically bred puppies across the United States.

## 🐶 Project Overview

PuppyHub USA is a comprehensive frontend application built with Next.js, Tailwind CSS, and TypeScript. It provides a seamless experience for users looking to adopt puppies, featuring:

- **Responsive Design**: Mobile-first approach ensuring a great experience on all devices
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimization**: Structured metadata, sitemaps, and optimized content
- **Performance**: Lazy loading, code splitting, and optimized assets

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **Testing**: Jest, React Testing Library, Playwright

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/puppyhub-usa.git
cd puppyhub-usa/client
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🧪 Testing

### Unit and Integration Tests

Run Jest and React Testing Library tests:

```bash
npm run test
# or
yarn test
```

Run tests in watch mode:

```bash
npm run test:watch
# or
yarn test:watch
```

### End-to-End Tests

Run Playwright tests:

```bash
npm run test:e2e
# or
yarn test:e2e
```

## 📦 Project Structure

```
/app
  /components        # UI components organized by atomic design
    /atoms           # Basic building blocks (buttons, inputs)
    /molecules       # Combinations of atoms (cards, form fields)
    /organisms       # Complex UI sections (header, footer)
    /utils           # Utility components (animations, skeletons)
  /context          # React Context providers
  /data             # Mock data and API utilities
  /lib              # Utility functions and helpers
  /pages            # Page components
  /public           # Static assets
  /styles           # Global styles
```

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js.

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel` from the project root and follow the prompts

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

The following environment variables should be set in your deployment environment:

```
NEXT_PUBLIC_API_URL=https://api.puppyhubusa.com
```

## 🔒 Security

This project implements several security best practices:

- Content Security Policy (CSP) headers
- HTTPS enforcement
- Protection against XSS, CSRF, and clickjacking
- Secure cookie handling

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
