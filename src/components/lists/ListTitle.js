import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import { withStyles, Tooltip, IconButton,makeStyles } from '@material-ui/core'
import { withTranslation} from 'react-i18next'
import { compose } from 'recompose'
import { Cancel, CheckCircle } from '@material-ui/icons'
import {format} from "date-fns";
import TextField from "@material-ui/core/TextField"
import AlarmIcon from '@material-ui/icons/Alarm'
import Button from "@material-ui/core/Button";

const styles = makeStyles({
  root: {
    display: 'flex',
  },
  flash: {
    color: props => props.alertDate ? 'red': 'primary',
    animationName:'$flash' ,
    animationDuration: props => props.alertDate ?'4s' :'0s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  "@keyframes flash": {
    '0%' :  { opacity:1 },
    '40%':   { opacity:0 },
    '100%': { opacity:1 },
  },
})

export const ListTitle = ({ t, defaultValue, setValue }) => {

  const [editMode, setEditMode] = useState(false)
  const [tmpValue, setTmpValue] = useState(defaultValue.name)

  const date = useMemo(() => new Date(), [])
  const alertDate = useMemo(() => {
    if (!defaultValue || !defaultValue.deadline) return
    return  (defaultValue.deadline.toDate().getTime() < date.setDate(date.getDate() + 1) )
  }, [defaultValue])

  const style = styles({ alertDate })


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
          <CheckCircle fontSize={'small'} />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('cancel')} onClick={() => setEditMode(false)}>
        <IconButton aria-label='cancel'>
          <Cancel fontSize={'small'} />
        </IconButton>
      </Tooltip>
    </div>
    :  <h2 onClick={() => setEditMode(true)}> {defaultValue.name}
      <Tooltip title={"Deadline :" + format(defaultValue.deadline.toDate(), 'dd/MM/yyyy')}>
        <Button aria-label="archive">
          <AlarmIcon edge={"start"} className={style.flash}/>
        </Button>
      </Tooltip>
    </h2>
}

ListTitle.propTypes = {
  t: PropTypes.func.isRequired,
  defaultValue: PropTypes.object,
  setValue: PropTypes.func.isRequired,
}

export default compose(
  withStyles(styles),
  withTranslation('common'),
)(ListTitle)
