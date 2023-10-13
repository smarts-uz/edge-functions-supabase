// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import {createClient} from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey',
}

serve(async (req) => {
  // read a text file from storage and print its contents
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create a Supabase client with the AuthPage context of the logged in user.
    const supabaseClient = createClient(
      // Supabase API URL - env var exported by default.
      'https://uyjwwcnooayvymdwbcsb.supabase.co',
      // Supabase API ANON KEY - env var exported by default.
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5and3Y25vb2F5dnltZHdiY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDUzMTcsImV4cCI6MjAxMjU4MTMxN30.yRU-A6IHLf-OnGvyo45olnWddy1Xz79ImwJdG86zfp4',
      // Create client with AuthPage context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // const { data, error } = await supabaseClient.storage.from('files').download('sample.txt')


    // if (error) throw error

    // file contents are returned as a blob, we can convert it to utf-8 text by calling text() method.
    // const contents = await data.text()

    // prints out the contents of the file
    // console.log(contents)

    const { data, error } = await supabaseClient
        .storage
        .from('files')
        .list('', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        })

    if (error) throw error





    return new Response(JSON.stringify({ data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error(error)

    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
}).then()
