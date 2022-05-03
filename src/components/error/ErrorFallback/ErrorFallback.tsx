import "./ErrorFallback.css";

type Props = {
  error: any;
  resetErrorBoundary: () => void;
};

export const ErrorFallback: React.FC<Props> = ({ resetErrorBoundary }) => {
  return (
    <div className="error" role="alert">
      <p className="error__title">Something went wrong (ಥ﹏ಥ)</p>
      <pre className="error__descr">Please try again.</pre>
      <button className="btn error__btn" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};
