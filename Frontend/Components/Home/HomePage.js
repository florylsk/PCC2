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
        this.state={products:[],isLoading:true}
    }

    async componentDidMount(){
        let response=null;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/");
        }catch(error){
            this.setState({products:null,isLoading:true});
            return;
        }

        const body = await response.json();
        let products=[]
        body.forEach(element =>{
            products.push(element)
        });
        this.setState({products:products,isLoading:false});
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            10000
        )

    }

    async checkProducts(){
        let response=null;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/");
        }catch(error){
            this.setState({products:null,isLoading:true});
            return;
        }
        const body = await response.json();
        let products=[]
        body.forEach(element =>{
            products.push(element)
        });
        this.setState({products:products,isLoading:false});


    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

        return(
            <Container>
                <NavBar />
                <HomeButtons />
                <HomeProducts products={this.state.products} isLoading={this.state.isLoading} />
            </Container>


        )
    }
}


export default HomePage;