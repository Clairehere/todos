import React from 'react'
import { withStyles } from '@material-ui/core'
import { compose } from 'recompose'
import { withTranslation} from 'react-i18next'
import PropTypes from 'prop-types'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import HomeIcon from '@material-ui/icons/Home'
import IconButton from "@material-ui/core/IconButton"
import {HOME} from "../constants/routes"
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
})

const withTopMenu = ComposedComponent => {
  const HOC = ({ classes, t, history, ...props }) => {
    return (<>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=> history.push(HOME)}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {t('welcome.title')}
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <ComposedComponent {...props} />
      </div>

    </>)
  }

  HOC.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  return compose(
    withRouter,
    withStyles(styles),
    withTranslation('common')
  )(HOC)
}

export default withTopMenu
