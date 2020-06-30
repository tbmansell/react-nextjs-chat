import axios from "axios";

async function ReadPosts() {
    const url = process.env.POST_SERVICE_DOMAIN + '/api/posts'
    const response = await axios.get(url)

    if (response.status !== 200) {
        throw Error(`Failed to fetch posts ${response.status}: ${response.statusText}`)
    }

    return {
        props: {
            posts: response.data,
        }
    }
}

async function CreatePost() {

}

export {
    ReadPosts,
    CreatePost,
}
