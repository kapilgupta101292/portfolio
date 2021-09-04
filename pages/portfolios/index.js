import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/public/BasePage';
import { useGetData } from '@/actions';

const Portfolios = () => {
   const { data: posts , error, loading } = useGetData('/api/v1/posts'); 
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
            loading &&
            <p>Loading data</p>
        }
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