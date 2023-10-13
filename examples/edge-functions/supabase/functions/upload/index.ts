/**
 *
 * SUPABASE EDGE FUNCTION "replace_avatar"
 *
 */

// import {serve} from "https://deno.land/std/http/server.ts";
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import {createClient} from 'https://esm.sh/@supabase/supabase-js@2'
import {multiParser, FormFile} from 'https://deno.land/x/multiparser@0.114.0/mod.ts'


const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {

  if (req.method === 'OPTIONS') {
    return new Response('ok', {headers: corsHeaders})
  }

  try {

    const supabaseClient = createClient(
         'https://uyjwwcnooayvymdwbcsb.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5and3Y25vb2F5dnltZHdiY3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDUzMTcsImV4cCI6MjAxMjU4MTMxN30.yRU-A6IHLf-OnGvyo45olnWddy1Xz79ImwJdG86zfp4',
        {global: {headers: {Authorization: req.headers.get('Authorization')!}}}
    );



    const form = await multiParser(req);
    if (!form) {
      return new Response(JSON.stringify({success: false, error: 'no file found'}), {
        headers: {...corsHeaders, 'Content-Type': 'application/json'},
        status: 400
      });
    }

    const image = form.files.image as FormFile;

    // const {
    //   data: {user},
    // } = await supabaseClient.auth.getUser();

    // let {data: profile} = await supabaseClient
    //     .from('profiles')
    //     .select('avatar_url')
    //     .eq('id', user.id)
    //     .limit(1)
    //     .single();

    // if (profile && profile.avatar_url) {
    //   const {error} = await supabaseClient.storage.from('avatars').remove([profile.avatar_url]);
    //   if (error) {
    //     return new Response(JSON.stringify({success: false, error: error.message}), {
    //       headers: {...corsHeaders, 'Content-Type': 'application/json'},
    //       status: 400
    //     });
    //   }
    // }

    const {data} = await supabaseClient.storage.from('files').upload(image.filename, image.content!.buffer, {
      contentType: image.contentType,
      cacheControl: '3600',
      upsert: false
    });

    // await supabaseClient
    //     .from('profiles')
    //     .update({avatar_url: image.filename})
    //     .eq('id', user.id);

    return new Response(JSON.stringify({image, data, success: true, error: null}), {
      headers: {...corsHeaders, 'Content-Type': 'application/json'},
      status: 200
    });

  } catch (error) {
    return new Response(JSON.stringify({success: false, error: error.message}), {
      headers: {...corsHeaders, 'Content-Type': 'application/json'},
      status: 400
    });
  }
});