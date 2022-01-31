import {Container} from "react-bootstrap";
import NavBar
    from "../NavBar";
import Footer
    from "../Footer";
import React
    from "react";
import HowToBuyBody
    from "./HowToBuyBody";

class HowToBuyContent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container fluid style={{width:"100%"}}>
                <NavBar/>
                <HowToBuyBody/>
                <Footer />
            </Container>
        )
    }
}

export default HowToBuyContent;