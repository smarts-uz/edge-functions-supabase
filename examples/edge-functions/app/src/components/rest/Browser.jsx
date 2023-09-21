import React, {useState} from 'react';
import {useInvoke} from "../../hooks/useInvoke.js";

const Browser = () => {
    const [change, setChange] = useState('')
    const [invoke, setInvoke] = useInvoke({ name: change })

    return (
        <div>
            <h1 className='title'>Edge-function name: </h1>
            <div>
                <input className='form-control' type="text" onChange={(e) => setChange(e.target.value)}/>
            </div>
            <div>
                <button className='btn btn-primary mt-5 mb-5' onClick={setInvoke}>Send request</button>
            </div>
            <h4 className='title'>Body</h4>
            <pre className="bg-info">{JSON.stringify(invoke, null, 2)}</pre>

        </div>
    );
};

export default Browser;