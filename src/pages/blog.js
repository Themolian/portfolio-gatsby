import * as React from "react"

const BlogPage = () => {
    return (
        <main className="blog">
            <div className="main-inner">
                <h1>Hello! And welcome to my blog</h1>
                <p>This is the body of the blog</p>
            </div>
        </main>
    )
}

export default BlogPage;

export const Head = () => <title>Blog Page</title>