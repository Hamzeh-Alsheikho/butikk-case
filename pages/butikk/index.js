import exp from "constants";
import React from "react";
import Footer from "../../comps/Footer";
import Navbar from "../../comps/Navbar";
import styles from "../../styles/Products.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
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
  Checkbox,
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

function Products({ prods, catData }) {
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const findName = (data, id) => {
    return data.find((element) => element.id === id).name;
  };

  React.useEffect(() => {
    if (checkedItems.length === 0) {
      //show all products if there is no checkedItems
      setFilteredProducts([...prods]);
    } else {
      const filteredArr = [];
      //get category name from the product's catagory id's, and check if the cataegory name is in checkedItems
      prods.forEach((product) => {
        product.categoryId.forEach((id) => {
          if (checkedItems.includes(findName(catData, id))) {
            filteredArr.push(product);
          }
        });
      });
      setFilteredProducts([...filteredArr]);
    }
  }, [checkedItems, catData, prods]);

  return (
    <>
      <div className={styles.main}>
        <div>
          <h1 className="h1">All catetogries</h1>
          {catData.map((catData) => (
            <Checkbox
              key={catData.id}
              isChecked={checkedItems.includes(catData.name)}
              onChange={() => {
                //handle checkbox check
                if (!checkedItems.includes(catData.name)) {
                  setCheckedItems((prev) => [...prev, catData.name]);
                } else {
                  //handle checkbox unchecking
                  const index = checkedItems.indexOf(catData.name);
                  if (index > -1) {
                    const temp = checkedItems;
                    temp.splice(index, 1);
                    setCheckedItems([...temp]);
                  }
                }
              }}
            >
              <a className={styles.single}>
                <h3>{catData.name} </h3>
              </a>
            </Checkbox>
          ))}
        </div>
        {checkedItems.map((item) => {
          return <p key={item}>{item}</p>;
        })}

        <h1 className="h1">All Products</h1>

        {filteredProducts.map((product) => (
          <Link href={"/butikk/" + product.id} key={product.id}>
            <a className={styles.single}>
              <p>
                Category:
                {product.categoryId.map((id) => {
                  return findName(catData, id);
                })}
              </p>

              <h3>Name: {product.name}</h3>

              {product.variants.map((v) => {
                return (
                  <div key={v.name}>
                    <br></br> <img src={v.image} height={150} width={120} />
                    <br></br>
                    <h1>Stock: {v.stock}</h1>
                    <h3>Price: {product.price} Kr</h3>
                    <Button colorScheme="blue">See more</Button>
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
}

export default Products;
