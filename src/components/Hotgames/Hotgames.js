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
    width: '100%',
    height: 300,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function TitlebarGridList(props) {
  const { classes, games, width, header } = props;

  const tileData = games.map(game => ({
    img: game.thumbnail,
    title: game.name,
    gameId: game.id,
  }));

  const columns = isWidthUp('sm', width) ? 2 : 1;

  return (
    <div className={classes.root}>
      <GridList cols={columns} cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <h3>{header}</h3>
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile, i) => (
          <GridListTile className={classes.tile} key={i}>
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
