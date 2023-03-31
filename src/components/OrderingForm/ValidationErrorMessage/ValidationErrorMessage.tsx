import React from 'react';
import './ValidationErrorMessage.scss';

class ValidationErrorMessage extends React.Component<{
  errorMessage: string | undefined;
}> {
  constructor(props: { errorMessage: string | undefined }) {
    super(props);
  }

  render() {
    const { errorMessage } = this.props;
    return errorMessage && <span className="validation-error">{errorMessage}</span>;
  }
}

export default ValidationErrorMessage;
