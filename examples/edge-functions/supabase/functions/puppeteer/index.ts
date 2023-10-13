// import { serve } from 'std/server'
// import puppeteer from 'puppeteer'

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
// import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
serve(async (req) => {
  try {

    // Visit browserless.io to get your free API token
    const browser = await puppeteer.connect({
      browserWSEndpoint: 'wss://chrome.browserless.io?token=a67a4440-1a56-4f0b-b56b-0092534022ef'
    })
    const page = await browser.newPage()

    const url = new URL(req.url).searchParams.get('url') || 'https://www.google.com'

    await page.goto(url)
    const screenshot = await page.screenshot()

    return new Response(screenshot, { headers: { 'Content-Type': 'image/png' } })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: e.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
