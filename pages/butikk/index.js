import exp from "constants";
import React from "react";
import Footer from "../../comps/Footer";
import Navbar from "../../comps/Navbar";
import styles from "../../styles/Products.module.css";
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

export const getStaticProps = async () => {
  const res = await fetch("https://frend-ecom-api.azurewebsites.net/product");
  const cat = await fetch("https://frend-ecom-api.azurewebsites.net/category");
  const data = await res.json();
  const catData = await cat.json();

  return {
    props: { prods: data, catData: catData },
  };
};

const Products = ({ prods, catData }) => {
  const findName = (data, id) => {
    return data.find((element) => element.id === id);
  };
  return (
    <>
      <div className={styles.main}>
        <h1 className="h1">All Products</h1>

        {prods.map((product) => (
          <Link href={"/butikk/" + product.id} key={product.id}>
            <a className={styles.single}>
            <p>Category: 
                {product.categoryId.map((id) => {
                  return findName(catData, id).name;
                })}
              </p>
              <h3>Name: {product.name}</h3>
              <h3>Price: {product.price} Kr</h3>
              
              {product.variants.map((v) => {
                return (
                  <div>
                   <br></br> <img src={v.image } height={150} width={120} /><br></br>
                    <h1>Stock: {v.stock}</h1>
                    <Button color={"green"}>See more</Button>
                    <br></br>
                  </div>
                );
              })}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
