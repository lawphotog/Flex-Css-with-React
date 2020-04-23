import React from 'react';

class Navbar extends React.Component{ 

    render() {
        return (
            <div style={styles.nav}>
                <div style={styles.logo}>
                    <h2>Company name</h2>
                </div>
                <div style={styles.navbuttons}>
                    <div>
                        <a style={styles.navbuttonsA} href="#">Features</a>
                    </div>
                    <div>
                        <a style={styles.navbuttonsA} href="#">Enterprise</a>
                    </div> 
                    <div>
                        <a style={styles.navbuttonsA} href="#">Support</a>
                    </div>
                    <div>
                        <a style={styles.navbuttonsA} href="#">Pricing</a>
                    </div>
                    <div>
                        <button>Sign up</button>
                    </div>                      
                </div>
            </div>
        )
    }
}

export default Navbar;


let styles = {
    nav: {
        display: 'flex',
        flex: 1,
        boxShadow: '0 -8px 15px 1px gray',
    },
    logo: {
        flex: 1,
        paddingLeft: '20px',
    },
    navbuttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        display: 'flex',
        paddingTop: '20px',
    },
    navbuttonsA: {
        textDecoration: 'none'
    }
}
