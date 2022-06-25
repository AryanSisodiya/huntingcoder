import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myblog);

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

export async function getServerSideProps(context) {
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    let myblog = await data.json()

    return {
        props: { myblog }, // will be passed to the page component as props
    }
}

export default Slug