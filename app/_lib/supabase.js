// const { createClient } = require("@supabase/supabase-js");

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPERBASE_URL,
  process.env.SUPERBASE_KEY
);
