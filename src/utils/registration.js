export function createRegistrationReference() {
  const id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
  return `MOM-${id.slice(0, 8).toUpperCase()}`;
}
