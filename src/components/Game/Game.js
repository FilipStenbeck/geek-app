import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 12,
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

function GameDescriptionIntro(props) {
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

function GameDescriptionMain(props) {
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

function Game(props) {
  const { classes, game } = props;
  console.log(game.description);
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
                <GameDescriptionIntro game={game} classes={classes} />
                <GameDescriptionMain game={game} classes={classes} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Game);
