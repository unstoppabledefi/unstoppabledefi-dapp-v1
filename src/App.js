import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import MainCover from './components/MainCover';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

const sections = [
    { title: 'About', url: '#about' },
    { title: 'Project', url: '#projects' },
    { title: 'Contact', url: '#' },
];

const mainCover = {
    title: 'What is UnstoppableDefi',
    description:
        "UnstoppableDefi is a side project of Crust Network where we demonstrate how to use Crust Network to truly decentralize web app. Defi is a sector that critically needs to be decentralized because it offers markets where people can exchange/lend/borrow tokens on blockchains, stopping the Defi will cause many bad consequences. Apps on UnstoppableDefi are hosted on Crust Network - a decentralized pinning service of IPFS, even if UnstoppableDefi.org is dead (it's a centralized domain so possible), users can always access the apps using its CID",
    image: 'https://www.bw.com/static/img/defi-banner.d25da81.png',
    imgText: 'What is UnstoppableDefi',
};

const defiProjects = [
    {
        name: 'Uniswap',
        shortDesc: 'Biggest AMM on Ethereum',
        description:
            'Uniswap understands the importance on decentralization, the team designed the app in a way so that it could be hosted on IPFS. In this case, the integration to Crust Network is done easily via Crust Github Action.',
        image: './static/images/cards/uniswap.jpg',
        imageText: 'Image Text',
        dappUrl: 'https://uniswap.unstoppabledefi.org',
        originalUrl: 'https://app.uniswap.org',
        cid: 'QmNfKpS2WZrpL6JNRfNQsTJwzg7E2fwud69eX5uc4KLNsd',
    },
    {
        name: 'Pancakeswap',
        shortDesc: 'Biggest AMM on Binance Smart Chain',
        description:
            'Pancakeswap can be hosted on Crust Network after modifying its Router and the paths of images on the app.',
        image: './static/images/cards/pancakeswap.png',
        imageText: 'Image Text',
        dappUrl: 'https://pancakeswap.unstoppabledefi.org',
        originalUrl: 'https://pancakeswap.finance',
        cid: 'QmVpim8nqj9YNnG9sKZDU9BZHQoRufHqf1qE9Cxe6vWAgj',
    },
    {
        name: 'Balancer V1',
        shortDesc: 'The old version of Balancer Finance',
        description:
            "Already decentralized as Uniswap, it's easy to integrate Balancer V1 on Crust Network.",
        image: './static/images/cards/balancerv1.png',
        imageText: 'Image Text',
        dappUrl: 'https://balancerone.unstoppabledefi.org',
        originalUrl: '',
        cid: 'Qmb11S2F89PojhzmL8Yej3ghCK52PAeadQCbsWYrPZFJix',
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
                                <ProjectCard
                                    key={project.name}
                                    project={project}
                                />
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
