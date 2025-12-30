import { useEffect, useState } from 'react';

const ErrorOverlay = () => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const handleError = (event) => {
      const message = event?.message || (event?.reason && event.reason.message) || String(event);
      const stack = event?.error?.stack || (event?.reason && event.reason.stack) || '';
      setErrors((s) => [...s, { message, stack }]);
      console.error('Captured error:', event);
    };

    const onRejection = (ev) => handleError(ev);

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', onRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  if (errors.length === 0) return null;

  return (
    <div style={{ position: 'fixed', inset: 20, zIndex: 99999, pointerEvents: 'auto' }}>
      {errors.map((e, i) => (
        <div
          key={i}
          style={{
            background: 'rgba(0,0,0,0.85)',
            color: 'white',
            padding: 12,
            borderRadius: 8,
            marginBottom: 8,
            fontFamily: 'monospace',
            maxHeight: '40vh',
            overflow: 'auto',
          }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>{e.message}</div>
          <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{e.stack}</pre>
        </div>
      ))}
    </div>
  );
};

export default ErrorOverlay;
