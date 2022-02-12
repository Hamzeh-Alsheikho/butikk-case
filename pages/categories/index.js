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
  const res = await fetch('https://frend-ecom-api.azurewebsites.net/category');
  const data = await res.json();

  return{

    props: {category: data}
  }
}


const Catetogries = ({category}) => {
  return (
    <>
    <div>
      <h5 className="h1">All catetogries</h5>
      {category.map(categ =>(
        <Link href={"/butikk/" +categ.id} key={categ.id}>
          <a className={styles.single}>
                
          <h3>{categ.name}</h3>  
        </a>
        </Link>
      ))}
    </div>
    </>
  );
  
};

export default Catetogries;
