import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Fragment >
          <Grid container spacing={50} justify='center' >

    <Card className={classes.root}>
    
      <CardContent className="card_direction">
        
        <Typography variant="h5" component="h2">
        <CreditCardIcon/> Tarjeta de crédito
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Ver opciones bancarias</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    
      <CardContent className="card_direction">
        
        <Typography variant="h5" component="h2">
        <CreditCardIcon/> Tarjeta de débito
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    
      <CardContent className="card_direction">
        
        <Typography variant="h5" component="h2">
        <LocalAtmIcon/> Efectivo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    
      <CardContent className="card_direction">
        
        <Typography variant="h5" component="h2">
        <AddIcon/> Más medios de pago
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
    </Grid>
    </Fragment>
    
  );
}
