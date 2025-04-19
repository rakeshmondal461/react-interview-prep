
const MessageComponent = ({ message, timestamp }:any) => {
  return (
    <div>
      <p>{message}</p>
      <small>Received at: {timestamp}</small>
    </div>
  );
};

export default MessageComponent;
