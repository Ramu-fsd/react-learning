import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Production applications should send sanitized diagnostics to an approved
    // monitoring service. Never include credentials or sensitive payment data.
    console.error('Feature rendering failed:', error.message, info.componentStack);
  }

  handleReset = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-panel" role="alert">
          <h3>{this.props.fallbackTitle ?? 'This workspace is temporarily unavailable'}</h3>
          <p>The feature could not be displayed. Other application areas remain available.</p>
          <button onClick={this.handleReset}>Try rendering again</button>
        </div>
      );
    }

    return this.props.children;
  }
}
