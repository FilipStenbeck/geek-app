import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoCard from './VideoCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroImg: {
    width: '90%',
    maxWidth: 600,
  },
  description: {
    textAlign: 'justify',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
  console.log(game);
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <img className={classes.heroImg} src={game.image} alt={game.title} />
        </Grid>
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

export default withStyles(styles)(Game);
