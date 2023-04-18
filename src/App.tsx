import React from 'react';
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    Container,
    Grid, Button
} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons';
function App() {
  return (
    <>
        <CssBaseline/>
        <AppBar position='relative'>
        <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>
                Vinstakilo
            </Typography>
        </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth={'sm'}>
                    <Typography variant={'h2'} align={'center'} color={'textPrimary'} gutterBottom={true}>
                        Photo Album
                    </Typography>
                    <Typography variant={'h5'} align={'center'} color={'textSecondary'} paragraph={true}>
                        This is an random text being displayed upon the screen and I am intending to make it large,
                        Also here goes some random text. This is an example and I think now this is sufficient.
                    </Typography>
                    <div>
                        <Grid container={true} spacing={10} justifyContent={'center'}>
                            <Grid item={true}>
                                <Button variant={'contained'} color={'primary'}>
                                    See the pic
                                </Button>
                            </Grid>
                            <Grid item={true}>
                                <Button variant={'outlined'} color={'primary'}>
                                    See the pic
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </main>
    </>
  );
}

export default App;
