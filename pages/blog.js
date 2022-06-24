import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1>Latest Blogs</h1> */}
        <div>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={styles.blogItemsh3}>How to learn Js in 2022</h3>
          </Link>
          <p>js is the language desinged for the frontend logic in the beginning and currently also used in the backend</p>
        </div>
        <div>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={styles.blogItemsh3}>How to learn Js in 2022</h3>
          </Link>
          <p>js is the language desinged for the frontend logic in the beginning and currently also used in the backend</p>
        </div>
        <div>
          <Link href={'/blogpost/learn-javascript'}>
            <h3 className={styles.blogItemsh3}>How to learn Js in 2022</h3>
          </Link>
          <p>js is the language desinged for the frontend logic in the beginning and currently also used in the backend</p>
        </div>
      </main>
    </div>
  )
}

export default Blog