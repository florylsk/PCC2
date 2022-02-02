import {useRouter} from "next/router";
import CategoryContent
    from "../../../Components/Category/CategoryContent";
import SubCategoryContent
    from "../../../Components/Subcategory/SubCategoryContent";



export default function ProductsCategoryPage(props){

    const router=useRouter();

    const {category,subcategory} = router.query;
    if (subcategory==null){
        return(
            <CategoryContent categoryName={category}/>
        );
    }
    else{
        return(
          <SubCategoryContent mainCategory = {category} subCategory={subcategory}></SubCategoryContent>
        );
    }



}