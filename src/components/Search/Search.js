import React, {useContext, useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { SwapiContext } from '../../context/Swapi';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 500,
  
  },
  input:{
    color: "#fac70b"
    
  },
  inputLabel:{
    color: "#facf5a"
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


const Search = () => {
  const { action:{
    getSearch
  }} = useContext(SwapiContext)
  const classes = useStyles();
  const [search, setSearch] = useState("")

  useEffect(() => {
    getSearch(search)
  }, [search])

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        fullWidth
        id="standard-search"
        className={classes.textField}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          className: classes.inputLabel
        }}
        value={search}
        onChange={ e => {
          e.preventDefault(e)
          setSearch(e.target.value)}
        } 
          
        margin="normal"
        placeholder="Digite o filme do Star Wars"
      />
    </form>
  )
}

export default Search;