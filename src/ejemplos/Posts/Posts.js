import { useFetch } from "../../hooks/useFetch"

export const Posts = () => {

    const {data: posts} = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <ul>
            <h2>Posts</h2>
            <hr/>

            {
                posts && 
                posts.map((post) => (
                    <li>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}