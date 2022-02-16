import Link from "next/link";
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
export const getStaticPaths = async () => {
  const res = await fetch("https://frend-ecom-api.azurewebsites.net/category");
  const data = await res.json();

  const paths = data.map((catgo) => {
    return {
      params: { id: catgo.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://frend-ecom-api.azurewebsites.net/category/" + id
  );
  const data = await res.json();

  return {
    props: { catgo: data },
  };
};
const Detailes = ({ catgo }) => {
  return (
    <>
      <div>
        <h1 className="h1">{catgo.name}</h1>
        <h1 className="h1">
          {catgo.name} | Price {catgo.price} kr
        </h1>
        <p>
        Description:<br></br>
          <br></br>
          {catgo.description}
        </p>

        <Link passHref href="/cart">
          <Button colorScheme="teal" size="md" margin={8} marginLeft={20} onClick={}>
            Add to cart
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Detailes;
