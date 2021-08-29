import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    media: {
        height: 250,
    },
    shorDesc: {
        paddingBottom: '5px',
    },
}));

export default function ProjectCard(props) {
    const classes = useStyles();
    const { project } = props;
    const gatewayUrl = `https://cloudflare-ipfs.com/ipfs/${project.cid}`;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
                {' '}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={project.image}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {project.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textPrimary"
                                component="h2"
                                className={classes.shorDesc}
                            >
                                {project.shortDesc}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                align="justify"
                            >
                                {project.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {' '}
                        <Button
                            size="small"
                            color="primary"
                            href={project.dappUrl}
                            target="_blank"
                        >
                            Dapp
                        </Button>
                        <Button
                            size="small"
                            color="primary"
                            href={project.originalUrl}
                            target="_blank"
                        >
                            Original
                        </Button>
                        <Button
                            size="small"
                            color="primary"
                            href={gatewayUrl}
                            target="_blank"
                        >
                            Gateway
                        </Button>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.object,
};
