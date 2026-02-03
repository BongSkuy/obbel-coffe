#!/bin/bash

# Test Database Connection Script
# This script will test your Supabase database connection

echo "🔍 Database Connection Test"
echo "=============================="
echo ""

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "⚠️  DATABASE_URL is not set"
    echo "Loading from .env file..."

    if [ -f ".env" ]; then
        export $(cat .env | grep -v '^#' | xargs)
        echo "✅ DATABASE_URL loaded from .env"
    else
        echo "❌ .env file not found"
        echo ""
        echo "Please set DATABASE_URL:"
        echo ""
        echo "  export DATABASE_URL=\"postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres\""
        echo ""
        echo "Or run: bash scripts/setup-env.sh"
        echo ""
        exit 1
    fi
fi

echo ""
echo "Testing database connection..."
echo ""

# Test with Prisma
bunx prisma db pull 2>&1 | head -20

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database connection successful!"
    echo ""
    echo "You can now:"
    echo "  - Push schema: bunx prisma db push"
    echo "  - Generate client: bunx prisma generate"
    echo "  - Run migrations: bunx prisma migrate dev"
else
    echo ""
    echo "❌ Database connection failed!"
    echo ""
    echo "Common issues:"
    echo "  - Wrong DATABASE_URL format"
    echo "  - Invalid password"
    echo "  - Database not active (paused in Supabase)"
    echo "  - Network/firewall issues"
    echo ""
    echo "Please check your DATABASE_URL and try again."
    exit 1
fi
