import React from 'react';

class Footer extends React.Component{ 

    render() {
        return (
            <div style={styles.footer}>
                <div>
                    <h2>Logo</h2>
                    <p>c 2017-2019</p>
                </div>
                <div>
                    <h2>Features</h2>
                    <a href="#">Cool stuff</a>
                </div>
                <div>
                    <h2>Resources</h2>
                    <a href="#">Resources</a>
                </div>
                <div>
                    <h2>About</h2>
                    <a href="#">Team</a>
                </div>
            </div>
        )
    }
}

export default Footer;

let styles = {
    footer: {
        flex: 6,
        display: 'flex',
        justifyContent: 'space-evenly',
        boxShadow: '0px 3px 10px -1px rgba(0,0,0,0.75)',
    }
}
