// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import {corsHeaders} from "../_shared/cors.ts";
import {createClient} from '@supabase/supabase-js'


serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {headers: corsHeaders})
  }

  try{
    const supabaseClient = createClient(
        'https://decyitlleemplzimqedq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY3lpdGxsZWVtcGx6aW1xZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MzkwNzcsImV4cCI6MjAxMDQxNTA3N30.-o7eoRQ6RHasA2CHVS1su2lcM9fAk0UbBsQhBmE33gM',
        // Create client with Auth context of the user that called the function.
        // This way your row-level-security (RLS) policies are applied.
        {global: {headers: {Authorization: req.headers.get('Authorization')!}}}
    )

    const { id } = await req.json()

    const {data, error} = await supabaseClient.from('tasks').delete().eq('id', id)
    if (error) throw error

    return new Response(JSON.stringify({data}), {
      headers: {...corsHeaders, 'Content-Type': 'application/json'},
      status: 200,
    })


  } catch (error) {
    return new Response(JSON.stringify({error: error.message}), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY3lpdGxsZWVtcGx6aW1xZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MzkwNzcsImV4cCI6MjAxMDQxNTA3N30.-o7eoRQ6RHasA2CHVS1su2lcM9fAk0UbBsQhBmE33gM'
      },
      status: 400,
    })
  }
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
