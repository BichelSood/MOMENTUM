import { useEffect } from 'react';
import { Check, CircleAlert, Info, X } from 'lucide-react';
import { useToast } from '../context/ToastContext.jsx';
const icons = { success: Check, error: CircleAlert, info: Info };
export function Toast() {
  const { toast, dismiss } = useToast();
  useEffect(() => { if (!toast) return undefined; const id = setTimeout(dismiss, 4500); return () => clearTimeout(id); }, [toast, dismiss]);
  if (!toast) return <div className="toast-host" aria-live="polite" aria-atomic="true"/>;
  const Icon = icons[toast.type] || Info;
  return <div className={`toast-host toast-${toast.type}`} role="status" aria-live="polite" aria-atomic="true" key={toast.key}><Icon size={18}/><span>{toast.message}</span><button type="button" aria-label="Dismiss notification" onClick={dismiss}><X size={16}/></button></div>;
}
