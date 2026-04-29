import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        { provide: MatSnackBar, useValue: snackBar },
      ],
    });
    service = TestBed.inject(SnackbarService);
  });

  it('success roept .open met success panelClass', () => {
    service.success('Klaar');
    const args = snackBar.open.calls.mostRecent().args;
    expect(args[0]).toBe('Klaar');
    expect(args[2]?.panelClass).toContain('futsal-notification-success');
    expect(args[2]?.duration).toBe(3000);
  });

  it('error gebruikt langere duration', () => {
    service.error('Mislukt');
    expect(snackBar.open.calls.mostRecent().args[2]?.duration).toBe(5000);
  });

  it('info heeft middelmatige duration', () => {
    service.info('Test');
    expect(snackBar.open.calls.mostRecent().args[2]?.duration).toBe(4000);
  });
});
