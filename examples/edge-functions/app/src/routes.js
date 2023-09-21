import Rest from "./pages/Rest.jsx";
import React from "react";
import Bot from "./pages/Bot.jsx";
import Auth from "./pages/Auth.jsx";
import Services from "./pages/Services.jsx";
import Image from "./pages/Image.jsx"
import RestFull from "./components/rest/RestFull.jsx";
import Browser from "./components/rest/Browser.jsx";
import RestCreate from "./components/rest/RestCreate.jsx";
import RestDelete from "./components/rest/RestDelete.jsx";
import RestRead from "./components/rest/RestRead.jsx";
import Select from "./components/rest/Select.jsx";
import Others from "./pages/Others.jsx";
import MainPage from "./pages/MainPage.jsx";

export const main_nav = [
    {
        title: 'MAIN',
        path: '',
        element: <MainPage/>
    },
    {
        title: 'REST',
        path: 'rest/*',
        element: <Rest/>
    },
    {
        title: 'IMAGE',
        path: 'image/*',
        element: <Image/>
    },
    {
        title: 'BOT',
        path: 'bot/*',
        element: <Bot/>
    },
    {
        title: 'AUTH',
        path: 'auth/*',
        element: <Auth/>
    },
    {
        title: 'SERVICES',
        path: 'services/*',
        element: <Services/>
    },
    {
        title: 'OTHERS',
        path: 'others/*',
        element: <Others/>
    },
]

export const rest_nav = [
    {
        title: 'CORS',
        path: 'browser-with-cors',
        element: <Browser/>
    },
    {
        title: 'Select users',
        path: 'select-users',
        element: <Select/>
    },
    {
        title: 'Rest Read',
        path: 'restapi',
        element: <RestRead/>
    },
    {
        title: 'Rest Create',
        path: 'rest-create',
        element: <RestCreate/>
    },
    {
        title: 'Rest Delete',
        path: 'rest-delete',
        element: <RestDelete/>
    },
    {
        title: 'Restful-tasks',
        path: 'restful-tasks',
        element: <RestFull/>
    },
]

export const service_nav = [
    {
        title: 'Cloudflare-turnstile',
        path: 'cloudflare-turnstile',
        element: <RestFull/>
    },
    {
        title: 'Kysely-postgres',
        path: 'kysely-postgres',
        element: <RestFull/>
    },
    {
        title: 'Stripe-webhooks',
        path: 'stripe-webhooks',
        element: <RestFull/>
    },
    {
        title: 'Upstash-redis-counter',
        path: 'upstash-redis-counter',
        element: <RestFull/>
    },
    {
        title: 'Upstash-redis-ratelimit',
        path: 'upstash-redis-ratelimit',
        element: <RestFull/>
    },
    {
        title: 'Send email smtp',
        path: 'send-email-smtp',
        element: <RestFull/>
    },
    {
        title: 'Send email resend',
        path: 'send-email-resend',
        element: <RestFull/>
    },
    {
        title: 'GitHub action deploy',
        path: 'github-action-deploy',
        element: <RestFull/>
    },
    {
        title: 'OpenAI',
        path: 'openai',
        element: <RestFull/>
    },

]


export const image_nav = [
    {
        title: 'OG Image with storage cdn',
        path: 'og-image-with-storage-cdn',
        element: <RestFull/>
    },
    {
        title: 'Hugging-face Image captioning',
        path: 'huggingface-image-captioning',
        element: <RestFull/>
    },
    {
        title: 'Tweet to image',
        path: 'tweet-to-image',
        element: <RestFull/>
    },
    {
        title: 'File upload storage',
        path: 'file-upload-storage',
        element: <RestFull/>
    },
    {
        title: 'Read storage',
        path: 'read-storage',
        element: <RestFull/>
    },
    {
        title: 'Get tshirt competition',
        path: 'get-tshirt-competition',
        element: <RestFull/>
    },
]

export const others_nav = [
    {
        title: 'Connect supabase',
        path: 'connect-supabase',
        element: <RestFull/>
    },
    {
        title: 'Location',
        path: 'location',
        element: <RestFull/>
    },
    {
        title: 'OAK server',
        path: 'oak-server',
        element: <RestFull/>
    },
    {
        title: 'OpenGraph',
        path: 'opengraph',
        element: <RestFull/>
    },
    {
        title: 'Postgres on the edge',
        path: 'postgres-on-the-edge',
        element: <RestFull/>
    },
    {
        title: 'Puppeteer',
        path: 'puppeteer',
        element: <RestFull/>
    },
    {
        title: 'Streams',
        path: 'streams',
        element: <RestFull/>
    },
]


