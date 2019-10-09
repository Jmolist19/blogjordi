import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
class Barra_tipo_menu extends React.Component{

  render(){
    return(
<div >
    <table style= {{width:'100%', border: '50' , cellspacing:'0', cellpadding:'0', background: 'black', color: 'white'}}>
      <tr>
        <td>
          <h3> Quienes somos? </h3>
        </td>
        <td>
          <h3 > Secciones </h3>
        </td>
        <td>
          <h3 > Publicitar </h3>
        </td>
        <td>
          <h3> Vehículos </h3>
        </td>
        <td>
          <h3 > Cuenta </h3>
        </td>
      </tr>
    </table>
</div>
)
}
}

class Textos extends React.Component{
  render(){
    return(
      <div>
      <h3>
        Acerca del blog:
            </h3>
      <p>
        En este Blog encontraras todas las novedades acerca de la marca de automotores BMW
        </p>
    <h3>
    Historia:
    </h3>
    <p>
    Bayerische Motoren Werke AG, comúnmente conocida como BMW, es una empresa multinacional alemana que produce automóviles y motocicletas. La compañía fue fundada en 1916 como fabricante de motores de aviación, que produjo desde 1917 hasta 1918 y nuevamente desde 1933 hasta 1945.
    </p>

    <h2>
    Ultimas novedades:
    </h2>

    <h3>
      Nuevos modelos del año 2019 :
    </h3>
      </div>
    );
  }
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    
  },
  input: {
    display: 'none',
  },
  avatar: {
    margin: 10,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
    style: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



export default function TextButtons() {

  const classes = useStyles();
  return (
    <div>
      <Button  className={classes.button}>Crear cuenta </Button>
      <Button  className={classes.button}>Ingresar </Button>
    </div>
  );
}

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>H</Avatar>
    </Grid>
  );
}
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.style}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img  src="https://i.pinimg.com/originals/07/0d/3e/070d3e118fa9bcf14bf6a1004308c91b.jpg" />
            <GridListTileBar
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export{Barra_tipo_menu,
  Textos,
}