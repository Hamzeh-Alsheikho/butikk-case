import { Button, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <div>
        <p className={styles.text}>Welcome to online shopping</p>

        <Link passHref href="/butikk">
          <Button colorScheme="teal" size="md" margin={10} marginLeft={300}>
            See all products
          </Button>
        </Link>
        <Link passHref href="/categories">
          <Button colorScheme="teal" size="md">
            See all categories
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
