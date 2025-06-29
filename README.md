# VideoToBlog - Convert your video or voice into a Blog Post in seconds with the power of AI!

Built with the Next.js 14 App Router, Clerk for Auth - with Passkeys, Github and Google Sign in, React, OpenAI - Whisper API, ShadCN UI library for components, React Markdown, NeonDb, UploadThing, Stripe for payments, Webhooks, TypeScript, TailwindCSS and more. **Built by Aditya**

![Project Image](https://www.speakeasyai.dev/og-image.png)

## Features

- 🌐 Next.js 14 App Router & Server Actions
- 🤖 OpenAI API for audio transcription and blog post generation
- 🔐 Authentication with Clerk (Passkeys, Github, and Google Sign-in)
- 📝 AI-powered blog post generation based on audio transcription
- 💳 Stripe integration for payments and subscription management
- 💾 NeonDb for database management
- 📤 UploadThing for file uploads
- 🎙️ Audio and video file processing (up to 25MB)
- 📜 TypeScript for type safety
- 💅 TailwindCSS for styling
- 🎨 ShadCN UI library for beautiful components
- 🔒 Secure file handling and processing
- 🪝 Webhook implementation for Stripe events
- 💰 Stripe integration for custom pricing table, payment links, and subscriptions
- 📊 User dashboard for managing blog posts
- 🖋️ Markdown editor for blog post editing
- 📱 Responsive design for mobile and desktop
- 🔄 Real-time updates and path revalidation
- 🚀 Deployment-ready (likely for Vercel)
- 🔔 Toast notifications for user feedback
- 📈 Performance optimizations
- 🔍 SEO-friendly blog post generation
- 📊 Recent blog posts display
- 🔐 Protected routes and API endpoints

## Getting started

To get started with this project, you need to do the following,

1. Please fork the repo
2. Copy the .env.example variables into a separate .env.local file
3. Create the credentials mentioned in the Youtube tutorial to get started!

## 1. How to fork and clone

- If you want to make changes and contribute to this project, you'll need to create a fork first. Forking creates a copy of the original project in your own GitHub account. This lets you experiment with edits without affecting the main project.

- Look for the "Fork" button in the top right corner of the project on GitHub. Clicking it will create a copy under your account with the same name.

- After forking the project, you can clone it just like you usually do.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your Vercel dashboard:

```
DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_api_key
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## Acknowledgements

- [Clerk](https://go.clerk.com/5qOWrFA) for making this project possible
- Built with ❤️ by Aditya

## License

[MIT](https://choosealicense.com/licenses/mit/)
