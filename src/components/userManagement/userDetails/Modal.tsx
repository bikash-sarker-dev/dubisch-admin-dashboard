import { AlertCircle, X } from "lucide-react";
interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText: string;
  confirmColor: "red" | "orange";
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  message,
  confirmText,
  confirmColor,
  onConfirm,
}) => {
  if (!show) return null;

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="animate-scaleIn w-full max-w-md rounded-xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`rounded-full p-1.5 sm:p-2 ${confirmColor === "red" ? "bg-red-100" : "bg-orange-100"}`}
            >
              <AlertCircle
                className={`h-5 w-5 sm:h-6 sm:w-6 ${confirmColor === "red" ? "text-red-600" : "text-orange-600"}`}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 transition-colors hover:text-gray-600"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mb-5 pl-0 text-sm text-gray-600 sm:mb-6 sm:pl-11 sm:text-base">
          {message}
        </p>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            onClick={onClose}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto sm:px-5"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`w-full rounded-lg px-4 py-2.5 font-medium text-white transition-colors sm:w-auto sm:px-5 ${
              confirmColor === "red"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
