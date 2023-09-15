import {useEffect, useState} from "react";
import MyAuth from "./MyAuth.jsx";
import SignUp from './SignUp.jsx'

const SetPage = () => {

    const [page, setPage] = useState(false)
    const [value, setValue] = useState('')

    const changeHandler = () => {
        setPage(prevState => !page)
        if (page) setValue('sign up')
        if (!page) setValue('sign in')
        console.log(page)
    }


    return (
        <>
            <div>
                <p>{value}</p>
                {!page ? <SignUp/> : <MyAuth/>}

                <button onClick={changeHandler}>Change</button>
            </div>

        </>

    )

}

export default SetPage