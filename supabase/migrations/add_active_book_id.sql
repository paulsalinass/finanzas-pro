-- Migration: Add active_book_id to profiles table
-- Run this in your Supabase SQL Editor

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS active_book_id UUID REFERENCES books(id);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_active_book_id ON profiles(active_book_id);

-- Optional: Set default active book for existing users (first book they have access to)
UPDATE profiles p
SET active_book_id = (
  SELECT b.id 
  FROM books b 
  WHERE b.user_id = p.id 
  LIMIT 1
)
WHERE active_book_id IS NULL;
