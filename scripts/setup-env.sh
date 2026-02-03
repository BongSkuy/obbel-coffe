#!/bin/bash

# Helper Script to Set Up Environment Variables for Local Development
# This script will create a .env file from Supabase DATABASE_URL

echo "🔧 Environment Setup Script"
echo "================================"
echo ""

# Check if .env file exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists"
    read -p "Do you want to overwrite it? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "❌ Setup cancelled"
        exit 0
    fi
fi

echo ""
echo "Please provide your Supabase DATABASE_URL:"
echo ""
echo "Format: postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres"
echo ""
read -p "DATABASE_URL: " database_url

if [ -z "$database_url" ]; then
    echo "❌ DATABASE_URL cannot be empty"
    exit 1
fi

# Create .env file
cat > .env << EOL
# Database - Supabase
DATABASE_URL="$database_url"

# NextAuth (optional - add later)
# NEXTAUTH_URL="https://your-domain.vercel.app"
# NEXTAUTH_SECRET="your-secret-key"
EOL

echo ""
echo "✅ .env file created successfully"
echo ""
echo "⚠️  Important:"
echo "  - .env is NOT committed to Git (in .gitignore)"
echo "  - Keep your DATABASE_URL secret!"
echo "  - Never share .env file publicly"
echo ""
