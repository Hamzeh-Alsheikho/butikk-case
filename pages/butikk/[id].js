import Link from "next/link";
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
export const getStaticPaths = async () =>{
    const res = await fetch('https://frend-ecom-api.azurewebsites.net/product')
    const data = await res.json();

    const paths = data.map(prod =>{
        return{
            params: {id : prod.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch ('https://frend-ecom-api.azurewebsites.net/product/' +id);
    const data = await res.json();

    return{
        props :{prod: data},
    }
}
const Detailes = ({prod}) => {
    return ( 
        <div>
        <h1>{prod.name}</h1>
        <p>{prod.id}</p>
        <p>{prod.description}</p>

        <Link passHref href="/cart">
          <Button colorScheme="teal" size="md" margin={8} marginLeft={20}>
            Add to cart
          </Button>
        </Link>

 

  
        </div>
     );
}
 
export default Detailes;