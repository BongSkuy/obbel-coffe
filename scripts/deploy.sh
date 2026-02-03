#!/bin/bash

# Automated Deployment Script for Obbel Coffee
# This script will automate deployment to Vercel and Supabase database setup

set -e  # Exit on error

echo "🚀 Obbel Coffee - Automated Deployment Script"
echo "================================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if user is in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found!${NC}"
    echo "Please run this script from the project root directory."
    exit 1
fi

echo -e "${GREEN}✅ Project directory confirmed${NC}"
echo ""

# Step 1: Check for DATABASE_URL
echo -e "${BLUE}📊 Step 1: Check Database Configuration${NC}"
echo "-------------------------------------------"

if [ -z "$DATABASE_URL" ]; then
    echo -e "${YELLOW}⚠️  DATABASE_URL is not set${NC}"
    echo ""
    echo "Please follow these steps:"
    echo ""
    echo "1. Open https://supabase.com"
    echo "2. Click 'Start your project' or 'Sign up'"
    echo "3. Create a new project:"
    echo "   - Name: obbel-coffee-prod"
    echo "   - Region: Southeast Asia (Singapore)"
    echo "   - Database Password: Create a strong password and SAVE IT!"
    echo "4. After project is created, go to:"
    echo "   Settings → Database → Connection string → URI"
    echo "5. Copy the connection string"
    echo ""
    echo "Then set DATABASE_URL:"
    echo ""
    echo -e "${GREEN}  export DATABASE_URL=\"postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres\"${NC}"
    echo ""
    echo "Or create a .env file with:"
    echo ""
    echo -e "${GREEN}  DATABASE_URL=\"postgresql://postgres:[PASSWORD]@[HOST]:6543/postgres\"${NC}"
    echo ""

    read -p "Have you set up DATABASE_URL? (y/n): " confirm_db

    if [ "$confirm_db" != "y" ]; then
        echo -e "${RED}❌ Please set DATABASE_URL first and run this script again${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ DATABASE_URL is configured${NC}"
echo ""

# Step 2: Install dependencies if needed
echo -e "${BLUE}📦 Step 2: Check Dependencies${NC}"
echo "-------------------------------------------"

echo "Installing dependencies..."
bun install

echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Step 3: Generate Prisma Client
echo -e "${BLUE}🔧 Step 3: Generate Prisma Client${NC}"
echo "-------------------------------------------"

bunx prisma generate

echo -e "${GREEN}✅ Prisma Client generated${NC}"
echo ""

# Step 4: Setup Database Schema
echo -e "${BLUE}📊 Step 4: Setup Database Schema${NC}"
echo "-------------------------------------------"

read -p "Push database schema to Supabase? (y/n): " confirm_schema

if [ "$confirm_schema" = "y" ]; then
    echo "Pushing schema to database..."
    bunx prisma db push --accept-data-loss
    echo -e "${GREEN}✅ Database schema updated${NC}"
else
    echo -e "${YELLOW}⏭️  Skipping database schema setup${NC}"
fi

echo ""

# Step 5: Build Project
echo -e "${BLUE}🏗️  Step 5: Build Project${NC}"
echo "-------------------------------------------"

echo "Building project..."
bun run build

echo -e "${GREEN}✅ Build completed${NC}"
echo ""

# Step 6: Deploy to Vercel
echo -e "${BLUE}🚀 Step 6: Deploy to Vercel${NC}"
echo "-------------------------------------------"

read -p "Deploy to production now? (y/n): " confirm_deploy

if [ "$confirm_deploy" = "y" ]; then
    echo "Deploying to Vercel..."
    vercel --prod

    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✅ Deployment successful!${NC}"
        echo ""
        echo "Your website should now be live at:"
        echo -e "${BLUE}https://obbel-coffee.vercel.app${NC}"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Deployment failed${NC}"
        echo "Please check the error messages above."
        exit 1
    fi
else
    echo -e "${YELLOW}⏭️  Skipping deployment${NC}"
fi

echo ""
echo "================================================"
echo -e "${GREEN}🎉 Deployment Script Complete!${NC}"
echo "================================================"
