import * as React from "react";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function logErrorToMyService(
  error: Error,
  componentStack: any,
  ownerStack?: any
) {
  console.error("Logged error:", error);
  console.error("Component stack:", componentStack);
  console.error("Owner stack:", ownerStack);
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logErrorToMyService(
      error,
      info.componentStack,
      // Assuming `captureOwnerStack` is a custom or dev-only utility.
      // You can comment this out if unavailable.
      (React as any).captureOwnerStack?.()
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
