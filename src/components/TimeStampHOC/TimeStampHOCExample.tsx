import WithTimeStamp from "./WithTimeStamp";
import MessageComponent from "./MessageComponent";
import SimpleFormUI from "./SimpleFormUI";

const EnhancedComponent = WithTimeStamp(MessageComponent);
const EnhancedFormComponent = WithTimeStamp(SimpleFormUI);

const TimeStampHOCExample = () => {
  return (
    <div>
      HOC Exercise
      <EnhancedComponent />
      <EnhancedFormComponent/>
    </div>
  );
};

export default TimeStampHOCExample;
