# Automation Scripts

This directory contains automation scripts to help you deploy Obbel Coffee website.

## Scripts

### deploy.sh
Automated deployment script that handles:
- ✅ Check DATABASE_URL configuration
- ✅ Install dependencies
- ✅ Generate Prisma Client
- ✅ Push database schema to Supabase
- ✅ Build project
- ✅ Deploy to Vercel

**Usage:**
```bash
bash scripts/deploy.sh
```

**Before running:**
1. Set DATABASE_URL in .env or export it
2. Login to Vercel CLI: `vercel login`
3. Have Supabase project ready

---

### setup-env.sh
Helper script to create .env file with your DATABASE_URL.

**Usage:**
```bash
bash scripts/setup-env.sh
```

**This will:**
1. Ask for your Supabase DATABASE_URL
2. Create .env file (if not exists)
3. Warn about security

---

### migrate-db.sh
Database migration script to push Prisma schema to Supabase.

**Usage:**
```bash
bash scripts/migrate-db.sh
```

**Requirements:**
- DATABASE_URL must be set (in .env or exported)
- Prisma CLI installed

---

### test-db.sh
Test database connection to Supabase.

**Usage:**
```bash
bash scripts/test-db.sh
```

**This will:**
1. Load DATABASE_URL from .env if not set
2. Test connection using Prisma
3. Report success or failure

---

## Quick Start

### 1. Setup Environment
```bash
bash scripts/setup-env.sh
```

### 2. Test Database Connection
```bash
bash scripts/test-db.sh
```

### 3. Deploy Everything
```bash
bash scripts/deploy.sh
```

---

## Environment Variables

Create a `.env` file in the project root:

```bash
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres"
```

⚠️ **IMPORTANT:**
- Never commit .env to Git
- Keep DATABASE_URL secret
- Use different DATABASE_URL for each environment

---

## Troubleshooting

### "DATABASE_URL is not set"
→ Run `bash scripts/setup-env.sh` or set it manually:
```bash
export DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres"
```

### "Database connection failed"
→ Check your Supabase project is active (not paused)
→ Verify DATABASE_URL format and password
→ Test connection: `bash scripts/test-db.sh`

### "Deployment failed"
→ Check Vercel CLI is logged in: `vercel login`
→ Verify build output in deployment logs
→ Check environment variables in Vercel dashboard

---

## Vercel CLI Commands

### Login
```bash
vercel login
```

### Deploy Preview
```bash
vercel
```

### Deploy Production
```bash
vercel --prod
```

### View Logs
```bash
vercel logs
```

### List Deployments
```bash
vercel ls
```

---

## Database Commands

### Generate Prisma Client
```bash
bunx prisma generate
```

### Push Schema
```bash
bunx prisma db push
```

### Pull Schema
```bash
bunx prisma db pull
```

### Create Migration
```bash
bunx prisma migrate dev --name init
```

### Reset Database
```bash
bunx prisma migrate reset
```

### Open Prisma Studio (GUI)
```bash
bunx prisma studio
```

---

## Security Notes

⚠️ **CRITICAL:**

1. **Never commit .env file** - It's in .gitignore for a reason
2. **Never share DATABASE_URL** publicly
3. **Use strong passwords** for Supabase database
4. **Rotate passwords regularly** - Change database passwords every 3-6 months
5. **Use different credentials** for development vs production
6. **Monitor access** - Check Supabase dashboard for suspicious activity

---

## Support

If you encounter issues:

1. Check logs carefully
2. Verify all prerequisites are met
3. Test database connection first
4. Check Vercel dashboard for deployment errors
5. Review Supabase logs for database issues

Resources:
- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- Prisma Docs: https://www.prisma.io/docs
