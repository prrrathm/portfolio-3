import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Landing } from "../components/Landing";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About />
    </>
  );
};

export default Home;
