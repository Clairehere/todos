import React, {useMemo, useState} from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from "prop-types"
import {compose} from "recompose"
import withStyles from "@material-ui/core/styles/withStyles"
import {withTranslation} from "react-i18next"
import {connect} from "react-redux"
import {checkTask, editTask, removeTask} from "../../store/actions/task"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import Grid from "@material-ui/core/Grid"
import DeleteIcon from '@material-ui/icons/Delete'
import {HOME} from "../../constants/routes"
import {withRouter} from 'react-router-dom'
import TaskTextField from "./TaskTextField"
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const styles = () => ({
  title: {
    fontSize: 14,
  },
  icon:{
    marginLeft: '10px'
  }
})

export const TaskContent = ({t, classes, tasks, checkTask, removeTask, history, editTask}) => {
  const task = useMemo(() => tasks[0], [tasks])

  const [editTitleMode, setEditTitleMode] = useState(false)
  const [editDescriptionMode, setEditDescriptionMode] = useState(false)

  const deleteTask = (task) => {
    removeTask(task)
    history.push(HOME)
  }

  return (
    <CardContent>
      <Grid container justifyContent={'space-between'}>
        {!editTitleMode ?
          <Typography variant="h5" component="h2" onClick={() => setEditTitleMode(true)}>
            {task.name}
          </Typography> :
          <TaskTextField setEditMode={setEditTitleMode} defaultValue={task.name}
                         setValue={name => editTask({...task, name})}/>}
        <div>
          {!editTitleMode && <IconButton className={classes.icon} aria-label="check" onClick={() => checkTask(task)}>
            <Tooltip title={task.isChecked ? t('task.is-checked') : t('task.isn-t-checked')}>
              {task.isChecked ?
                <CheckBoxIcon/> :
                <CheckBoxOutlineBlankIcon/>}
            </Tooltip>
          </IconButton>}
          <IconButton className={classes.icon} edge="end" aria-label="remove" onClick={() => deleteTask(task)}>
            <Tooltip title={"Attention la suppression est definitive"}>
              <DeleteIcon/>
            </Tooltip>
          </IconButton>
        </div>
      </Grid>
      <br/>
      {!editDescriptionMode ?
        <Typography className={classes.title} color="textSecondary" gutterBottom
                    onClick={() => setEditDescriptionMode(true)}>
          {task.description}
        </Typography>
        : <TaskTextField setEditMode={setEditDescriptionMode} defaultValue={task.description}
                         setValue={description => editTask({...task, description})}/>}
    </CardContent>
  )
}

const mapStateToProps = (state, props) => ({
  tasks: state.data.initialTasks.filter(t => t.id === props.match.params.id) || [],
})


TaskContent.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  checkTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

export default compose(
  withRouter,
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {checkTask, removeTask, editTask}),
)(TaskContent)