import { createClient } from '@supabase/supabase-js';

// This is your project's public "anon/publishable" key â€” it's designed to be
// visible in client-side code and is safe to commit. Access is controlled by
// the Row Level Security policies in supabase-schema.sql, not by hiding this key.
const supabaseUrl = 'https://bfatwitvsjivugochego.supabase.co';
const supabaseAnonKey = 'sb_publishable_bJhPx5EeKA1W1C49mgmFQQ_H1uErh09';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

