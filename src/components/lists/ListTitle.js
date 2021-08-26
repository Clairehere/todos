import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import {Tooltip, IconButton, makeStyles} from '@material-ui/core'
import {withTranslation} from 'react-i18next'
import {compose} from 'recompose'
import {Cancel, CheckCircle} from '@material-ui/icons'
import {format} from "date-fns";
import TextField from "@material-ui/core/TextField"
import AlarmIcon from '@material-ui/icons/Alarm'
import Button from "@material-ui/core/Button"
import DeadlineTaskDialog from "../tasks/DeadlineTaskDialog"


const styles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '10px'
  },
  flash: {
    color: props => props.alertDate ? 'red' : 'black',
    animationName: '$flash',
    animationDuration: props => props.alertDate ? '3s' : '0s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  "@keyframes flash": {
    '0%': {opacity: 1},
    '40%': {opacity: 0},
    '100%': {opacity: 1},
  },
})

export const ListTitle = ({t, defaultValue, setValue}) => {

  const [editMode, setEditMode] = useState(false)
  const [tmpValue, setTmpValue] = useState(defaultValue.name)

  const [dateDialogOpen, setDateDialogOpen] = useState(false)
  const date = useMemo(() => new Date(Date.now() + (24 * 60 * 60 * 1000)), [])

  const alertDate = useMemo(() => {
    if (!defaultValue || !defaultValue.deadline) return
    return (defaultValue.deadline < date)
  }, [defaultValue?.deadline])

  const style = styles({alertDate})


  const handleSubmit = () => {
    setValue({...defaultValue, name: tmpValue})
    setEditMode(false)
  }

  return editMode
    ? <div className={style.root}>
      <TextField
        required
        id="standard-basic"
        autoFocus
        value={tmpValue}
        onChange={e => setTmpValue(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSubmit()}
        type={'text'}
      />
      <Tooltip title={t('submit')}>
        <IconButton aria-label='submit' onClick={() => handleSubmit()}>
          <CheckCircle fontSize={'small'}/>
        </IconButton>
      </Tooltip>
      <Tooltip title={t('cancel')} onClick={() => setEditMode(false)}>
        <IconButton aria-label='cancel'>
          <Cancel fontSize={'small'}/>
        </IconButton>
      </Tooltip>
    </div>
    : <div className={style.root}><h2 onClick={() => setEditMode(true)}> {defaultValue.name}
    </h2> <Tooltip title={"Deadline :" + format(defaultValue.deadline, 'dd/MM/yyyy')}>
      <Button aria-label="archive" onClick={() => setDateDialogOpen(true)}>
        <AlarmIcon edge={"start"} className={style.flash}/>
      </Button>
    </Tooltip>
      <DeadlineTaskDialog open={dateDialogOpen} handleClose={() => setDateDialogOpen(false)} t={t}/>
    </div>
}

ListTitle.propTypes = {
  t: PropTypes.func.isRequired,
  defaultValue: PropTypes.object,
  setValue: PropTypes.func.isRequired,
}

export default compose(
  withTranslation('common'),
)(ListTitle)
