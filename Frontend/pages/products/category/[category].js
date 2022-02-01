import {useRouter} from "next/router";
import CategoryContent
    from "../../../Components/Category/CategoryContent";



export default function ProductsCategoryPage(props){

    const router=useRouter();

    const {category} = router.query;
    return(

        <CategoryContent categoryName={category}/>


    );


}