import {
    Col,
    Container,
    Image,
    Row
} from "react-bootstrap";



export default function HomeProducts(props){



    return(
      <Container style={{marginTop:170,width:1200}}>
            <Row>
                <h3 style={{fontWeight:300}}><span className=" d-inline" style={{fontWeight:700,color:"#444"}}>Most Relevant </span> Categories</h3>
                <Col>
                    <Image src="/images/familia-portatiles.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>Laptops</p>
                </Col>
                <Col>
                    <img src="/images/familia-pccom.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>PccCom</p>
                </Col>
                <Col>
                    <Image src="/images/familia-altavoces.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>Speakers</p>
                </Col>
                <Col>
                    <Image src="/images/familia-perifericos.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:30,color:"#444"}}>Peripherals</p>
                </Col>
                <Col>
                    <Image src="/images/familia-tablets.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:55,color:"#444"}}>Tables</p>
                </Col>
                <Col>
                    <Image src="/images/familia-tv.jpg" />
                    <p className="fw-bold" style={{marginTop:20,marginLeft:60,color:"#444"}}>TVs</p>
                </Col>
            </Row>
      </Container>
    );


}