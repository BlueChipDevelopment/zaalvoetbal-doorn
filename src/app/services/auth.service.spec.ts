import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { PlayerDataSource } from './data-sources/player-data-source';

describe('AuthService.resolveIsAdmin', () => {
  let service: AuthService;
  let players: jasmine.SpyObj<PlayerDataSource>;

  beforeEach(() => {
    players = jasmine.createSpyObj<PlayerDataSource>('PlayerDataSource', ['getAll', 'add', 'update', 'isAdminEmail']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: {} },
        { provide: PlayerDataSource, useValue: players },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('true voor een env-whitelist e-mail zonder DB-call', async () => {
    const result = await lastValueFrom(service.resolveIsAdmin('cs.de.kok@gmail.com'));
    expect(result).toBeTrue();
    expect(players.isAdminEmail).not.toHaveBeenCalled();
  });

  it('true als de DB de e-mail als admin meldt', async () => {
    players.isAdminEmail.and.returnValue(of(true));
    const result = await lastValueFrom(service.resolveIsAdmin('iemand@example.com'));
    expect(result).toBeTrue();
    expect(players.isAdminEmail).toHaveBeenCalledWith('iemand@example.com');
  });

  it('false als noch env noch DB matcht', async () => {
    players.isAdminEmail.and.returnValue(of(false));
    const result = await lastValueFrom(service.resolveIsAdmin('iemand@example.com'));
    expect(result).toBeFalse();
  });

  it('false (en geen DB-call) bij lege e-mail', async () => {
    const result = await lastValueFrom(service.resolveIsAdmin(null));
    expect(result).toBeFalse();
    expect(players.isAdminEmail).not.toHaveBeenCalled();
  });
});
