import { useRouter } from 'next/router';
import Head from 'next/dist/shared/lib/head';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Post = () => {

    const [loading, setLoading] = useState(true)


    const posts = [{
        "slug": "post-1",
        "title": "Nothing Phone 1 review: something else",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/if6JPZ5oQVR4ySPgMSIEj-RPv1A=/0x0:2040x1360/712x401/filters:focal(784x527:1110x853):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71120721/ajohnson_220708_5332_0008.0.jpg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vel mi quis finibus. Fusce at interdum ante. Cras vel augue at neque commodo tempus nec consequat purus. Ut a neque sed elit consequat hendrerit. Nullam et urna eu lorem interdum egestas. Donec tincidunt quam nulla. Maecenas vel lorem quam. Suspendisse at magna faucibus enim pretium rutrum eget non orci. Sed elit dolor, sollicitudin quis rutrum vitae, efficitur vel elit. Maecenas aliquet lacus at sapien vestibulum, tincidunt elementum eros bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas facilisis mollis ex ut gravida. Morbi vitae tellus mattis nisl iaculis volutpat ac eget ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur diam mi, tristique semper massa eu, tincidunt commodo arcu. Nulla ac velit gravida, euismod arcu non, rutrum nisi. Morbi congue non justo at tristique.",
        "readTime": "5 min",
        "published": "",
        "publisher": "Rokan Uddin",
        "tags": ""
    },
    {
        "slug": "post-2",
        "title": "Its ChromeOS now, not Chrome OS",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/n4IHQZlKDOAtWAc9XJC5Xzn1Pho=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71119849/acastro_180416_1777_chrome_0001.0.jpg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vel mi quis finibus. Fusce at interdum ante. Cras vel augue at neque commodo tempus nec consequat purus. Ut a neque sed elit consequat hendrerit. Nullam et urna eu lorem interdum egestas. Donec tincidunt quam nulla. Maecenas vel lorem quam. Suspendisse at magna faucibus enim pretium rutrum eget non orci. Sed elit dolor, sollicitudin quis rutrum vitae, efficitur vel elit. Maecenas aliquet lacus at sapien vestibulum, tincidunt elementum eros bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas facilisis mollis ex ut gravida. Morbi vitae tellus mattis nisl iaculis volutpat ac eget ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur diam mi, tristique semper massa eu, tincidunt commodo arcu. Nulla ac velit gravida, euismod arcu non, rutrum nisi. Morbi congue non justo at tristique.",
        "readTime": "5 min",
        "published": "",
        "publisher": "Rokan Uddin",
        "tags": ""
    },
    {
        "slug": "post-3",
        "title": "Netflix is partnering with Microsoft for its new ad-supported tier",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/bKnq2Mq2C1Vt3EFTa3h5TFYkzsk=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71104667/acastro_211025_1777_netflix_0001.0.jpeg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vel mi quis finibus. Fusce at interdum ante. Cras vel augue at neque commodo tempus nec consequat purus. Ut a neque sed elit consequat hendrerit. Nullam et urna eu lorem interdum egestas. Donec tincidunt quam nulla. Maecenas vel lorem quam. Suspendisse at magna faucibus enim pretium rutrum eget non orci. Sed elit dolor, sollicitudin quis rutrum vitae, efficitur vel elit. Maecenas aliquet lacus at sapien vestibulum, tincidunt elementum eros bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas facilisis mollis ex ut gravida. Morbi vitae tellus mattis nisl iaculis volutpat ac eget ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur diam mi, tristique semper massa eu, tincidunt commodo arcu. Nulla ac velit gravida, euismod arcu non, rutrum nisi. Morbi congue non justo at tristique.",
        "readTime": "5 min",
        "published": "",
        "publisher": "Rokan Uddin",
        "tags": ""
    },
    {
        "slug": "post-4",
        "title": "Twitter is back after a major outage",
        "thumbnail": "https://cdn.vox-cdn.com/thumbor/7HntfvzDeP6ysXaehA9rSDsbES4=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71114270/acastro_180827_1777_0004.0.jpg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum vel mi quis finibus. Fusce at interdum ante. Cras vel augue at neque commodo tempus nec consequat purus. Ut a neque sed elit consequat hendrerit. Nullam et urna eu lorem interdum egestas. Donec tincidunt quam nulla. Maecenas vel lorem quam. Suspendisse at magna faucibus enim pretium rutrum eget non orci. Sed elit dolor, sollicitudin quis rutrum vitae, efficitur vel elit. Maecenas aliquet lacus at sapien vestibulum, tincidunt elementum eros bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas facilisis mollis ex ut gravida. Morbi vitae tellus mattis nisl iaculis volutpat ac eget ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur diam mi, tristique semper massa eu, tincidunt commodo arcu. Nulla ac velit gravida, euismod arcu non, rutrum nisi. Morbi congue non justo at tristique.",
        "readTime": "5 min",
        "published": "",
        "publisher": "Rokan Uddin",
        "tags": ""
    }]



    const router = useRouter();
    const { slug } = router.query;
    // const [post, setPost] = useState({})
    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    //         .then(res => res.json())
    //         .then(data => setPost(data))
    // }, [])


    const post = () => {
        posts.find(p => p.slug == slug)
        setLoading(false)
    }

    const myTimeout = setTimeout(post, 10000);

    // setPost(pp)

    // const pp = async () => {
    //     const post = await posts.find(p => p.slug == slug)
    //     setLoading(false)
    //     setPost(post)
    // }


    console.log(post)


    return (
        <div>
            {
                loading ?
                    <div className='h-[50vh] flex items-center justify-center'>
                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div> :
                    <div className="max-w-[800px] mx-auto">
                        <h1 className='mt-10 text-[30px] font-bold text-center'>{post.title}</h1>
                        <p className='text-center mb-4'>{post.publisher} - {post.readTime}</p>
                        <div className="flex justify-center">
                            {/* <Image
                        src={post.thumbnail}
                        alt="hero"
                        height={270}
                        width={480}
                    /> */}
                        </div>
                        <p className='mt-4'>{post.content}</p>
                    </div>

            }
        </div>
    );
};



export default Post;