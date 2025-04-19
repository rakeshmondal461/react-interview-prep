import { useEffect, useState } from "react";

const WithTimeStamp = (WrappedComponent: any) => {
  return (props: any) => {
    const [currentTimeStamp, setCurrentTimeStamp] = useState<any>("");

    useEffect(() => {
      let newinterval;
      newinterval = setInterval(() => {
        const timestamp = Date.now();
        const date = new Date(timestamp);
        setCurrentTimeStamp(date.toLocaleString());
      }, 1000);
      return () => {
        clearInterval(newinterval);
      };
    }, []);
    return (
      <div>
        <WrappedComponent
          message="This is a timestamped message."
          timestamp={currentTimeStamp}
          {...props}
        />
      </div>
    );
  };
};

export default WithTimeStamp;
