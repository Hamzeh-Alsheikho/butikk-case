import exp from "constants";
import React from "react";
import Footer from "../../comps/Footer";
import Navbar from "../../comps/Navbar";
import styles from "../../styles/Products.module.css"
import { ChakraProvider } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  Container,
  flexbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";

export const getStaticProps = async ()=>{
  const res = await fetch('https://frend-ecom-api.azurewebsites.net/product');
  const data = await res.json();

  return{
    props: {prods: data}
  }
}


const Products = ({prods}) => {
  return (
    <div>
      <h5 className="h1">All Products</h5>
      {prods.map(product =>(
        <Link href={"/butikk/" +product.id} key={product.id}>
          <a className={styles.single}>
                
          <h3>{product.name}</h3>  

          </a>
        </Link>
      ))}
    </div>
  );
};

export default Products;
