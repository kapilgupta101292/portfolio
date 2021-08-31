import BaseLayout from '@/components/layout/BaseLayout'
import { useRouter } from 'next/router';
import axios from 'axios';
const PortFolioDetail = ({portfolio}) => {
    debugger;
    const router = useRouter();
    return (
        <BaseLayout>
            <h2>{portfolio.title}</h2>
            <h3>{portfolio.body}</h3>
        </BaseLayout>
    )
}

PortFolioDetail.getInitialProps = async ({query}) => {
    let post = {};
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        post = res.data;
        console.log(post);
    } catch (error) {
        console.log(error);
    }
    return { portfolio: post };
}

export default PortFolioDetail;