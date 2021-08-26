import React, {useMemo} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from "prop-types"
import {compose} from "recompose"
import withStyles from "@material-ui/core/styles/withStyles"
import {withTranslation} from "react-i18next"
import {connect} from "react-redux"
import {checkTask} from "../../store/actions/task"
import CheckIcon from '@material-ui/icons/Check'
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from "@material-ui/core/Tooltip"

const styles = () => ({
  root: {
    minWidth: 475,
  },
  title: {
    fontSize: 14,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px'
  },
})

export const TaskCard = ({t, classes, tasks, checkTask}) => {
  const task = useMemo(() => tasks[0], [tasks])

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        {task ?
          <CardContent>
            <Typography variant="h5" component="h2">
              {task.name}
              <IconButton edge="end" aria-label="check" onClick={() => checkTask(task)}>
                <Tooltip title={task.isChecked ? t('task.is-checked') : t('task.isn-t-checked')}>
                  {task.isChecked ?
                    <CheckIcon/> : <CloseIcon/>}
                </Tooltip>
              </IconButton>
            </Typography>
            <br/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {task.description}
            </Typography>
          </CardContent> :
          <CardContent>
            <Typography variant="h5" component="h2"> {t('task.none')}
            </Typography>
          </CardContent>}
      </Card>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  tasks: state.data.initialTasks.filter(t => t.id === props.match.params.id) || [],
})


TaskCard.propTypes = {
  t: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  checkTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps, {checkTask}),
)(TaskCard)