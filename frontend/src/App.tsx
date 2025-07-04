import React, { useMemo } from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

function GlobalBackground() {
    return (
        <div className="global-bg">
            <div className="global-bg-stripes" />
            <div className="global-bg-text">CHAT APP</div>
            <div className="global-bg-shape global-bg-shape1" />
            <div className="global-bg-shape global-bg-shape2" />
            <div className="global-bg-shape global-bg-shape3" />
            <div className="global-bg-shape global-bg-shape4" />
        </div>
    );
}

function App() {
    // Always dark mode, inspired by v1.bepatrickdavid.com
    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'dark',
            primary: { main: '#00eaff' }, // Neon blue accent
            secondary: { main: '#a259ff' }, // Purple accent
            background: {
                default: '#10131a', // Deep dark
                paper: '#181c24', // Slightly lighter for cards
            },
            text: {
                primary: '#fff',
                secondary: '#b0b8c1',
            },
        },
        shape: {
            borderRadius: 18,
        },
        typography: {
            fontFamily: 'Inter, Roboto, Arial, sans-serif',
            fontWeightBold: 700,
            h1: { fontWeight: 800, fontSize: '2.5rem', letterSpacing: '-1px' },
            h2: { fontWeight: 700, fontSize: '2rem' },
            h3: { fontWeight: 600, fontSize: '1.5rem' },
            button: { textTransform: 'none', fontWeight: 700 },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 18,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        boxShadow: '0 2px 12px 0 rgba(0,234,255,0.10)',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    }), []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalBackground />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
