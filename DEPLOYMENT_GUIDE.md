# Setup Database Supabase - Step by Step

## 1. Buat Akun Supabase

1. Buka: https://supabase.com
2. Klik tombol **"Start your project"** atau **"Sign up"**
3. Sign up dengan GitHub (paling mudah)
   - Klik **"Continue with GitHub"**
   - Authorize Supabase untuk akses GitHub Anda

## 2. Buat Project Baru

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

## 3. Dapatkan DATABASE_URL

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

## 4. Test Connection (Opsional tapi Direkomendasikan)

Untuk memastikan connection string benar:

### Option A: Menggunakan TablePlus atau DBeaver

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

### Option B: Menggunakan Prisma CLI

Di terminal, jalankan:

```bash
# Set DATABASE_URL temporary untuk testing
export DATABASE_URL="postgresql://postgres:[YOUR_PASSWORD]@[HOST]:6543/postgres"

# Test dengan Prisma
bunx prisma db pull

# Jika berhasil, Anda akan melihat:
# ⚠️  The provider specified for your schema (sqlite) does not match the one
# specified in your connection string (postgresql). This is expected if you
# are connecting to a new database provider.
```

## 5. Setup Database Security

Di Supabase dashboard:

1. Buka **Settings** → **Database**

2. Scroll ke section **"Connection pooling"**
   
   Konfigurasi:
   - **Transaction mode**: Session mode (untuk development)
   - **Transaction mode**: Transaction mode (untuk production, lebih performant)

3. Buka **Settings** → **API**

4. Di section **"Project API keys"**:
   
   Copy dan simpan:
   - **Project URL** - URL dasar project
   - **anon public** key - API key publik
   - **service_role** key - API key admin (JANGAN BAGIKAN!)
   
   ⚠️ **Simpan keys ini dengan aman!**

## 6. Ringkasan

✅ **Yang Anda Punya Sekarang:**
1. Akun Supabase
2. Project Supabase dengan PostgreSQL database
3. **DATABASE_URL** untuk Vercel
4. Supabase dashboard untuk monitoring

✅ **Yang Butuh Disimpan:**
1. **DATABASE_URL** - connection string lengkap dengan password
2. **Project URL** - https://[project-ref].supabase.co
3. **Project Reference** - [project-ref] unik
4. **Database Password** - password yang Anda buat
5. **API Keys** - anon dan service_role

---

## Selanjutnya

Sekarang Anda sudah punya database production! 

👉 Lanjut ke **LANGKAH 2**: Update Prisma Schema dan Deploy ke Vercel

---
