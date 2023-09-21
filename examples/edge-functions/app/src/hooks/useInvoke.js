import {supabase} from "../utils/supabaseClient.js";
import {useState} from "react";


const useInvoke = (req)=> {
    const [response, setResponse] = useState({})

    const invoke = async ()=> {
        setResponse({ loading: true })
        const { data, error } = await supabase.functions.invoke('browser-with-cors', {
            body: JSON.stringify(req),
        })
        if (error) alert(error)
        setResponse(data)
    }
    return [response, invoke]
}

export {useInvoke}