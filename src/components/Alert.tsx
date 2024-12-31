import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={onClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
