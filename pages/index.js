import Layout from '../components/Layout'
import PostListing from '../components/PostListing'
import styles from '../styles/Common.module.css'
import { ReadPosts } from "../services/Posts.service";
import React from "react";

function Posts({ posts, error }) {
    return (
        <Layout>
            <h1>Recent Posts</h1>
            <form role="form">
                <div className="form-group">
                    <div className="input-group">
                        <input ng-model="postBody" className="form-control"/>
                        <button className={styles.button}>Add Post</button>
                    </div>
                </div>
            </form>
            {error && <div className={styles.error}>{error}</div>}
            {posts && <PostListing posts={posts}/>}
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        return await ReadPosts()
    } catch (error) {
        return {
            props: {
                error: error.message,
            }
        };
    }
}

export default Posts
