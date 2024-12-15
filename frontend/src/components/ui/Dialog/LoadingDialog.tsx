import React from "react";
import classes from "./LoadingDialog.module.css"; // CSSスタイルを分離

interface LoadingDialogProps {
  isOpen: boolean; // ローディングダイアログを表示するかどうか
  message?: string; // 表示するメッセージ（オプション）
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({ isOpen, message = "Loading..." }) => {
    console.log('ダイアログの状態', isOpen)
  if (!isOpen) return null; // 非表示の場合は何もレンダリングしない

  return (
    <div className={classes.loadingDialogOverlay}>
      <div className={classes.loadingDialog}>
        <div className={classes.spinner}></div> {/* スピナー */}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoadingDialog;
