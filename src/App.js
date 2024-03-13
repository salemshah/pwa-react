import * as React from 'react';
import './App.css';
import {Container, Grid} from '@mui/material';
import newsData from "./http/data.json"
import NewsCard from "./components/NewsCard";

export default function MultiActionAreaCard() {
    return (
        <Container>
            <Grid container spacing={2}>
                {newsData.map((news, index) => <Grid item key={index.toString()}><NewsCard news={news}/></Grid>)}
            </Grid>
        </Container>
    );
}

