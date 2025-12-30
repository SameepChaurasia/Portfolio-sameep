import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ position: 'fixed', inset: 16, zIndex: 9999, color: '#fff' }}>
          <div style={{ background: 'rgba(0,0,0,0.85)', padding: 20, borderRadius: 8 }}>
            <h2 style={{ margin: 0, marginBottom: 8 }}>Something went wrong</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>{String(this.state.error)}</pre>
            <div style={{ marginTop: 12 }}>
              <button
                onClick={() => window.location.reload()}
                style={{ padding: '8px 12px', borderRadius: 6 }}>
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
