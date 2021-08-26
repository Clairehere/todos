import {withTranslation} from "react-i18next"
import {connect} from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles"
import React from "react"
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import {selectList} from "../../store/actions/list"
import TaskList from "../tasks/TaskList"


const styles = () => ({
    title:{
      marginLeft:'10%'
    },
    container:{
      marginLeft:'30%'
    }
})


export const TodoListPage = ({t, classes, lists, selectList, selectedList}) => {

  return (
    <>
     { selectedList &&
      <div className={classes.container}>
        <h2> {selectedList.name } </h2>
        <TaskList/>
      </div>}
    </>
  )
}

const mapStateToProps = (state) => ({
    lists: state.data.initialLists || [],
    selectedList: state.data.selectedList,
  })


TodoListPage.propTypes = {
  t: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  selectList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {selectList}),
)(TodoListPage)