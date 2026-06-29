import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SpelerDialogComponent } from './speler-dialog.component';
import { PlayerService } from '../../../../services/player.service';
import { StrippenkaartService } from '../../../../services/strippenkaart.service';
import { GameStatisticsService } from '../../../../services/game.statistics.service';
import { SnackbarService } from '../../../../services/snackbar.service';

describe('SpelerDialogComponent', () => {
  let dialogRef: jasmine.SpyObj<MatDialogRef<SpelerDialogComponent>>;
  let strippenkaart: jasmine.SpyObj<StrippenkaartService>;
  let playerService: jasmine.SpyObj<PlayerService>;

  function setup(data: any) {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    strippenkaart = jasmine.createSpyObj('StrippenkaartService',
      ['getBalance', 'getLedger', 'addStrips', 'correct', 'isSubscribed', 'setSubscription', 'refresh']);
    strippenkaart.getBalance.and.returnValue(of(0));
    strippenkaart.getLedger.and.returnValue(of([]));
    strippenkaart.correct.and.returnValue(of(undefined));
    strippenkaart.addStrips.and.returnValue(of(undefined));
    strippenkaart.isSubscribed.and.returnValue(of(false));
    playerService = jasmine.createSpyObj('PlayerService', ['updatePlayer']);
    playerService.updatePlayer.and.returnValue(of(undefined));
    const stats = { getCurrentSeason: () => of(null) };

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SpelerDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: data },
        { provide: PlayerService, useValue: playerService },
        { provide: StrippenkaartService, useValue: strippenkaart },
        { provide: GameStatisticsService, useValue: stats },
        { provide: SnackbarService, useValue: jasmine.createSpyObj('SnackbarService', ['error']) },
      ],
    });
    return TestBed.createComponent(SpelerDialogComponent).componentInstance;
  }

  it('onSave bewaart usesStrippenkaart in edit-modus (bugfix)', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 1, name: 'Bob', position: 'Speler', actief: true, usesStrippenkaart: true } });
    c.onSave();
    const arg = dialogRef.close.calls.mostRecent().args[0];
    expect(arg.player.usesStrippenkaart).toBeTrue();
    expect(arg.originalName).toBe('Bob');
  });

  it('applyTotal boekt het verschil als correctie', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 5, name: 'Bob', position: 'Speler', actief: true } });
    c.balance = 3;
    c.newTotal = 10;
    c.applyTotal();
    expect(strippenkaart.correct).toHaveBeenCalledWith(5, 7);
  });

  it('applyTotal doet niets als het totaal ongewijzigd is', () => {
    const c = setup({ mode: 'edit', originalName: 'Bob', player: { id: 5, name: 'Bob', position: 'Speler', actief: true } });
    c.balance = 8;
    c.newTotal = 8;
    c.applyTotal();
    expect(strippenkaart.correct).not.toHaveBeenCalled();
  });
});
