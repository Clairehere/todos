import React, {useMemo} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from "prop-types"
import {compose} from "recompose"
import withStyles from "@material-ui/core/styles/withStyles"
import {withTranslation} from "react-i18next"
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom'
import TaskContent from "./TaskContent"

const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px',
  },
})

export const TaskCard = ({t, classes, tasks}) => {
  const task = useMemo(() => tasks[0], [tasks])

  return (
    <div className={classes.container}>
      <Card>
        {task ?
          <TaskContent/>
          : <CardContent>
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
  tasks: PropTypes.array.isRequired,
}

export default compose(
  withRouter,
  withStyles(styles),
  withTranslation('common'),
  connect(mapStateToProps),
)(TaskCard)