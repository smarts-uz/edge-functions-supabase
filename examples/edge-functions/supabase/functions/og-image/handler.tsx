import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'
import {createClient} from '@supabase/supabase-js'

const STORAGE_IMG = 'https://decyitlleemplzimqedq.supabase.co/storage/v1/object/public/og-images/'
export default function handler(req: Request) {
    const url = new URL(req.url)
    const name = url.searchParams.get('name')



    const storageRes = await fetch(`${STORAGE_IMG}${name}.png`)
    if(storageRes.ok) return storageRes

    const genImage = new ImageResponse(
        (
            <div
                style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 128,
                        background: 'lavender',
                }}
            >
                Salom {name}!
            </div>
            )
       )

    const supabaseAdmin = createClient(
        'https://decyitlleemplzimqedq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY3lpdGxsZWVtcGx6aW1xZWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MzkwNzcsImV4cCI6MjAxMDQxNTA3N30.-o7eoRQ6RHasA2CHVS1su2lcM9fAk0UbBsQhBmE33gM'
    )

    const { data, error } = await supabaseAdmin.storage
        .from('og-images')
        .upload(`${name}.png`, genImage.body!, {
            contentType: 'image/png',
            cacheControl: '31536000',
            upsert: false,
        })
    console.log(data, error)

    return genImage
}

