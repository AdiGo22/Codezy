import { Component } from 'react';
import './App.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-page">
        <div className="error-box">
          <h1 className="error-heading">Oops! Something went wrong.</h1>
          <p className="error-message">
            {`It looks like something didn't work as expected. Don't worry, it's not your fault.
              Please reload the page. `}
          </p>
        </div>
      </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
