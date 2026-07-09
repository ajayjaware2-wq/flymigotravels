/*
# Create travel_inquiries table (single-tenant, no auth)

## Purpose
Flymigo Travels is a no-sign-in inquiry-based travel agency website. Visitors
submit a trip-planning inquiry (destination, dates, budget, travelers, etc.)
which is stored so the Flymigo team can follow up. There are no user accounts.

## New Tables
- `travel_inquiries`
  - `id` uuid, primary key
  - `destination` text — the place the traveler wants to visit
  - `travel_date` text — preferred travel date (free text / date string)
  - `budget` text — approximate budget range
  - `travelers` text — number of travelers
  - `hotel_preference` text — preferred hotel category
  - `special_requirements` text — any extra requests
  - `whatsapp_number` text — contact number (used for WhatsApp follow-up)
  - `preferred_contact` text — preferred contact method (WhatsApp / Call / Email)
  - `name` text — traveler name (optional but useful)
  - `status` text — inquiry lifecycle, defaults to 'new'
  - `created_at` timestamptz — submission timestamp

## Security
- Enable RLS on `travel_inquiries`.
- Allow anon + authenticated INSERT only (public visitors submit inquiries;
  no public read/update/delete — inquiries are private business data).
- No SELECT/UPDATE/DELETE policies: only the service-role backend (team) reads
  them, which bypasses RLS.

## Notes
1. This is a no-auth app: policies use `TO anon, authenticated` so the
   anon-key frontend can submit inquiries without signing in.
2. Only INSERT is exposed publicly. Reading/managing inquiries is done with
   the service role key (server-side / Supabase dashboard), which bypasses RLS.
*/

CREATE TABLE IF NOT EXISTS travel_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination text,
  travel_date text,
  budget text,
  travelers text,
  hotel_preference text,
  special_requirements text,
  whatsapp_number text,
  preferred_contact text,
  name text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE travel_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON travel_inquiries;
CREATE POLICY "anon_insert_inquiries"
  ON travel_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS travel_inquiries_created_at_idx
  ON travel_inquiries (created_at DESC);
