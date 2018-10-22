import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: 25,
  },

  gridList: {
    width: '100%',
  },
  tile: {
    margin: 12,
    maxWidth: 300,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes, games, width } = props;

  const tileData = games.map(game => ({
    img: game.thumbnail,
    title: game.name,
    gameId: game.id,
  }));

  //TODO This need refactoring
  if (isWidthUp('sm', width)) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={280}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">
              <h3>Popular games</h3>
            </ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className={classes.tile}>
              <Link to={'/game/' + tile.gameId}>
                <img
                  className={classes.thumbnail}
                  src={tile.img}
                  alt={tile.title}
                />
                <GridListTileBar title={tile.title} />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <GridList cols={1} cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <h3>Popular games</h3>
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile className={classes.tile} cols={1} key={tile.img}>
            <Link to={'/game/' + tile.gameId}>
              <img
                className={classes.thumbnail}
                src={tile.img}
                alt={tile.title}
              />
              <GridListTileBar title={tile.title} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth()
)(TitlebarGridList);
