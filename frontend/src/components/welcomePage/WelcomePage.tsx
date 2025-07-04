import React from "react";
import styles from './WelcomePage.module.scss';

const ChatSVG = () => (
  <svg className={styles.welcomeIcon} width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#00eaff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const CodeSVG = () => (
  <svg className={styles.welcomeIcon} width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#a259ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const WelcomePage = () => {
    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.innerWelcomeContainer}>
                <div className={styles.iconRow}>
                  <ChatSVG />
                  <CodeSVG />
                </div>
                <h1 className={styles.welcomeTitle}>
                    Welcome, Vivek!
                </h1>
                <p className={styles.welcomeSubtitle}>
                    This is <span className={styles.brand}>pingpongchat</span> — your modern chat app for developers.
                </p>
                <p className={styles.welcomeCredit}>
                    Designed and developed by Nicolas Justen.<br/>
                    Enhanced by Vivek.
                </p>
            </div>
        </div>
    );
};

export default WelcomePage;