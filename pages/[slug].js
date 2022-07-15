import React, { useEffect, useState } from 'react';

const Post = (post) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {post.title}
        </div>
    );
};

export default Post;

// This function gets called at build time
export async function getStaticPaths(blogs) {
    // Call an external API endpoint to get posts



    // const res = await fetch('blogs.json')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = blogs.map((post) => ({
        params: { slug: post.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params, blogs }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    // const res = await fetch(`https://.../posts/${params.id}`)
    // const post = await res.json()

    // const res = await fetch('../public/blogs.json')
    // const posts = await res.json()

    const post = blogs.find(p => params == p.slug)

    // Pass post data to the page via props
    return { props: { post } }
}