//library imports
import React from "react";

//comp
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            height: "100vh",
            backgroundColor: "#2c3134",
            fontSize: 80,
            color: "#fff",
          }}
        >
          Something went wrong.
          <br />
          Please Reload
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
