import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c }
    }

    const [blog, setBlog] = useState(props.myblog);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page: {blog && blog.title}</h1>
                <h2 className={styles.author}>(Written by: {blog && blog.author})</h2>
                <hr />
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
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

// export async function getStaticProps(context) {
//     const {slug} = context.params;

//     let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')


//     return {
//         props: { myblog: JSON.parse(myblog) }, // will be passed to the page component as props
//     }
// }

// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { slug: "how-to-learn-flask" } },
//         { params: { slug: "how-to-learn-javascript" } },
//         { params: { slug: "how-to-learn-nextjs" } }
//       ],
//       fallback: true // false or 'blocking'
//     };
//   }

export default Slug