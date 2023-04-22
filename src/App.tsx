import React from 'react';
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    Container,
    Grid,
    Button
} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons';
import useStyles from "./styles";
import {DummyCard} from "./components/DummyCard";

function App() {
    const classes = useStyles();
    let cards = [1, 2, 3, 4, 5];

    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>
                        vInsta<s>gram</s>kilo
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth={'sm'}>
                        <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom={true}>
                            Photo Album
                        </Typography>
                        <Typography variant={'h5'} align={'center'} color={'textSecondary'} paragraph={true}>
                            This is an random text being displayed upon the screen and I am intending to make it large,
                            Also here goes some random text. This is an example and I think now this is sufficient.
                        </Typography>
                        <div className={classes.button}>
                            <Grid container={true} spacing={10} justifyContent={'center'}>
                                <Grid item={true}>
                                    <Button variant={'contained'} color={'primary'}>
                                        See the pic
                                    </Button>
                                </Grid>
                                <Grid item={true}>
                                    <Button variant={'outlined'} color={'primary'}>
                                        Button 2
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

                <Container className={classes.container}>
                    <Grid container={true} spacing={4}>
                        {cards.map((card) => (
                            <Grid item={true} key={card} xs={12} sm={6} md={4} className={classes.cardGrid}>
                                <DummyCard classes={classes} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant={'h6'} align={'center'} gutterBottom={true}>
                    Footer
                </Typography>
                <Typography variant={"subtitle1"} align={'center'} color={'secondary'}>
                    Do something here the footer context
                </Typography>
            </footer>
        </>
    );
}

export default App;
