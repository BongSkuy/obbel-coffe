#!/bin/bash

# Database Migration Script for Supabase
# Run this script to push Prisma schema to your Supabase database

echo "🚀 Database Migration Script for Supabase"
echo "==========================================="
echo ""

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: DATABASE_URL is not set!"
    echo ""
    echo "Please set DATABASE_URL first:"
    echo ""
    echo "  export DATABASE_URL=\"postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres\""
    echo ""
    echo "Or create a .env file with:"
    echo "  DATABASE_URL=\"postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres\""
    echo ""
    exit 1
fi

echo "✅ DATABASE_URL is set"
echo ""

# Ask for confirmation
echo "⚠️  This will migrate your database schema to Supabase!"
echo "⚠️  Make sure you have backed up any existing data!"
echo ""
read -p "Do you want to continue? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "❌ Migration cancelled"
    exit 0
fi

echo ""
echo "🔄 Starting migration..."
echo ""

# Install Prisma CLI if not installed
if ! command -v npx &> /dev/null; then
    echo "📦 Installing Prisma CLI..."
    bun add -D prisma
fi

# Generate Prisma Client
echo "📝 Generating Prisma Client..."
bunx prisma generate

# Push schema to database
echo "🚀 Pushing schema to Supabase..."
bunx prisma db push --accept-data-loss

# Check if migration was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Migration successful!"
    echo ""
    echo "📊 Database schema has been updated!"
    echo ""
else
    echo ""
    echo "❌ Migration failed!"
    echo ""
    echo "Please check the error messages above."
    echo "Common issues:"
    echo "  - Wrong DATABASE_URL"
    echo "  - Database not accessible"
    echo "  - Connection to Supabase failed"
    echo ""
    exit 1
fi

echo "==========================================="
echo "✅ Migration Complete!"
echo "==========================================="
