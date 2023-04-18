import React, { ReactNode } from 'react';
import './ErrorMessageBox.scss';

interface IErrorMessageBoxProps {
  children: ReactNode;
}

function ErrorMessageBox({ children }: IErrorMessageBoxProps) {
  return (
    <div className="error-message-box">
      <div>{children}</div>
    </div>
  );
}

export default ErrorMessageBox;
