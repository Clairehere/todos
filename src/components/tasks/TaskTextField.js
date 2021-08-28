import React, { useState} from 'react'
import PropTypes from 'prop-types'
import {Tooltip, IconButton} from '@material-ui/core'
import {withTranslation} from 'react-i18next'
import {compose} from 'recompose'
import {Cancel, CheckCircle} from '@material-ui/icons'
import TextField from "@material-ui/core/TextField"

export const TaskTextField = ({t, defaultValue, setValue, setEditMode}) => {

  const [tmpValue, setTmpValue] = useState(defaultValue)

  const handleSubmit = () => {
    setValue(tmpValue)
    setEditMode(false)
  }

  return (
     <div >
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
    </div>)

}

TaskTextField.propTypes = {
  t: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
}

export default compose(
  withTranslation('common'),
)(TaskTextField)
