import React from 'react';

class Pricing extends React.Component{ 

    render() {
        return (
            <div style={styles.pricing}>
                <div></div>
                <div style={styles.pricingtext}>
                    <h1>Pricing</h1>
                    <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>
                <div style={styles.prices}>
                    <div style={styles.boxespadding}></div>
                    <div style={styles.boxes}>
                        <div style={styles.boxHeader}>Free</div>
                        <div style={styles.boxContent}>
                            <h2>$0/mo</h2>
                            <p>
                                10 users included                                    
                            </p>
                            <p>
                                2 GB of storage
                            </p>
                            <p>
                                Email support
                            </p>
                            <p>
                                Help center access
                            </p>
                            <button>
                                Sign up for free
                            </button>
                        </div>
                    </div>
                    <div style={styles.boxes}>
                        <div style={styles.boxHeader}>Pro</div>
                        <div style={styles.boxContent}>
                            <h2>$15/mo</h2>
                            <p>
                                20 users included                                    
                            </p>
                            <p>
                                10 GB of storage
                            </p>
                            <p>
                                Priority email support
                            </p>
                            <p>
                                Help center access
                            </p>
                            <button>
                                Get started
                            </button>
                        </div>
                    </div>
                    <div style={styles.boxes}>
                        <div style={styles.boxHeader}>Enterprise</div>
                        <div style={styles.boxContent}>
                            <h2>$29/mo</h2>
                            <p>
                                30 users included                                    
                            </p>
                            <p>
                                15 GB of storage
                            </p>
                            <p>
                                Phone and email support
                            </p>
                            <p>
                                Help center access
                            </p>
                            <button>
                                Contact us
                            </button>
                        </div>
                    </div>
                    <div style={styles.boxespadding}></div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Pricing;


let styles = {
    pricing: {
        flex: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    pricingtext: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '0 150px 0 150px',
    },
    prices: {
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'center'
    },
    boxes: {
        border: '1px solid lightgrey',
        width: 200 + 'px',
        flex: 2,
        margin: 10 + 'px',
    },
    boxespadding: {
        flex: 1,
    },
    boxHeader: {
        borderBottom: '1px solid lightgrey',
        backgroundColor: '#eeffcc',
        height: '50px',
        lineHeight: '50px',
    },
    boxContent: {
        paddingBottom: '20px',
    }
}