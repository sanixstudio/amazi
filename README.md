<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704891855/amazi_logo_zabq95.webp" width="100" />

# AMAZI AI - AI Tools for Creative Minds

Welcome to AMAZI AI, a powerful suite of AI tools designed to unleash your creativity. With AMAZI AI, you can harness the power of artificial intelligence to create chat conversations, generate images, craft videos, compose music, and even generate code effortlessly. This README provides you with all the information you need to get started with AMAZI AI.


## Table of Contents

- [Introduction](#introduction)
- [User Story](#user-story)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Pricing](#pricing)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Support](#support)

## Introduction

AMAZI AI is a cutting-edge AI application built with TypeScript, Next.js, ShadcnUI, TailwindCSS, Stripe, Prisma, and Clerks. It offers a range of creative AI tools to enhance your productivity and creativity. Our user-friendly interface ensures that even beginners can easily harness the power of AI.

## Features

- **<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704890798/chat_ebhu4s.png" height="20" />&nbsp;&nbsp; Chat Conversation**: Engage in natural language conversations with our AI.

- **<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704890853/image_hctibb.png" height="20" />&nbsp;&nbsp; Image Generation**: Generate stunning images with AI assistance.

- **<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704890853/video_f5l7a7.png" width="24"  />&nbsp;&nbsp; Video Generation**: Create captivating videos with AI-powered tools.

- **<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704890792/music_iz6aj7.png" width="24" />&nbsp;&nbsp; Music Generation**: Compose music effortlessly using AI algorithms.

- **<img src="https://res.cloudinary.com/dqiipxzbh/image/upload/v1704890805/code_hjebpf.png" width="24" />&nbsp;&nbsp; Code Generation**: Automate code creation with AI-generated code snippets.

## Technologies Used

AMAZI AI is powered by a stack of cutting-edge technologies:

- TypeScript: A statically typed superset of JavaScript for robust development.

- Next.js: A popular React framework for server-rendered applications.

- ShadcnUI: A customizable UI library for a sleek and modern look.

- TailwindCSS: A utility-first CSS framework for rapid UI development.

- Stripe: A secure payment processing system for subscription management.

- Prisma: A modern database toolkit for efficient database operations.

- Clerks: A user authentication library for easy account management.

## Getting Started

To get started with AMAZI AI, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your/amazi-ai.git
   ```

2. Navigate to the amazi-ai folder and install the npm packages

   ```bash
   cd amazi-ai
   npm install
   ```

3. Clerk environment variables [CLERK](https://clerk.com/):

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='your_clerk_publishable_key'
   CLERK_SECRET_KEY='your_clerk_secret_key'

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. OpenAI environment variables [OpenAI](https://openai.com/) and [Replicate](https://replicate.com/) API:

   ```
   OPENAI_API_KEY='your_openai_api_key'
   REPLICATE_API_TOKEN='your_replicate_api_token'
   ```

5. Stripe environment variables [Stripe:](https://stripe.com/)

   ```
   STRIPE_API_KEY='your_stripe_api_ky'
   NEXT_PUBLIC_APP_URL='your_backend_local_host ex: http://localhost:3000/'
   STRIPE_WEBHOOK_SECRET='your_stripe_webhook_secret'
   ```

6. Configure environment variables for MySQL database:

   ```
   DATABASE_URL='your_mysql_database_connection_string'
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your browser and navigate to http://localhost:3000 to access AMAZI AI locally.

## Usage

Explore the various AI tools within AMAZI AI and let your creativity flow. Whether you're looking to create compelling content or streamline your development process, AMAZI AI has you covered.

## Pricing

- **Free Tier**: Enjoy 5 free trial uses of all AI tools.

- **Pro Account**: Upgrade to a Pro account for unlimited access to all AI tools. Payment can be made through Stripe.

## Authentication

AMAZI AI uses Clerks for user authentication. Your account is your gateway to a seamless experience with our AI tools.

## Deployment

AMAZI AI is hosted on [https://amazi.vercel.app/](https://amazi.vercel.app/). You can access it from anywhere, anytime.
