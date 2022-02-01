import {
    Button,
    Col,
    Container,
    Image,
    Row,
    Spinner
} from "react-bootstrap";
import Link
    from "next/link";


export default function CategoryBody(props){
    return<Container>
        <Row>
            <p className="fw-bold" style={{color:"#333333",fontWeight:700,fontSize:30}}>{props.isLoading ? <Spinner animation="border" role="status" /> : (props.mainCategory?.charAt(0).toUpperCase()+props.mainCategory?.slice(1)) }</p>
        </Row>
        <Row className="justify-content-center">


            {props.isLoading ?
                <Spinner animation="border" role="status">
                    <span>Fetching subcategories...</span>
                </Spinner>
                :
                props.subCategories?.map((subCategory) =><Col xs={5} key={subCategory.id}>
                    <Link href={"/products/subcategory/"+subCategory.name}>
                        <a>
                            <Image width="500" height="320" src={"data:image/png;base64, "+subCategory.image} />
                        </a>
                    </Link>
                    <p className="text-center" style={{color:"#000000",fontSize:16,fontWeight:"bold",marginTop:10}} >{subCategory.name}</p>
                    <div style={{justifyContent:"center",display:"flex",marginTop:-10,marginBottom:50}}>
                        <Link href={"/products/subcategory/"+subCategory.name}>
                            <a>
                                <Button style={{color:"#333",width:130,height:40,backgroundColor:"#fff",borderColor:"#ccc",fontSize:14}}>
                                    <p className="d-inline">Check more!</p>
                                </Button>
                            </a>
                        </Link>

                    </div>

                </Col>)
            }
        </Row>




    </Container>;
}

