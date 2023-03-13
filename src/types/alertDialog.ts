export interface IAlertDialogProps {
  isError: boolean;
  title: string;
  open: boolean;
  handleClose: () => void;
}