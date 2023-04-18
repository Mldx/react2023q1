const limitErrorMessage = (message: string | undefined) =>
  message === 'expected JSON response from server.'
    ? 'The limit of 50 requests/hour has been reached. Please come back when the next hour begins'
    : message;
export default limitErrorMessage;
