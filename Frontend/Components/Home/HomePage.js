import NavBar
    from "../NavBar/NavBar";
import React
    from "react";
import {Container} from "react-bootstrap";
import HomeButtons
    from "./HomeButtons";
import HomeProducts
    from "./HomeProducts";
import {isLocalURL} from "next/dist/shared/lib/router/router";
import Footer
    from "../Footer";

import Head from "next/head"

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state={RecommendedProducts:props.recommendedProducts,InterestingProducts:props.interestingProducts,isLoading:false}
    }


    render() {

        return(
            <Container fluid>
                <Head>
                    <title>FOTech</title>
                </Head>
                <NavBar showMiddle={true} />
                <HomeButtons />
                <HomeProducts RecommendedProducts={this.state.RecommendedProducts} InterestingProducts={this.state.InterestingProducts} isLoading={this.state.isLoading} />
                <Footer />
            </Container>


        )
    }
}


export default HomePage;