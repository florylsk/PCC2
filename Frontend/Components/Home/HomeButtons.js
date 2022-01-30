import {
    Button,
    Col,
    Container,
    Row
} from "react-bootstrap";
import {
    BsFillTagFill,
    BsGift
} from "react-icons/bs"
import {
    MdKeyboardArrowRight,
    MdOutlineRecycling
} from "react-icons/md"
import {RiComputerLine} from "react-icons/ri"

export default function HomeButtons(props){





    return(
        <Container style={{float:"left",marginTop:20}}>
            <Row>
                <Col md={{ span: 2, offset: 0 }}>
                    <Button className="homebutton" style={{backgroundColor:"transparent",color:"#8888a7",borderColor:"#cccccc",padding:"1rem",fontWeight:700,width:270} }>
                        <BsFillTagFill size="30" color="#ff6000" style={{marginRight:50}} />
                        Offers
                        <MdKeyboardArrowRight size="25" style={{marginLeft:50}}/>
                    </Button>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <Button className="homebutton" style={{backgroundColor:"transparent",color:"#8888a7",borderColor:"#cccccc",padding:"1rem",fontWeight:700,width:270} }>
                        <RiComputerLine size="30" color="#ff6000" style={{marginRight:30}} />
                        Design your PC
                        <MdKeyboardArrowRight size="25" style={{marginLeft:30}}/>
                    </Button>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <Button className="homebutton" style={{backgroundColor:"transparent",color:"#8888a7",borderColor:"#cccccc",padding:"1rem",fontWeight:700,width:270} }>
                        <BsGift size="30" color="#ff6000" style={{marginRight:30}} />
                        Promotions
                        <MdKeyboardArrowRight size="25" style={{marginLeft:30}}/>
                    </Button>
                </Col>
                <Col md={{ span: 2, offset: 1 }}>
                    <Button className="homebutton" style={{backgroundColor:"transparent",color:"#8888a7",borderColor:"#cccccc",padding:"1rem",fontWeight:700,width:270} }>
                        <MdOutlineRecycling size="30" color="#ff6000" style={{marginRight:50}} />
                        Outlet
                        <MdKeyboardArrowRight size="25" style={{marginLeft:50}}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );

}