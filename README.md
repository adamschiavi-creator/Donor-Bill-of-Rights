# Donation Bill of Rights — Collaborative Review Site

Password-protected Next.js website for collaborative review of the 15-article Donation Bill of Rights. Visitors can read articles and leave public comments; the site owner receives an email notification for each new comment.

---

## Setup (one-time, ~20 minutes)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase (free)

1. Go to [supabase.com](https://supabase.com) and create a free account.
2. Create a new project (choose any name, e.g. `donation-bill-of-rights`).
3. Once created, go to **SQL Editor** in the left sidebar and run this SQL:

```sql
CREATE TABLE comments (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT,
  author_name  TEXT NOT NULL,
  content      TEXT NOT NULL,
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read"   ON comments FOR SELECT USING (true);
CREATE POLICY "insert" ON comments FOR INSERT WITH CHECK (true);
```

4. Go to **Settings → API** in your project. Copy:
   - **Project URL** → `SUPABASE_URL`
   - **anon public key** → `SUPABASE_ANON_KEY`

### 3. Set up Resend for email notifications (free)

1. Go to [resend.com](https://resend.com) and create a free account.
2. Go to **API Keys** and create a new key. Copy it → `RESEND_API_KEY`.
3. *(Optional but recommended)* Add and verify your own domain under **Domains** so emails come from your address. Until then, emails will be sent from `onboarding@resend.dev` (works for testing).

### 4. Create your environment file

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
SITE_PASSWORD=choose-a-strong-password
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
RESEND_API_KEY=re_...
NOTIFICATION_EMAIL=your-email@example.com
```

> **Important:** `.env.local` is gitignored and will never be committed to GitHub.

### 5. Test locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should be redirected to the login page. Enter the password you set in `SITE_PASSWORD`.

Test the full flow:
- Log in with the correct password
- View the landing page and article cards
- Click an article and read it
- Submit a comment — it should appear immediately
- Check your email for the notification

### 6. Add your article content

Open `lib/articles.ts`. Each article has a `body` field with placeholder text. Replace the `[PLACEHOLDER — Replace with Article N text before March 25]` sections with your actual article content before deploying.

You can use blank lines to separate paragraphs; the site renders each paragraph separately.

### 7. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/donation-bill-of-rights.git
git push -u origin main
```

### 8. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New Project** and import your GitHub repository.
3. Before deploying, click **Environment Variables** and add all 5 variables from your `.env.local`:
   - `SITE_PASSWORD`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
4. Click **Deploy**.

Your site will be live at `https://donation-bill-of-rights.vercel.app` (or a custom domain if you set one).

---

## Sharing with collaborators

Share the site URL and the `SITE_PASSWORD` value with your collaborators before the March 25 meeting. Anyone with both can access the site and leave comments.

---

## Viewing comments

Comments are stored in your Supabase database. You can view them at any time:

1. Go to [supabase.com](https://supabase.com) and open your project.
2. Click **Table Editor** → **comments**.
3. All comments are listed there with timestamps.

You will also receive an email notification for each new comment.

---

## Updating article content

Edit `lib/articles.ts`, commit the change, and push to GitHub. Vercel will automatically redeploy within ~1 minute.
