import {useInvoke} from "../../hooks/useInvoke.js";

const Select = () => {
    const [invoke, setInvoke] = useInvoke({ data:{name:''}, func_name:'select-from-table-with-auth-rls' })

    return (
        <div className='card-body'>
            <h5 className='card-title'>Select users</h5>
            <div>
                <button className='btn btn-primary mt-5 mb-5' onClick={setInvoke}>Send request</button>
            </div>
            <h4 className='title'>Body</h4>
            <pre className="bg-info">{JSON.stringify(invoke, null, 2)}</pre>

        </div>
    );
};

export default Select;