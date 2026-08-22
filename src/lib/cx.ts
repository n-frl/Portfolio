/** Concatene des classes conditionnelles sans dependance externe. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
