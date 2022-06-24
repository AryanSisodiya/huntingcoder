import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page: {slug}</h1>
                <hr />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius excepturi totam soluta tempore fuga, non vero quaerat ea voluptatibus commodi, cupiditate esse tempora alias voluptates magni corporis necessitatibus. Deleniti illo eaque et laborum!
                </div>
            </main>
        </div>
    )
}

export default Slug