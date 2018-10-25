import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Grow from '@material-ui/core/Grow';
import withWidth from '@material-ui/core/withWidth';
import VideoCard from './VideoCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
    paddingTop: 40,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    maxWidth: 1080,
  },
  titleBox: {
    marginTop: -70,
    background: 'white',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderRadius: 8,
    zIndex: 2,
  },
  titleLink: {
    textDecoration: 'none',
    color: '#5d5c5c;',
    paddingBottom: 2,
    display: 'inline-flex',
    '&:hover': {
      boxShadow: 'inset 0 -2px 0 #5d5c5c;',
    },
  },

  titleText: {
    marginTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
  },
  heroImg: {
    maxHeight: 500,
    width: '100%',
  },
  description: {
    textAlign: 'justify',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  overrides: {
    typography: {
      useNextVariants: true,
    },
  },
});

function DescriptionIntro(props) {
  const { game, classes } = props;
  if (!game.description) {
    return null;
  }
  return (
    <Grid item xs={12}>
      <Typography className={classes.description}>
        {game.description.intro}
      </Typography>
    </Grid>
  );
}

function DescriptionMain(props) {
  const { game, classes } = props;
  if (!game.description || !game.description.main) {
    return null;
  }
  return game.description.main.map((text, i) => (
    <Grid key={i} item xs={12}>
      <Typography className={classes.description}>{text}</Typography>
    </Grid>
  ));
}

function Mechanics(props) {
  const { game, classes } = props;
  if (!game.mechanics) {
    return null;
  }

  return game.mechanics.map((text, i) => (
    <Typography key={i} className={classes.description}>
      {text}
    </Typography>
  ));
}

function Categories(props) {
  const { game, classes } = props;
  if (!game.categories) {
    return null;
  }

  return game.categories.map((text, i) => (
    <Typography key={i} className={classes.description}>
      {text}
    </Typography>
  ));
}

function Videos(props) {
  const { game } = props;
  if (!game.videos) {
    return null;
  }

  return game.videos.map(video => (
    <Grid key={video.id} item xs={12} sm={6}>
      <VideoCard video={video} />
    </Grid>
  ));
}

function Game(props) {
  const { classes, game } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.imageContainer}>
            <Grow timeout={{ enter: 2000 }} in={true}>
              <img
                className={classes.heroImg}
                src={game.image}
                alt={game.title}
              />
            </Grow>
          </div>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={4} />
          <Grid className={classes.titleBox} item xs={4}>
            <a
              className={classes.titleLink}
              href={'https://boardgamegeek.com/boardgame/' + game.id}
              target="top"
            >
              <h3 className={classes.titleText}>{game.name}</h3>
            </a>
          </Grid>
          <Grid item xs={4} />
        </Hidden>
        <Hidden smUp>
          <Grid item xs={12}>
            <a
              className={classes.titleLink}
              href={'https://boardgamegeek.com/boardgame/' + game.id}
              target="top"
            >
              <h3 className={classes.titleText}>{game.name}</h3>
            </a>
          </Grid>
        </Hidden>

        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <strong>Description</strong>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <DescriptionIntro game={game} classes={classes} />
                <DescriptionMain game={game} classes={classes} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <strong>Mechanics</strong>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Mechanics game={game} classes={classes} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>

        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <strong>Categories</strong>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Categories game={game} classes={classes} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                <strong>Videos</strong>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={24}>
                <Videos game={game} classes={classes} />
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default compose(
  withStyles(styles),
  withWidth()
)(Game);
