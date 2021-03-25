import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));


function App() {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Container fixed>
    <Grid container spacing={3}>
      <Grid item xs={12}>
      
       <Paper className={classes.paper}>0</Paper>

      </Grid>
      
      <Grid item xs={4} sm={3}>
      <Paper className={classes.paper}>
         <Button variant="contained" color="primary">
        1
      </Button>
      </Paper>
      </Grid>

      <Grid item xs={4} sm={3}>
      <Paper className={classes.paper}>
         <Button variant="contained" color="primary">
      2
      </Button>
      </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}>
         <Button variant="contained" color="primary">
       3
      </Button>
         </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
        /
      </Button>
         </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     4
      </Button>
         </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
  5
      </Button>
         </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
    6
      </Button>
         </Paper>
      </Grid>

      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     *
      </Button>
         </Paper>
      </Grid>

      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     7
      </Button>
         </Paper>
      </Grid>

      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     8
      </Button>
         </Paper>
      </Grid>

      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     9
      </Button>
         </Paper>
      </Grid>
      <Grid item xs={4} sm={3}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     +
      </Button>
         </Paper>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={12}>
         <Paper className={classes.paper}> 
         
         <Button variant="contained" color="primary">
     =
      </Button>
         </Paper>
      </Grid>
    
    </Container>
  </div>

  );
}

export default App;
