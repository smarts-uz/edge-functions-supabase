import React, {useEffect, useState} from 'react';
import {supabase} from "../supabaseClient.js";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [ postTitle, setPostTitle ] = useState()
    const [ postContent, setPostContent ] = useState()




    useEffect(() => {
        const supa = async function() {
            const {data} = await supabase.from('posts').select('title')
            setPosts(data)


        }
    }, [setPosts]);


    const addPost = async (e)=> {
        e.preventDefault()

        const { error } = await supabase
          .from('posts')
          .insert({ title: postTitle, content: postContent })
    }

    console.log(posts)
    return (
        <div>
            <div>
                <button onClick={async ()=>await supabase.auth.signOut()}>Sign out</button>
            </div>
            <h1>Posts</h1>
            <hr/>
            <ul>

            {/*{posts.map((post, index)=>{*/}
            {/*    return(*/}
            {/*        <li key={index}>*/}
            {/*            <span>{post.title}</span>*/}
            {/*            <p>{post.content}</p>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*})}*/}
            </ul>

            <h2>Add post</h2>

            <form onSubmit={addPost}>
                <div>
                    <input
                      type='text'
                      onChange={(e) => setPostTitle(e.target.value)}
                    placeholder='title'/>
                </div>
                <div>
                    <input
                      type='text'
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder='content'/>
                </div>
                <button type='submit' >Submit</button>
            </form>




            {posts}
        </div>
    );
};

export default Posts;