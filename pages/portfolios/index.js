import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/public/BasePage';
import { useGetData } from '@/actions';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

const Portfolios = () => {
   const { data: posts , error, loading } = useSWR('/api/v1/posts', fetcher); 
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