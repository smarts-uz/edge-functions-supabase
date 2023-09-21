// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import {serve} from 'std/server'
import {createClient} from '@supabase/supabase-js'
import {corsHeaders} from '../_shared/cors.ts'

console.log(`Function "select-from-table-with-auth-rls" up and running!`)

serve(async (req: Request) => {
    // This is needed if you're planning to invoke your function from a browser.
    if (req.method === 'OPTIONS') {
        return new Response('ok', {headers: corsHeaders})
    }

    try {
        const supabaseClient = createClient(
            'https://decyitlleemplzimqedq.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY3lpdGxsZWVtcGx6aW1xZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MzkwNzcsImV4cCI6MjAxMDQxNTA3N30.-o7eoRQ6RHasA2CHVS1su2lcM9fAk0UbBsQhBmE33gM',
            // Create client with AuthPage context of the user that called the function.
            // This way your row-level-security (RLS) policies are applied.
            {global: {headers: {Authorization: req.headers.get('Authorization')!}}}
        )
        // Now we can get the session or user object
        const {
            data: {user},
        } = await supabaseClient.auth.getUser()

        // And we can run queries in the context of our authenticated user
        const {data, error} = await supabaseClient.from('profiles').select('*')
        if (error) throw error

        return new Response(JSON.stringify({user, data}), {
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
// curl -i --location --request POST 'http://localhost:54321/functions/v1/select-from-table-with-auth-rls' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
