import React from 'react';
import './ValidationErrorMessage.scss';

interface IValidationErrorMessageProps {
  errorMessage: string | undefined;
}

function ValidationErrorMessage(props: IValidationErrorMessageProps) {
  const { errorMessage } = props;
  return errorMessage ? <span className="validation-error">{errorMessage}</span> : null;
}

export default ValidationErrorMessage;
