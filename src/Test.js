import {useEffect , useState} from "react";

export default function Test(){

    const[postId,setPostId] = useState(1)
    const[post,setPost] = useState(false)


    /*useEffect(() =>{
        console.log('component render oldu!')
        
    }) */


    useEffect(() =>{
        console.log('component ilk yüklendiğinde çalışır')
        return() =>{
            console.log("component destroyed!")
        }
    },[])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    })



    return(
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <hr/>
            <button onClick={() => setPostId(postId => postId + 1)}>Sonraki konu</button>
            <hr/>
            test componenti 
        </div>

    )
}