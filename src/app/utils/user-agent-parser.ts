/**
 * Vertaalt een browser user-agent string naar een leesbare "<browser> op <os>" string.
 * Returnt 'Onbekend' bij lege/null/onbekende input.
 *
 * Volgorde van detectie is belangrijk:
 *  - Edge moet vóór Chrome (Edg/ string staat ook 'Chrome' in)
 *  - iPhone vóór Mac (iPhone-UA bevat 'Mac OS X')
 *  - Android vóór Linux
 */
export function parseUserAgent(ua: string | null | undefined): string {
  if (!ua) return 'Onbekend';

  let browser: string | null = null;
  if (/\bEdg\//.test(ua)) browser = 'Edge';
  else if (/\bChrome\//.test(ua)) browser = 'Chrome';
  else if (/\bFirefox\//.test(ua)) browser = 'Firefox';
  else if (/\bSafari\//.test(ua) && /\bVersion\//.test(ua)) browser = 'Safari';

  let os: string | null = null;
  if (/iPhone|iPod/.test(ua)) os = 'iPhone';
  else if (/iPad/.test(ua)) os = 'iPad';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/Windows NT/.test(ua)) os = 'Windows';
  else if (/Mac OS X/.test(ua)) os = 'Mac';
  else if (/Linux/.test(ua)) os = 'Linux';

  if (!browser || !os) return 'Onbekend';
  return `${browser} op ${os}`;
}
