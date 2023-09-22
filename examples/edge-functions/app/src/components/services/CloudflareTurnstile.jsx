import React, {useCallback, useState} from 'react';

const CloudflareTurnstile = () => {
    // const [formState, setFormState] = useState('')
    // const [errorMsg, setErrorMsg] = useState('')









    
    return (
        <div>
            <form  >
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <div className="cf-turnstile" data-sitekey="0x4AAAAAAAKAPPzuubC-nkAcZw_4AEqqfNI"></div>
                <div className="cf-turnstile" data-sitekey="0x4AAAAAAAKAPMS5kxPyJplL" data-callback="javascriptCallback"></div>
                <button type="submit" value="Submit">Log in</button>
            </form>
        </div>
    )
}

export default CloudflareTurnstile;