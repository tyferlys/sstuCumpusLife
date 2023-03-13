import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {IAlertDialogProps} from "@/types/alertDialog";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {Stack} from "@mui/system";

const AlertDialog: React.FC<IAlertDialogProps> = (
  {
    open,
    handleClose,
    title,
    isError
  }
) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <Stack flexDirection='column' alignItems='center'>
          {
            !isError ?
              <CheckCircleIcon color="success" sx={{fontSize: 100}}/> :
              <ErrorIcon color="error" sx={{fontSize: 100}}/>
          }
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Закрыть окно.
        </Button>
      </DialogActions>
    </Dialog>
  )
    ;
};

export default AlertDialog;