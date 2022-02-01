import {
    Col,
    Container,
    Image,
    Spinner
} from "react-bootstrap";
import Link
    from "next/link";


export default function CategoryBody(props){
    return(
        <Container>
            {props.isLoading ?
                <Spinner animation="border" role="status">
                    <span>Fetching subcategories...</span>
                </Spinner>
                :
                props.subCategories?.map((subCategory) =>(
                    <div key={subCategory.id}>
                        <p >{subCategory.name}</p>
                        <Image src={"data:image/png;base64, "+subCategory.image} />
                    </div>


                ))
            }
        </Container>
    );
}

