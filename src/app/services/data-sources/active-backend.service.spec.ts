import { TestBed } from '@angular/core/testing';
import { ActiveBackendService } from './active-backend.service';

describe('ActiveBackendService', () => {
  beforeEach(() => {
    localStorage.removeItem('zd-backend');
  });

  afterEach(() => {
    localStorage.removeItem('zd-backend');
  });

  it('valt terug op environment.dataSource (default sheets in test) als geen localStorage', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });

  it('localStorage "supabase" wint van environment', () => {
    localStorage.setItem('zd-backend', 'supabase');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('supabase');
  });

  it('localStorage "sheets" wint van environment', () => {
    localStorage.setItem('zd-backend', 'sheets');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });

  it('ongeldige localStorage-waarde valt terug op environment', () => {
    localStorage.setItem('zd-backend', 'rubbish');
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ActiveBackendService);
    expect(service.current).toBe('sheets');
  });
});
