import {useRouter} from "next/router";
import {
    Col,
    Image
} from "react-bootstrap";
import Link
    from "next/link";
import SearchProductBody
    from "../Components/SearchProduct/SearchProductBody";


function SearchProduct({data}){
    return(
      <SearchProductBody products={data} />
    );


}

export async function getServerSideProps(context) {
    const { q } = context.query;
    // Fetch data from external API
    const res = await fetch("http://localhost:8082/api/v1/products/search?q="+q);
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}

export default SearchProduct;