import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    height: '50vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
   
  },
   paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    
    display: 'flex',
    flexDirection: 'column',
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupForm = ({onSigninSubmit, email, onEmail, password, onPassword, repeatPassword, onRepeatPassword}) => {
  const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>  
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={onSigninSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Электронная почта"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onPassword}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="repeatPassword"
                label="Повторите пороль"
                type="password"
                id="repeatPassword"
                autoComplete="current-password"
                value={repeatPassword}
                onChange={onRepeatPassword}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Зарегистрироваться
                </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}

export default SignupForm;