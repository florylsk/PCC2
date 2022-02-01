import {useRouter} from "next/router";
import CategoryContent
    from "../../../Components/Category/CategoryContent";


export default function ProductsCategorySubcategoryPage(props){

    const router=useRouter();

    console.log(router.query);
    return(

        <p>Test</p>


    );


}