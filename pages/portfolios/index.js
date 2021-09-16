import BaseLayout from "@/components/layout/BaseLayout";
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import PortfolioApi from "../../lib/api/portfolios";

import { Row } from "reactstrap";
import PortfolioCard from "@/components/PortfolioCard";

const fetcher = (url) => fetch(url).then(res => res.json());

const Portfolios = ({portfolios}) => {
//    const {  , error, loading } = useSWR('/api/v1/posts', fetcher); 
   debugger;
    const renderPortfolios = (portfolios) => {
        return portfolios.map(portfolio => 
        <li key={portfolio._id} style={{'fontSize': '20px'}}>
            <Link as={`/portfolios/${post.id}`} href={`/portfolios/${portfolio._id}`}>
                <a>
            {portfolio.title}
            </a>
            </Link>
        </li>
        );
    }
    
    return (
        <BaseLayout>
            <BasePage className="portfolio-page">
            <Row>
                {portfolios.map(portfolio =>
                    <PortfolioCard portfolio={portfolio}/>
                )}
            </Row>


        <ul>{renderPortfolios(portfolios)}</ul>
        </BasePage>
        </BaseLayout>
    )
}

// This function is called during the build time
// Improved performance of page,
// it will create static page with dynamic data
export async function getStaticProps() {
    //const json = await new PortfolioApi().getAll();
    //const portfolios = json.data;
    return {
        props: { portfolios:[]}
    }
}

export default Portfolios;