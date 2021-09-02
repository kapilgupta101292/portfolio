import axios from 'axios';

export default async (req, res) => {
    let posts = [];
    try {
        const axiosRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = axiosRes.data;
        res.status(200).json(posts.slice(0,10));

    } catch (error) {
        console.log(error);
        res.status(error.status || 400).end('Api Error');
    }
}