import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then(a => {
            return a.json()
        }).then(data => {
            setBlog(data);
        })
    }, [router.isReady])


    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page: {blog && blog.title}</h1>
                <h2 className={styles.author}>(Written by: {blog && blog.author})</h2>
                <hr />
                <div>
                    {blog && blog.content}
                </div>
            </main>
        </div>
    )
}

export default Slug