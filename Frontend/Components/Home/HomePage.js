import NavBar
    from "../NavBar";
import React
    from "react";
import {Container} from "react-bootstrap";
import HomeButtons
    from "./HomeButtons";
import HomeProducts
    from "./HomeProducts";

class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Container>
                <NavBar />
                <HomeButtons />
                <HomeProducts />
            </Container>


        )
    }
}


export default HomePage;