import {withTranslation} from "react-i18next"
import {connect} from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import {compose} from 'recompose'
import PropTypes from 'prop-types'


const styles = theme => ({})


export const TodoListPage = ({t}) => {

  return (<h1> {t('welcome.title')}</h1>)
}

const mapStateToProps = (state, props) => {
  console.log("state,props", state, props)
  return ({})
}

TodoListPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {}),
)(TodoListPage)