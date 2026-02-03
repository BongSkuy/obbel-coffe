# Deployment Guide - Obbel Coffee

Complete guide to deploy Obbel Coffee website with Supabase database and Vercel hosting.

---

## 📊 TABLE OF CONTENTS

1. [Setup Database Supabase](#1-setup-database-supabase)
2. [Deploy ke Vercel](#2-deploy-ke-vercel)
3. [Update & Redeploy](#3-update--redeploy)
4. [Troubleshooting](#4-troubleshooting)
5. [Checklist](#5-checklist-deployment)

---

## 1. SETUP DATABASE SUPABASE

### 1.1 Buat Akun Supabase

1. Buka: https://supabase.com
2. Klik tombol **"Start your project"** atau **"Sign up"**
3. Sign up dengan GitHub (paling mudah)
   - Klik **"Continue with GitHub"**
   - Authorize Supabase untuk akses GitHub Anda

### 1.2 Buat Project Baru

1. Setelah login, Anda akan melihat dashboard
2. Klik tombol **"New Project"** (di pojok kanan atas)

3. Isi form project:

   **Project Details:**
   - **Name**: `obbel-coffee-prod` (atau nama lain yang mudah diingat)
   - **Database Password**: ⚠️ **PENTING!** Buat password kuat dan SAVE password ini!
     - Minimal 10 karakter
     - Campuran huruf, angka, dan simbol
     - Contoh: `0bb3lC0ff33!2024#Secure`
     - ⚠️ **Simpan password di tempat aman** (Password manager, notepad, dll)

   **Region**: Pilih region terdekat dengan target audience
   - Untuk Indonesia: **Southeast Asia (Singapore)**
   - Untuk Global: **Northeast Asia (Tokyo)** atau **US East**

   **Pricing Plan**: Pilih **Free**

4. Klik **"Create new project"**

5. Tunggu beberapa menit (2-5 menit)
   - Supabase akan setup database
   - Anda akan melihat progress bar
   - Saat selesai, akan muncul dashboard project

### 1.3 Dapatkan DATABASE_URL

Saat project siap:

1. Di dashboard Supabase, buka project yang baru dibuat

2. Di sidebar kiri, klik:
   - **Settings** (ikon gear ⚙️)
   - **Database**

3. Scroll ke section: **"Connection string"**

4. Anda akan melihat beberapa tab:
   - **URI** - yang kita butuhkan
   - **Transaction pool**
   - **Session mode**

5. Pilih tab **"URI"**

6. Anda akan melihat connection string format:
   ```
   postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
   ```

7. Copy connection string tersebut

8. Format connection string yang benar:
   ```
   postgresql://postgres:[YOUR_PASSWORD]@[HOST]:[PORT]/postgres
   ```

   Contoh real (isi dengan data Anda):
   ```
   postgresql://postgres:0bb3lC0ff33!2024#Secure@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
   ```

   ⚠️ **PENTING**: Ganti `[YOUR_PASSWORD]` dengan password yang Anda buat saat create project

9. **Simpan DATABASE_URL ini!** Anda akan butuh untuk:
   - Environment variable di Vercel
   - Local development
   - Database migrations

### 1.4 Test Connection (Opsional tapi Direkomendasikan)

#### Option A: Menggunakan TablePlus atau DBeaver

1. Buka aplikasi database client (TablePlus, DBeaver, pgAdmin, dll)
2. Create new connection
3. Isi dengan data dari Supabase:
   - Host: Dari connection string (contoh: `aws-0-ap-southeast-1.pooler.supabase.com`)
   - Port: `6543` (atau `5432`)
   - User: `postgres`
   - Password: Password yang Anda buat
   - Database: `postgres`
4. Test connection
5. Jika berhasil, connection string Anda sudah benar

#### Option B: Menggunakan Prisma CLI

Di terminal, jalankan:

```bash
# Set DATABASE_URL temporary untuk testing
export DATABASE_URL="postgresql://postgres:[YOUR_PASSWORD]@[HOST]:6543/postgres"

# Test dengan Prisma
bunx prisma db pull
```

---

## 2. DEPLOY KE VERCEL

### 2.1 Buat Akun Vercel

1. Buka: https://vercel.com
2. Klik **"Sign Up"** (atau "Login" jika sudah punya akun)
3. Klik **"Continue with GitHub"**
4. Authorize Vercel untuk akses repository GitHub Anda:
   - Klik "Authorize Vercel"
   - Masukkan password GitHub jika diminta
   - Pilih repository yang akan diakses (select "Only select repositories")
   - Cari dan pilih: `obbel-coffe`
   - Klik "Install" atau "Authorize"

### 2.2 Import Repository ke Vercel

Setelah login dan authorize GitHub:

1. Di Vercel dashboard, klik tombol **"Add New..."** di pojok kanan atas

2. Pilih **"Project"**

3. Cari repository `obbel-coffe` di list "Git Repositories"
   - Jika tidak muncul, klik "Import Git Repository"
   - Paste URL: https://github.com/BongSkuy/obbel-coffe.git
   - Klik "Continue"

4. Anda akan melihat halaman **"Configure Project"**

### 2.3 Konfigurasi Project Vercel

Di halaman Configure Project:

#### Framework & Build Settings:

**Framework Preset:**
- Otomatis terdeteksi: **Next.js**
- Jika tidak, pilih: **Next.js**

**Root Directory:**
- Biarkan: `./`

**Build & Output Settings:**
- **Build Command**: `bun run build`
- **Output Directory**: `.next` (default)
- **Install Command**: `bun install`
- **Development Command**: `bun run dev`

#### Environment Variables (PENTING!):

Scroll ke bawah ke section **"Environment Variables"**

Klik tombol **"Add New"** dan tambahkan:

**Variable 1: DATABASE_URL**
- **Name**: `DATABASE_URL`
- **Value**: Paste connection string Supabase Anda:
  ```
  postgresql://postgres:[YOUR_PASSWORD]@[HOST]:6543/postgres
  ```
- **Environment**: Select **All** (Production, Preview, Development)
- Klik **"Save"**

⚠️ **PENTING**: Ganti `[YOUR_PASSWORD]` dengan password yang Anda buat di Supabase!

Contoh real:
```
postgresql://postgres:0bb3lC0ff33!2024#Secure@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

#### Additional Settings (Opsional tapi Direkomendasikan):

Scroll ke bawah ke **"General"** section:

**Project Name:**
- Ganti default ke: `obbel-coffee`

**Region:**
- Pilih region terdekat dengan Supabase:
  - Jika Supabase di Singapore: `Singapore (sin1)`
  - Jika Supabase di Tokyo: `Tokyo (hnd1)`
  - Default: `us-east-1`

**Node.js Version:**
- Biarkan default: `20.x` atau `18.x`

### 2.4 Deploy ke Vercel

1. Scroll ke paling bawah halaman

2. Klik tombol **"Deploy"** (atau "Create")

3. Tunggu proses build:
   - Anda akan melihat progress:
     - `Cloning repository...`
     - `Installing dependencies...`
     - `Building...`
     - `Uploading...`
   - Waktu yang dibutuhkan: 2-5 menit

4. Jika build berhasil:
   - Anda akan melihat: **"🎉 Deployed!"**
   - Ada URL production:
     ```
     https://obbel-coffee.vercel.app
     ```

5. Klik tombol **"Visit"** untuk membuka website!

### 2.5 Setup Database di Production

Saat ini website sudah deploy tapi database belum punya schema. Mari kita setup:

#### Opsi A: Menggunakan Prisma CLI (Rekomendasi)

Di terminal:

```bash
# Set DATABASE_URL
export DATABASE_URL="postgresql://postgres:[YOUR_PASSWORD]@[HOST]:6543/postgres"

# Generate Prisma Client
bunx prisma generate

# Push schema ke database
bunx prisma db push --accept-data-loss
```

#### Opsi B: Menggunakan Migration Script

Jika Anda punya script migration:

```bash
cd /home/z/my-project

# Jalankan migration script
bash scripts/migrate-db.sh
```

### 2.6 Verify Deployment

1. Buka production URL:
   ```
   https://obbel-coffee.vercel.app
   ```

2. Cek:
   - [ ] Home page loading
   - [ ] Navigation menu working
   - [ ] Images loading
   - [ ] Responsive design (mobile, tablet, desktop)

3. Buka browser console (F12):
   - Cek untuk error messages
   - Pastikan tidak ada database connection errors

---

## 3. UPDATE & REDEPLOY

### 3.1 Make Changes to Code

1. Edit file di project:
   ```bash
   cd /home/z/my-project
   ```

2. Contoh: Edit `src/app/page.tsx`

### 3.2 Commit & Push Changes

```bash
# Add changes
git add .

# Commit
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

### 3.3 Auto-Deploy to Vercel

Vercel akan otomatis:
1. Detect changes di GitHub
2. Trigger new deployment
3. Build dan deploy
4. Email notifikasi jika deploy berhasil

### 3.4 Monitor Deployment

1. Buka Vercel dashboard
2. Klik **"Deployments"**
3. Lihat status terbaru:
   - **Building**: Sedang build
   - **Ready**: Deploy berhasil
   - **Error**: Deploy gagal

---

## 4. TROUBLESHOOTING

### Error: "DATABASE_URL is not set"

**Solution:**
1. Buka Vercel dashboard → Settings → Environment Variables
2. Add `DATABASE_URL` dengan Supabase connection string
3. Redeploy project

### Error: "Build failed - Prisma generate failed"

**Solution:**
1. Pastikan `prisma` ada di `package.json`
2. Check `package.json`:
   ```json
   "dependencies": {
     "@prisma/client": "^6.x.x"
   },
   "devDependencies": {
     "prisma": "^6.x.x"
   }
   ```
3. Jika belum, install:
   ```bash
   bun add @prisma/client
   bun add -D prisma
   ```
4. Commit dan push changes

### Error: "Database connection failed"

**Solution:**
1. Cek DATABASE_URL di Vercel environment variables
2. Pastikan password benar
3. Pastikan Supabase project aktif (bukan paused)
4. Test connection di local:
   ```bash
   export DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres"
   bunx prisma db pull
   ```

### Error: "Page not found - 404"

**Solution:**
1. Cek file structure:
   - `src/app/page.tsx` harus ada
   - Pastikan ada default export page component

2. Cek `src/app/layout.tsx`:
   - Pastikan ada proper layout structure

3. Rebuild:
   - Di Vercel dashboard, klik "Redeploy"

---

## 5. CHECKLIST DEPLOYMENT

- [ ] **Database Setup**
  - [ ] Buat akun Supabase
  - [ ] Buat project Supabase
  - [ ] Copy DATABASE_URL
  - [ ] Update Prisma schema ke PostgreSQL
  - [ ] Push schema ke database

- [ ] **Vercel Setup**
  - [ ] Buat akun Vercel
  - [ ] Authorize GitHub
  - [ ] Import repository `obbel-coffe`
  - [ ] Konfigurasi build settings
  - [ ] Add DATABASE_URL environment variable

- [ ] **Deploy**
  - [ ] Deploy project ke Vercel
  - [ ] Verify website live
  - [ ] Test all pages
  - [ ] Test responsive design

---

## 🎉 SUMMARY

**What You Have Now:**

✅ Database production (Supabase PostgreSQL)
✅ Website live di Vercel
✅ Auto-deploy setup (setiap push ke GitHub trigger deploy)
✅ Environment variables configured
✅ SSL certificate (HTTPS)
✅ CDN untuk static assets

**Production URLs:**

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Website**: https://obbel-coffee.vercel.app (or your custom domain)
- **Supabase Dashboard**: https://supabase.com/dashboard

---

## 🚀 NEXT STEPS

1. **Monitor**: Cek Vercel Analytics untuk traffic
2. **Optimize**: Optimize images dan performance
3. **Scale**: Jika traffic tinggi, upgrade database plan
4. **Custom Domain**: Setup custom domain untuk branding
5. **Add Features**: Tambah fitur sesuai kebutuhan

---

## 📞 NEED HELP?

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**Selamat! Website Obbel Coffee siap untuk di-deploy! 🎉**
