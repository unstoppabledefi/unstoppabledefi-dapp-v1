import React from "react";
import { HashRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import MainCover from "./components/MainCover";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const sections = [
  { title: "About", url: "#about" },
  { title: "Project", url: "#projects" },
  { title: "Contact", url: "#" },
];

const mainCover = {
  title: "What is UnstoppableDefi",
  description:
    "UnstoppableDefi is a side project of Crust Network where we demonstrate how to use Crust Network to truly decentralize web app. Defi is a sector that critically needs to be decentralized because it offers markets where people can exchange/lend/borrow tokens on blockchains, stopping the Defi will cause many bad consequences. Apps on UnstoppableDefi are hosted on Crust Network - a decentralized pinning service of IPFS, even if UnstoppableDefi.org is dead (it's a centralized domain so possible), users can always access the apps using its CID",
  image: "https://www.bw.com/static/img/defi-banner.d25da81.png",
  imgText: "What is UnstoppableDefi",
};

const defiProjects = [
  {
    name: "Uniswap",
    description: "Biggest AMM on Ethereum",
    image: "./static/images/cards/uniswap.jpg",
    imageText: "Image Text",
    dappUrl: "https://uniswap.unstoppabledefi.org",
    originalUrl: "https://app.uniswap.org",
    cid: "QmNfKpS2WZrpL6JNRfNQsTJwzg7E2fwud69eX5uc4KLNsd",
  },
  {
    name: "Pancakeswap",
    description: "Biggest AMM on Binance Smart Chain",
    image: "./static/images/cards/pancakeswap.png",
    imageText: "Image Text",
    dappUrl: "https://pancakeswap.unstoppabledefi.org",
    originalUrl: "https://pancakeswap.finance",
    cid: "QmVpim8nqj9YNnG9sKZDU9BZHQoRufHqf1qE9Cxe6vWAgj",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="UNSTOPPABLE DEFI" sections={sections} />
          <main>
            <MainCover post={mainCover} id="about" />
            <Grid container spacing={3} id="projects">
              {defiProjects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </Grid>
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
