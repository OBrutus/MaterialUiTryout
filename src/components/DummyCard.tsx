import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";

export function DummyCard(props: { classes: any }) {
    let classes = props.classes;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={'http://source.unsplash.com/random'}
                title={'Some Randome Title'}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom={true} variant={'h5'}>
                    Heading
                </Typography>
                <Typography>
                    This is a media card you can use it for media content
                </Typography>
                <CardActions>
                    <Button size={'small'} color={'primary'}>View</Button>
                    <Button size={'small'} color={'primary'}>Edit</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}