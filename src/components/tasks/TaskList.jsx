import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import React from "react"
import {compose} from 'recompose'
import Checkbox from "@material-ui/core/Checkbox"
import PropTypes from 'prop-types'
import List from "@material-ui/core/List"
import {connect} from "react-redux"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import withStyles from "@material-ui/core/styles/withStyles"
import {withTranslation} from "react-i18next"
import {checkTask} from "../../store/actions/task"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from '@material-ui/icons/Edit'
import { withRouter } from 'react-router-dom'
import { TASK} from "../../constants/routes"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

export const TaskList = ({ t, history, tasks, classes, checkTask }) => {
 return(
   <List aria-label="tasks" className={classes.root}>
     {tasks.sort(t => t.isChecked ? 1 : -1).map(task =>{
       const labelId = `checkbox-list-secondary-label-${task.id}`
       return(
       <div key={task.id}>
       <ListItem key={task} dense >
         <ListItemIcon>
           <Checkbox
             edge="start"
             onChange={()=> checkTask(task)}
             checked={task.isChecked}
             inputProps={{ 'aria-labelledby':labelId }}
           />
         </ListItemIcon>
         <ListItemText
           style={{textDecoration: task.isChecked ? 'line-through' :'none'}}
           primary={task.name}
           secondary={task.description?.length > 15 ?  task.description.substr(0, 15) + '...'  : task.description}
         />
         <ListItemSecondaryAction>
           <IconButton edge="end" aria-label="push" onClick={()=> history.push(TASK.replace(':id?', task.id))}>
             <EditIcon />
           </IconButton>
         </ListItemSecondaryAction>
       </ListItem>
       <Divider/>
       </div>)
       }
     )}
   </List>
 )
}

const mapStateToProps = (state) => {
  return ({
    tasks: state.data.initialTasks.filter(t => t.listId === state.data.selectedList?.id) || []
  })
}


TaskList.propTypes = {
  t: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  checkTask: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default compose(
  withRouter,
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {checkTask}),
)(TaskList)
