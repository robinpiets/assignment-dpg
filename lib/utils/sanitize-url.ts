/**
 * Create clean URLs / slugs
 */
export const sanitizeUrl = (url: string = ''): string =>
  url
    // replace unwanted characters with a space
    .replace(/['"`´‘’!.&_\-\+]+/gi, ' ')
    .trim()
    .toLowerCase()

    // replace all consecutive whitespace characters with a dash
    .replace(/\s+/gi, '-');
