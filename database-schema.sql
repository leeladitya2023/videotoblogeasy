-- Database schema for SpeakEasyAI application
-- Run this in your Neon database SQL editor

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_posts_user_id ON posts(user_id);

-- Create index for created_at for sorting
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC); 