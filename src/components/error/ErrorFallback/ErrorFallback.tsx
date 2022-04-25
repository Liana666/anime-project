import "./ErrorFallback.css";

type Props = {
  error: any;
  resetErrorBoundary: () => void;
};

export const ErrorFallback: React.FC<Props> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="error" role="alert">
      <p className="error__title">Something went wrong:</p>
      <pre className="error__descr">{error.message}</pre>
      <button className="error__btn" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};
