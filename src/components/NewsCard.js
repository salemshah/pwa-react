import React from 'react';
import {Button, CardActionArea, CardActions} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const NewsCard = ({news}) => {
    const {headline, source, date_published, content} = news
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {headline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    more
                </Button>
                <Typography variant="subtitle1" gutterBottom>
                    Published: {date_published}
                </Typography>
               <Typography variant="subtitle1" gutterBottom>
                    Source: {source}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default NewsCard;