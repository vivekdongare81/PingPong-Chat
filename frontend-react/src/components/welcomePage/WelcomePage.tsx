import React from "react";
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.innerWelcomeContainer}>
                <h1 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: '0.5rem', letterSpacing: '-1px', zIndex: 1, position: 'relative' }}>
                    Welcome, Vivek!
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#b0b8c1', marginBottom: '1.5rem', zIndex: 1, position: 'relative' }}>
                    This is <span style={{ color: '#00eaff', fontWeight: 700 }}>pingpongchat</span> — your modern chat app for developers.
                </p>
                <p style={{ fontSize: '0.95rem', color: '#b0b8c1', zIndex: 1, position: 'relative' }}>
                    Designed and developed by Nicolas Justen.<br/>
                    Enhanced by Vivek.
                </p>
            </div>
        </div>
    );
};

export default WelcomePage;