import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {DialogActions, Dialog, DialogTitle, TextField, Button, DialogContent} from '@material-ui/core'
import {compose} from "recompose";
import {connect} from "react-redux";
import { pushTask} from "../../store/actions/task"


export function NewTaskDialog({open, handleClose, t, pushTask}) {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    pushTask({name, description})
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={'xs'}
      fullWidth
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id={t('task.tile')}>{t('task.tile')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            onChange={e => setName(e.target.value)}
            value={name || ''}
            label={t('task.name')}
            margin="dense"
            id="name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={e => setDescription(e.target.value)}
            value={description || ''}
            label={t('task.description')}
            margin="dense"
            id="description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('action.cancel')}
          </Button>
          <Button type='submit' color="primary">
            {t('action.submit')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

NewTaskDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  pushTask: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default compose(
  connect(null, {pushTask}))(NewTaskDialog)
