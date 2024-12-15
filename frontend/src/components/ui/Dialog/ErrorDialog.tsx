import React from 'react';
import classes from './ErrorDialog.module.css'; // スタイリング用

interface ErrorDialogProps {
  title?: string;
  message: string;
  onClose: () => void;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ title = 'Error', message, onClose }) => {
  return (
    <div className={classes.errorDialogOverlay}>
      <div className={classes.errorDialog}>
        <h2 className={classes.errorDialogTitle}>{title}</h2>
        <p className={classes.errorDialogMessage}>{message}</p>
        <button className={classes.errorDialogButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorDialog;
