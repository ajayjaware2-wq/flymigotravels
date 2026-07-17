import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// =====================
// Travel Inquiry
// =====================

export type InquiryPayload = {
  destination?: string;
  travel_date?: string;
  budget?: string;
  travelers?: string;
  hotel_preference?: string;
  special_requirements?: string;
  whatsapp_number?: string;
  preferred_contact?: string;
  name?: string;
};

export async function submitInquiry(payload: InquiryPayload) {
  const { data, error } = await supabase
    .from('travel_inquiries')
    .insert({
      destination: payload.destination,
      travel_date: payload.travel_date,
      budget: payload.budget,
      travelers: payload.travelers,
      hotel_preference: payload.hotel_preference,
      special_requirements: payload.special_requirements,
      whatsapp_number: payload.whatsapp_number,
      preferred_contact: payload.preferred_contact,
      name: payload.name,
      status: 'new',
    })
    .select('id')
    .maybeSingle();

  return { data, error };
}

// =====================
// Reviews
// =====================

export type ReviewPayload = {
  name: string;
  location: string;
  trip_name: string;
  rating: number;
  message: string;
};

export async function getReviews() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  return { data, error };
}

export async function submitReview(payload: ReviewPayload) {
  const { data, error } = await supabase
    .from('reviews')
    .insert(payload)
    .select()
    .single();

  return { data, error };
}