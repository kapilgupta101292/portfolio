import { useEffect, useState } from 'react';
import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/public/BasePage';

const Portfolios = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const data = await res.json();
            debugger;
            setPosts(data);
        }
        getPosts();
    }, []);

    
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

export default Portfolios;