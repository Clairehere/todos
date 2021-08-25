import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import React, {useState} from "react"
import {compose} from 'recompose'
import Checkbox from "@material-ui/core/Checkbox"
import PropTypes from 'prop-types'
import List from "@material-ui/core/List"
import {connect} from "react-redux"
import {selectList} from "../../store/actions/list"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import withStyles from "@material-ui/core/styles/withStyles"
import {withTranslation} from "react-i18next"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

export const TaskList = ({ t, tasks, classes }) => {
  const [checked, setChecked] = useState(tasks.filter(t => t.isChecked))

  const handleToggle = (task) => () => {
    if (!checked.includes(task)) {
      setChecked([...checked, task])
    } else {
      setChecked(checked.filter(u=> u.id !==task.id))
    }
  };

 return(
   <List aria-label="tasks" className={classes.root}>
     {tasks.map(task =>{
       const labelId = `checkbox-list-secondary-label-${task.id}`
       return(
       <div key={task.id}>
       <ListItem key={task} dense >
         <ListItemIcon>
           <Checkbox
             edge="start"
             onChange={handleToggle(task)}
             checked={checked.includes(task)}
             inputProps={{ 'aria-labelledby':labelId }}
           />
         </ListItemIcon>
         <ListItemText
           primary={task.name}
           secondary={task.description?.length > 15 ?  task.description.substr(0, 15) + '...'  : task.description}
         />
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
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {selectList}),
)(TaskList)
