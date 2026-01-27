import { ReactNode } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
}

export function Modal({ isOpen, onClose, title, children, icon, actions }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="modal-glass rounded-2xl p-8 max-w-md w-full">
        {icon && <div className="flex justify-center mb-4">{icon}</div>}
        <h3 className="text-2xl font-display font-semibold text-center mb-4 text-slate-800 dark:text-white">
          {title}
        </h3>
        <div className="text-slate-600 dark:text-slate-300 text-center mb-6">{children}</div>
        {actions || (
          <Button onClick={onClose} className="w-full">
            OK
          </Button>
        )}
      </div>
    </div>
  );
}

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmText = 'Bestätigen',
  cancelText = 'Abbrechen',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="modal-glass rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <svg
            className="w-14 h-14 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-semibold text-center mb-4 text-slate-800 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-6">{message}</p>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={onCancel} className="flex-1">
            {cancelText}
          </Button>
          <Button variant="danger" onClick={onConfirm} className="flex-1">
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
