import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import defaultThumb from '../static/tutorial.jpg'
import styles from '../styles/BlogsContainer.module.css'
import Link from 'next/link';

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // const styles = {
    //     wrapper: "mt-4",
    //     content: "max-w-[1300px] mx-auto",
    //     blogDetail: "",
    //     blogDetailh1: "",
    //     thumbnail: "w-[200px] mr-4",
    // }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.blogs}>
                    {blogs.map(blog => {
                        return <div className={styles.blog} key={0}>
                            <div className={styles.thumbnail}>
                                <Image
                                    src={defaultThumb}
                                    alt={blog.title}
                                    height={216}
                                    width={384}
                                ></Image>
                            </div>
                            <div className={styles.blogDetail}>
                                <h1 className="text-[25px] font-semibold hover:text-blue-700">
                                    <Link href={`/${blog.slug}`}>{blog.title}</Link>
                                </h1>
                                <p className={styles.blogDetailp}>{blog.content.slice(0, 120)}</p>
                                <p className='absolute bottom-[10px]'>Published by <span className={styles.author}>{blog.publisher}</span></p>
                                <p className='absolute right-0'>{blog.readTime}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogsContainer;

