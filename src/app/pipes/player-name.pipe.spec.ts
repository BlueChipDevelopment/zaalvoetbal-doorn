import { TestBed } from '@angular/core/testing';
import { of, lastValueFrom } from 'rxjs';
import { PlayerNamePipe } from './player-name.pipe';
import { PlayerService } from '../services/player.service';

describe('PlayerNamePipe', () => {
  let pipe: PlayerNamePipe;
  let mockPlayerService: jasmine.SpyObj<PlayerService>;

  beforeEach(() => {
    mockPlayerService = jasmine.createSpyObj('PlayerService', ['getPlayerById']);
    TestBed.configureTestingModule({
      providers: [
        PlayerNamePipe,
        { provide: PlayerService, useValue: mockPlayerService },
      ],
    });
    pipe = TestBed.inject(PlayerNamePipe);
  });

  it('returnt lege string voor null', async () => {
    expect(await lastValueFrom(pipe.transform(null))).toBe('');
  });

  it('returnt lege string voor undefined', async () => {
    expect(await lastValueFrom(pipe.transform(undefined))).toBe('');
  });

  it('returnt naam voor bestaande id', async () => {
    mockPlayerService.getPlayerById.and.returnValue(of({ id: 5, name: 'Bob', position: 'Speler', actief: true }));
    expect(await lastValueFrom(pipe.transform(5))).toBe('Bob');
  });

  it('returnt lege string voor onbekende id', async () => {
    mockPlayerService.getPlayerById.and.returnValue(of(undefined));
    expect(await lastValueFrom(pipe.transform(999))).toBe('');
  });
});
