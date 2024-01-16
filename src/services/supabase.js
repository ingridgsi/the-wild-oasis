import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hmwppxbjrkmwykcfsbko.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtd3BweGJqcmttd3lrY2ZzYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3ODMxMTIsImV4cCI6MjAxNzM1OTExMn0.IAjEOpt3w9rft-QEK7s26fqfTkJteulkHRMIOI2Xr7Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
