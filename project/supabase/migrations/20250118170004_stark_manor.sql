/*
  # Add Modules and Lessons Tables

  1. New Tables
    - `modules`
      - `id` (uuid, primary key)
      - `course_id` (uuid, foreign key to courses)
      - `title` (text)
      - `description` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `lessons`
      - `id` (uuid, primary key)
      - `module_id` (uuid, foreign key to modules)
      - `title` (text)
      - `content` (text)
      - `type` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for instructors to manage their course content
    - Add policies for students to view enrolled course content
*/

-- Create modules table
CREATE TABLE IF NOT EXISTS modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text,
  type text NOT NULL CHECK (type IN ('text', 'video', 'quiz')),
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Modules policies
CREATE POLICY "Instructors can manage modules for their courses"
  ON modules
  USING (
    EXISTS (
      SELECT 1 FROM courses
      WHERE courses.id = modules.course_id
      AND courses.instructor_id = auth.uid()
    )
  );

CREATE POLICY "Students can view modules for enrolled courses"
  ON modules FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM enrollments
      JOIN courses ON courses.id = enrollments.course_id
      WHERE courses.id = modules.course_id
      AND enrollments.user_id = auth.uid()
    )
  );

-- Lessons policies
CREATE POLICY "Instructors can manage lessons for their courses"
  ON lessons
  USING (
    EXISTS (
      SELECT 1 FROM modules
      JOIN courses ON courses.id = modules.course_id
      WHERE modules.id = lessons.module_id
      AND courses.instructor_id = auth.uid()
    )
  );

CREATE POLICY "Students can view lessons for enrolled courses"
  ON lessons FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM modules
      JOIN courses ON courses.id = modules.course_id
      JOIN enrollments ON enrollments.course_id = courses.id
      WHERE modules.id = lessons.module_id
      AND enrollments.user_id = auth.uid()
    )
  );