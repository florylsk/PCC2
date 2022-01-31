import {useRouter} from "next/router";
import ProductContent
    from "../../Components/Products/ProductContent";


export default function ProductPage(props){

    const router=useRouter();

    const {productID} = router.query;
    return(
            <ProductContent productID = {productID} />


    );
}