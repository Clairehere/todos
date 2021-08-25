import {withTranslation} from "react-i18next"
import {connect} from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles"
import React, { useEffect} from "react"
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


export const TodoListPage = ({t, classes, lists, tasks, selectList, selectedList}) => {

  // For a future Feature
  useEffect(() => {
    if(!lists) return
      if(!selectedList)
        selectList(lists[0])
  }, [lists,selectedList,selectList])

  return (
    <>
     { selectedList &&
      <div className={classes.container}>
        <h2> {selectedList.name } </h2>
        <TaskList tasks={tasks}/>
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
  tasks: PropTypes.array,
  selectList: PropTypes.func.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {selectList}),
)(TodoListPage)