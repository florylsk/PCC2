import OffCanvasShoppingCart
    from "./OffCanvasShoppingCart";
import React
    from "react";

class ShoppingCart extends React.Component{
    constructor(props) {
        super(props);
        this.state={userItems:null,isLoading:true}
        this.user=props.user;
    }

    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/users/shopping-cart/by-id/"+this.user.id);
        }catch(error){
            errorHappened=true;
        }
        if(response != null){
            if(response.status!= 200){
                errorHappened=true;
            }
        }
        let products=null;
        if (!errorHappened){
            products = await response.json();
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            3000
        )
        if (errorHappened){
            this.setState({userItems:null,isLoading:true});
        }
        else{
            this.setState({userItems:products,isLoading:false});
        }
    }

    async checkProducts(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/users/shopping-cart/by-id/"+this.user.id);
        }catch(error){
            errorHappened=true;
        }
        if(response != null){
            if(response.status!= 200){
                errorHappened=true;
            }
        }
        let products=null;
        if (!errorHappened){
            products = await response.json();
        }
        if (errorHappened){
            this.setState({userItems:null,isLoading:true});
        }
        else{
            this.setState({userItems:products,isLoading:false});
        }


    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <OffCanvasShoppingCart products={this.state.userItems} isLoading={this.state.isLoading} />
        );
    }






}

export default ShoppingCart;