// src/components/withGreeting.js

const withGreeting = (WrappedComponent: any) => {
  return (props: any) => {
    const greeting = "Hello from HOC!";
    return (
      <>
      <div style={{borderColor:"tomato",backgroundColor:"turquoise", padding:8}}>

        <h4>Wrapper component</h4>
        <WrappedComponent greeting={greeting} {...props} />
      </div>
      </>
    );
  };
};

export default withGreeting;
