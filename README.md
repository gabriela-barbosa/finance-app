# Finance App

A personal finance management application built with Next.js that helps you track expenses, manage budgets, and gain insights into your financial habits.

## Features

- **Dashboard:** View financial summaries and key metrics at a glance
- **Transactions:** Record and categorize income and expenses
- **Reports:** Generate visual reports and analyze spending patterns
- **Profile:** Manage your account settings and preferences

## Tech Stack

- **Frontend:** React 19, Next.js 15 (App Router)
- **UI Components:** Radix UI, Shadcn UI
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL via Vercel Postgres
- **Authentication:** Supabase
- **Charts:** Recharts

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Environment Setup

1. Clone this repository
2. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
3. Update the environment variables with your database credentials

### Database Setup

Run the database setup script:

```bash
npm run db:setup
```

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Database Migrations

Create and run migrations:

```bash
npm run db:migrate
```

For a simpler migration process:

```bash
npm run db:easy-migrate
```

## Code Formatting

Format code with Prettier:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

## Deployment

The application can be easily deployed on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/finance-app)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
