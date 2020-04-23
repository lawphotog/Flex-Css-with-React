import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Pricing from './pricing';

class Home extends React.Component{ 

    render() {
        return (
            <div style={styles.container}>
                <Navbar></Navbar>
                <Pricing></Pricing>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;

let styles = {
    container: {        
        display: 'flex',
        flexDirection: 'column',
        height: 100 + 'vh'
    },
}
