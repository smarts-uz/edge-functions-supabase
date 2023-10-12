// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const STORAGE_URL = 'https://uyjwwcnooayvymdwbcsb.supabase.co/storage/v1/object/public/images/'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
        'https://uyjwwcnooayvymdwbcsb.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5and3Y25vb2F5dnltZHdiY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDUzMTcsImV4cCI6MjAxMjU4MTMxN30.yRU-A6IHLf-OnGvyo45olnWddy1Xz79ImwJdG86zfp4',
        // Create client with AuthPage context of the user that called the function.
        // This way your row-level-security (RLS) policies are applied.
        {global: {headers: {Authorization: req.headers.get('Authorization')!}}}
    )

    const body = req.body

    const images = body.image
    const { data, error } = await supabaseClient
        .storage
        .from('images')
        .upload('/', images, {
          cacheControl: '3600',
          upsert: false
        })

    console.log(data)

    if (error) throw error

    // return await fetch(`${STORAGE_URL}/tickets/${username}.png?v=3`)

    return new Response(
        JSON.stringify("Ok"),
        { headers: { "Content-Type": "application/json" } },
    )

  } catch (e) {
    return new Response(
        JSON.stringify(e),
        { headers: { "Content-Type": "application/json" } },
    )
  }


})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
