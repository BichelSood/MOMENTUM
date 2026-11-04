const REGISTRATIONS_KEY = 'momentum-registrations';
const isRegistration = (item) => item && typeof item.id === 'string' && typeof item.eventId === 'string' && typeof item.email === 'string' && typeof item.phone === 'string' && ['active', 'cancelled'].includes(item.status);
export function getRegistrations() {
  try { const records=JSON.parse(localStorage.getItem(REGISTRATIONS_KEY)||'[]'); return Array.isArray(records)?records.filter(isRegistration):[]; }
  catch { return []; }
}
export function saveRegistrations(records) { try { localStorage.setItem(REGISTRATIONS_KEY,JSON.stringify(records)); return true; } catch { return false; } }
export function addRegistration(record) { return saveRegistrations([...getRegistrations(),record]); }
export function findRegistrationById(id) { return getRegistrations().find((record)=>record.id===id); }
export function getRegistrationsForEvent(eventId) { return getRegistrations().filter((record)=>record.eventId===eventId&&record.status==='active'); }
export function getActiveRegistrationCount(eventId) { return getRegistrationsForEvent(eventId).length; }
export function cancelRegistration(id) {
  const records=getRegistrations();const record=records.find((item)=>item.id===id&&item.status==='active');if(!record)return false;record.status='cancelled';return saveRegistrations(records);
}
export function hasDuplicateRegistration(eventId,email,phone) {
  return getRegistrations().some((record)=>record.eventId===eventId&&record.status==='active'&&(record.email.toLowerCase()===email.toLowerCase()||record.phone===phone));
}
