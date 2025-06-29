# VideoToBlog - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Repository
1. Make sure all your changes are committed to GitHub
2. Ensure your `.env.local` file is properly configured (but not committed to git)

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Environment Variables
Add these environment variables in your Vercel dashboard:

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

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at `https://your-project-name.vercel.app`

## 🌍 Custom Domain (Optional)
1. In your Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update your DNS settings as instructed by Vercel
4. Update `NEXT_PUBLIC_APP_URL` to your custom domain

## 🔧 Post-Deployment Checklist
- [ ] Test authentication flow
- [ ] Test file upload functionality
- [ ] Test blog post generation
- [ ] Verify Stripe payments (if using)
- [ ] Check mobile responsiveness
- [ ] Test all main features

## 📊 Monitoring
- Use Vercel Analytics to monitor performance
- Set up error tracking with Sentry (optional)
- Monitor your database usage

## 🔄 Continuous Deployment
- Every push to your main branch will automatically trigger a new deployment
- Preview deployments are created for pull requests

---

**Built with ❤️ by Aditya** 