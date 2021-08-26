import {withTranslation} from "react-i18next"
import {connect} from 'react-redux'
import withStyles from "@material-ui/core/styles/withStyles"
import React, { useState} from "react"
import {compose} from 'recompose'
import PropTypes from 'prop-types'
import TaskList from "../tasks/TaskList"
import NewTaskDialog from "../tasks/NewTaskDialog"
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import ListTitle from "../lists/ListTitle"
import {editList} from "../../store/actions/list"


const styles = () => ({
  title: {
    marginLeft: '10%'
  },
  container: {
    marginLeft: '30%'
  },

})


export const TodoListPage = ({t, classes, lists, selectedList,editList}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <>
      {selectedList &&
      <div className={classes.container}>
        <ListTitle defaultValue={selectedList} setValue={(list)=> editList(list)}/>
        <Button aria-label="archive" style={{marginTop: '5px'}} onClick={() => setDialogOpen(true)}>
          <AddIcon edge={"start"}/> {t('task.add')}</Button>
        <TaskList/>
      </div>}
      <NewTaskDialog open={dialogOpen} handleClose={() => setDialogOpen(false)} t={t}/>
    </>
  )
}

const mapStateToProps = (state) => ({
 lists: state.data.initialLists || [],
  selectedList: state.data.selectedList || {},
})


TodoListPage.propTypes = {
  t: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  selectedList: PropTypes.object,
  editList: PropTypes.func.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {editList}),
)(TodoListPage)