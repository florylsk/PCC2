import {Container} from "react-bootstrap";
import HomePage
    from "../Components/Home/HomePage";

import React
    from "react";


export default function Home({recommendedProducts, interestingProducts}) {
  return (
      <HomePage recommendedProducts={recommendedProducts} interestingProducts={interestingProducts} />
  );
}
export async function getServerSideProps(context) {
    const [recommendedProductsRes, interestingProductsRes] = await Promise.all([
        fetch("http://localhost:8082/api/v1/products?type=recommended"),
        fetch("http://localhost:8082/api/v1/products?type=interesting")
    ]);
    const [recommendedProducts, interestingProducts] = await Promise.all([
        recommendedProductsRes.json(),
        interestingProductsRes.json()
    ]);
    return { props: { recommendedProducts, interestingProducts } };
}