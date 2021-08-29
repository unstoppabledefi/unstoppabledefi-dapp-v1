import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    mainCover: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainCoverContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
        },
    },
}));

export default function MainCover(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper
            className={classes.mainCover}
            style={{ backgroundImage: `url(${post.image})` }}
        >
            {
                <img
                    style={{ display: 'none' }}
                    src={post.image}
                    alt={post.imageText}
                />
            }
            <div className={classes.overlay} />
            <Grid container>
                <Grid item>
                    <div className={classes.mainCoverContent}>
                        <Typography
                            component="h1"
                            variant="h4"
                            color="inherit"
                            gutterBottom
                        >
                            {post.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            paragraph
                            align="justify"
                        >
                            {post.description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainCover.propTypes = {
    post: PropTypes.object,
};
