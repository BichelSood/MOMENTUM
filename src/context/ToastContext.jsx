import { createContext, useCallback, useContext, useMemo, useState } from 'react';
const ToastContext = createContext(null);
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const notify = useCallback((message, type = 'info') => {
    setToast({ message, type, key: Date.now() + Math.random() });
  }, []);
  const value = useMemo(() => ({ toast, notify, dismiss: () => setToast(null) }), [toast, notify]);
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}
export const useToast = () => useContext(ToastContext);
