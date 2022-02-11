import {
    Form,
    FormControl
} from "react-bootstrap";
import React
    from "react";
import {useRouter} from "next/router"


export default function NavBarSearch(props){
    const router = useRouter();
    const handleSearch=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let query= data.get('query');
        router.push("/search?q="+query);
    }

    return(

        <Form onSubmit={handleSearch} className="d-flex searchForm" style={{marginRight:50,marginTop:10}}>

            <FormControl
                type="search"
                placeholder="Search product..."
                className="me-2"
                aria-label="Search"
                name="query"
                style={{width:650,height:48}}
            />
        </Form>
    );



}