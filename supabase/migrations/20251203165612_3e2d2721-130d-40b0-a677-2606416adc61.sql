-- Create enum for project categories
CREATE TYPE public.project_category AS ENUM ('residential', 'commercial');

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT,
  description TEXT,
  category project_category NOT NULL DEFAULT 'residential',
  subcategories TEXT[] NOT NULL DEFAULT '{}',
  images TEXT[] NOT NULL DEFAULT '{}',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for project images
INSERT INTO storage.buckets (id, name, public) VALUES ('project-images', 'project-images', true);

-- Enable RLS on projects (public read, admin write via service role)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

-- Allow public insert/update/delete for admin panel (no auth for simplicity)
CREATE POLICY "Projects can be managed publicly" 
ON public.projects 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Enable RLS on contacts
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow public insert for contact form
CREATE POLICY "Anyone can submit contacts" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Allow public read for admin panel
CREATE POLICY "Contacts are viewable publicly" 
ON public.contacts 
FOR SELECT 
USING (true);

-- Allow update/delete for admin
CREATE POLICY "Contacts can be managed publicly" 
ON public.contacts 
FOR UPDATE 
USING (true)
WITH CHECK (true);

CREATE POLICY "Contacts can be deleted publicly" 
ON public.contacts 
FOR DELETE 
USING (true);

-- Storage policies for project images
CREATE POLICY "Project images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-images');

CREATE POLICY "Anyone can upload project images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "Anyone can update project images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'project-images');

CREATE POLICY "Anyone can delete project images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'project-images');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();