import { supabase, isSupabaseConfigured } from './supabase';
import { WaitlistFormData, SubmissionResponse } from '../types';

const LOCAL_STORAGE_KEY = 'sidhu_crew_fan_signups';

export async function submitFanSignup(formData: WaitlistFormData): Promise<SubmissionResponse> {
  const payload = {
    full_name: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    favorite_vlog_type: formData.favoriteVlogType,
    message: formData.message?.trim() || null,
    consent: formData.consent,
    created_at: new Date().toISOString(),
  };

  // 1. If Supabase is configured with active credentials
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase.from('fan_signups').insert([
        {
          full_name: payload.full_name,
          email: payload.email,
          favorite_vlog_type: payload.favorite_vlog_type,
          message: payload.message,
          consent: payload.consent,
        },
      ]);

      if (error) {
        console.error('Supabase insert error:', error);
        throw new Error(error.message || 'Failed to persist signup in Supabase');
      }

      return {
        success: true,
        message: 'Welcome to the crew! Your passenger seat is confirmed in Supabase.',
        isSimulated: false,
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Database error';
      console.warn('Supabase submission failed, checking fallback...', errorMsg);
      // Fall through to fallback endpoint / local storage fallback
    }
  }

  // 2. Try serverless fallback endpoint /api/signup if available
  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      return {
        success: true,
        message: data.message || 'Welcome to the crew! Recorded via serverless API.',
        isSimulated: false,
      };
    }
  } catch {
    // Serverless endpoint not present in static dev server, fall through to student demo local persistence
  }

  // 3. Graceful Student Demo Fallback (LocalStorage queue)
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const existingList: Array<typeof payload & { id: string }> = existingRaw ? JSON.parse(existingRaw) : [];
    
    const newEntry = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `mock-${Date.now()}`,
      ...payload,
    };
    
    existingList.unshift(newEntry);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingList.slice(0, 50)));

    // Artificial short delay to give authentic network feel
    await new Promise((res) => setTimeout(res, 600));

    return {
      success: true,
      message: 'Passenger ticket confirmed! (Saved to demo local vault — configure Supabase in .env for cloud sync)',
      isSimulated: true,
    };
  } catch (localErr) {
    console.error('Local storage error:', localErr);
    return {
      success: false,
      message: 'Could not record your entry. Please check browser storage settings and try again.',
    };
  }
}

export function getLocalSignups(): Array<{ id: string; full_name: string; email: string; favorite_vlog_type: string; created_at: string }> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
