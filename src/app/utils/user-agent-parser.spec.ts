import { parseUserAgent } from './user-agent-parser';

describe('parseUserAgent', () => {
  it('Chrome op Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36';
    expect(parseUserAgent(ua)).toBe('Chrome op Windows');
  });

  it('Safari op iPhone', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1';
    expect(parseUserAgent(ua)).toBe('Safari op iPhone');
  });

  it('Firefox op Mac', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0';
    expect(parseUserAgent(ua)).toBe('Firefox op Mac');
  });

  it('Edge op Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0';
    expect(parseUserAgent(ua)).toBe('Edge op Windows');
  });

  it('Chrome op Android', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36';
    expect(parseUserAgent(ua)).toBe('Chrome op Android');
  });

  it('lege string returnt Onbekend', () => {
    expect(parseUserAgent('')).toBe('Onbekend');
  });

  it('null/undefined returnt Onbekend', () => {
    expect(parseUserAgent(null)).toBe('Onbekend');
    expect(parseUserAgent(undefined)).toBe('Onbekend');
  });

  it('onbekende UA returnt Onbekend', () => {
    expect(parseUserAgent('Mozilla/5.0 (PlayStation 5)')).toBe('Onbekend');
  });
});
