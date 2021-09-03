import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/public/BasePage';
import { useGetPosts } from '@/actions';

const Portfolios = () => {
   const { posts, error } = useGetPosts(); 
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
        {
            posts && 
        <ul>{renderPosts()}</ul>

}
{
    error &&
    <div className="alert alert-danger">{error.message}</div>
}
        </BasePage>
        </BaseLayout>
    )
}

export default Portfolios;