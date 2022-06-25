import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

const Blog = () => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then(a => {
      return a.json()
    }).then(data => {
      setBlog(data);
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1>Latest Blogs</h1> */}
        {blog.map(blogitem => {
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogItemsh3}>{blogitem.title}</h3>
            </Link>
            <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <span className={styles.btn}>Read More</span></Link>
          </div>
        })}
      </main>
    </div>
  )
}

export default Blog