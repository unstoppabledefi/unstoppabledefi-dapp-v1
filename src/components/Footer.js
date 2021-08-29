import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://unstoppabledefi.org">
                UnstoppableDefi.Org
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(4),
        padding: theme.spacing(6, 0),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Copyright />
            </Container>
        </footer>
    );
}
