import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {DialogActions, Dialog, DialogTitle, TextField, Button, DialogContent} from '@material-ui/core'
import {compose} from "recompose";
import {connect} from "react-redux";
import {editList} from "../../store/actions/list"


export function DeadlineTaskDialog({open, handleClose, t, editList, selectedList}) {

  const [time, setTime] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    editList({...selectedList, deadline: new Date(Date.now() + (time * 24 * 60 * 60 * 1000))})
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
        <DialogTitle id={t('task.tile')}>{t('Deadline')}</DialogTitle>
        <DialogContent>
          <TextField
            label={t('Fin dans (en jours)')}
            required
            id="standard-basic"
            autoFocus
            value={time}
            margin="dense"
            onChange={e => setTime(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSubmit()}
            type={'number'}
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

const mapStateToProps = (state) => ({
  selectedList: state.data.selectedList || {},
})

DeadlineTaskDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedList: PropTypes.object.isRequired,
  editList: PropTypes.func.isRequired,
}

export default compose(
  connect(mapStateToProps, {editList}))(DeadlineTaskDialog)
