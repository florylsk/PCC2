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
                    <span className="visually-hidden">Fetching products...</span>
                </Spinner>
                :
                props.categoryProducts?.map((product) =>(
                    <p key={product.id}>{product.name}</p>
                ))
            }
        </Container>
    );
}

