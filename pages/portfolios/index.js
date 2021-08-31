import axios from 'axios';
import React from 'react';
import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/public/BasePage';

const Portfolios = ({posts}) => {

    console.log(posts);
    const renderPosts = () => {
        return posts.map(post => 
        <li key={post.id}>
            <Link href={`/portfolios/${post.id}`}>
            {post.title}
            </Link>
        </li>
        );
    }
    
    return (
        <BaseLayout>
        <BasePage>
        <ul>{renderPosts()}</ul>
        </BasePage>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () => {
    let posts = [];
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = res.data;

    } catch (error) {
        console.log(error);
    }
    return { posts: posts.slice(0, 10)};
}

export default Portfolios;