import BaseLayout from '@/components/layout/BaseLayout'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useGetData } from '@/actions';

const PortFolioDetail = () => {
    const router = useRouter();
    debugger;
    const {data: portfolio, error, loading } = 
    useGetData(router.query.id ? `api/v1/posts/${router.query.id}` : null);
    
    return (
        <BaseLayout>
        {
            loading && <p>Loading Data...</p>
        }
        {
            error && <div className="alert alert-danger">{error.message}</div>
        }
        
        {
            portfolio && 
            <>
            <h2>{portfolio.title}</h2>
            <h3>{portfolio.body}</h3>
            </>
        }
        </BaseLayout>
    )
}


export default PortFolioDetail;