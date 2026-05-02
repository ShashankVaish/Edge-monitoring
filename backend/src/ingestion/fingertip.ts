export function fingerprint(action: string, input?: string): string {
  // Input ko simplify karo
  let inputPart = '';
  if (input) {
    // Sirf filename lo, path nahi
    const base = input.split('/').pop() ?? input;
    // Numbers aur UUIDs hata do
    const clean = base
      .toLowerCase()
      .replace(/[0-9a-f]{8}-[0-9a-f-]{27}/g, '') // UUID
      .replace(/\d+/g, '')                        // digits
      .trim();
    // Pehle 5 words lo
    inputPart = clean.split(/\s+/).slice(0, 5).join(' ');
  }
  return `${action.toLowerCase()}:${inputPart}`;
}