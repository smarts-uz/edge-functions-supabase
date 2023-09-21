import React, {useState} from 'react';



const Browser = () => {
    const [change, setChange] = useState('')



    return (
        <div>
            <h1 className='title'>Edge-function name: </h1>
            <div>
                <input className='form-control' type="text" onChange={(e) => setChange(e.target.value)}/>
            </div>
            <div>
                {/*<button className='btn btn-primary mt-5 mb-5' onClick={}>Send request</button>*/}
            </div>
            <h4 className='title'>Body</h4>
            {/*<pre className="bg-info">{JSON.stringify(, null, 2)}</pre>*/}

        </div>
    );
};

export default Browser;