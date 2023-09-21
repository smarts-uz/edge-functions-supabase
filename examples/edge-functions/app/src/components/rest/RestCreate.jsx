import React, {useState} from 'react';

const RestCreate = () => {
    const [taskName, setTaskName] = useState('')
    const [task, setTask] = useState('')


    return (
        <div>
            <h1 className='title'>Edge-function name: </h1>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    onChange={(e) => setTaskName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Task name</label>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="floatingTask"
                    placeholder="Password"
                    onChange={(e) => setTask(e.target.value)}
                    />
                    <label htmlFor="floatingTask">Task</label>
            </div>


            {/*<JSONInput*/}
            {/*    onChange={({ jsObject }) => setRequestJson(jsObject)}*/}
            {/*    placeholder={sampleObject}*/}
            {/*    locale={locale}*/}
            {/*    height="100"*/}
            {/*    width="100%"*/}
            {/*/>*/}



            <div>
                {/*<button className='btn btn-primary mt-5 mb-5' onClick={}>Send request</button>*/}
            </div>
            <h4 className='title'>Body</h4>
            {/*<pre className="bg-info">{JSON.stringify(, null, 2)}</pre>*/}

        </div>
    );
};

export default RestCreate;