import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs'

const Blog = (props) => {
  const [blog, setBlog] = useState(props.allblogs)
  // console.log(props)
  // useEffect(() => {

  // }, [])

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

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allblogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allblogs.push(JSON.parse(myfile))
  }

  return {
    props: { allblogs }, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allblogs = await data.json()

//   return {
//     props: { allblogs }, // will be passed to the page component as props
//   }
// }

export default Blog