import React, {useEffect, useState} from 'react';
import {supabase} from "../supabaseClient.js";

const Posts = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        const supa = async function() {
            const {data} = await supabase.from('posts').select('title, content')
            // console.log(data)
            setPosts(data)
        }
    }, [posts]);

    console.log(posts)
    return (
        <div>
            <h1>Posts</h1>

        </div>
    );
};

export default Posts;