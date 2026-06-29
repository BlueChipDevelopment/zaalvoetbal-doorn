import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { StrippenkaartService } from './strippenkaart.service';
import { StrippenkaartDataSource } from './data-sources/strippenkaart-data-source';
import { StripTransaction } from '../interfaces/IStrippenkaart';

describe('StrippenkaartService', () => {
  let service: StrippenkaartService;
  let ds: jasmine.SpyObj<StrippenkaartDataSource>;

  const txs: StripTransaction[] = [
    { id: 1, playerId: 3, matchId: 7, amount: -1, reason: 'wedstrijd' },
    { id: 2, playerId: 3, matchId: null, amount: 10, reason: 'kaart gekocht' },
    { id: 3, playerId: 5, matchId: 8, amount: -1, reason: 'wedstrijd' },
  ];

  beforeEach(() => {
    ds = jasmine.createSpyObj<StrippenkaartDataSource>('StrippenkaartDataSource',
      ['getAllTransactions', 'addTransaction', 'getSubscriptions', 'setSubscription', 'applyMatchDeductions']);
    ds.getAllTransactions.and.returnValue(of(txs));
    ds.addTransaction.and.returnValue(of(undefined));
    ds.getSubscriptions.and.returnValue(of([3]));
    ds.setSubscription.and.returnValue(of(undefined));
    TestBed.configureTestingModule({
      providers: [
        StrippenkaartService,
        { provide: StrippenkaartDataSource, useValue: ds },
      ],
    });
    service = TestBed.inject(StrippenkaartService);
  });

  it('getBalance sommeert mutaties van de speler', async () => {
    expect(await lastValueFrom(service.getBalance(3))).toBe(9);  // -1 + 10
    expect(await lastValueFrom(service.getBalance(5))).toBe(-1);
    expect(await lastValueFrom(service.getBalance(99))).toBe(0); // geen mutaties
  });

  it('getLedger geeft alleen de mutaties van de speler', async () => {
    const ledger = await lastValueFrom(service.getLedger(3));
    expect(ledger.map(t => t.id)).toEqual([1, 2]);
  });

  it('addStrips voegt een positieve "kaart gekocht"-mutatie toe', async () => {
    await lastValueFrom(service.addStrips(3, 10));
    expect(ds.addTransaction).toHaveBeenCalledWith(3, 10, 'kaart gekocht');
  });

  it('correct voegt een "correctie"-mutatie toe', async () => {
    await lastValueFrom(service.correct(3, -2));
    expect(ds.addTransaction).toHaveBeenCalledWith(3, -2, 'correctie');
  });

  it('isSubscribed checkt het seizoen', async () => {
    expect(await lastValueFrom(service.isSubscribed(3, '2024-2025'))).toBeTrue();
    expect(await lastValueFrom(service.isSubscribed(9, '2024-2025'))).toBeFalse();
  });
});
