export interface GameHistoryEntry {
  result: number; // 3=win, 2=tie, 1=loss
  date: Date | null;
  playerIds: string[];
  teammates: string[];
  opponents: string[];
}

export interface Player {
  id?: number;
  name: string;
  position: string;
  rating: number;
  gamesPlayed: number;
  totalPoints: number;
  wins: number;
  losses: number;
  ties: number;
  winRatio: number;
  gameHistory: GameHistoryEntry[];
  zlatanPoints: number;
  ventielPoints: number;
  actief: boolean;
  pushSubscription?: string; // JSON-stringified push subscription
  pushPermission?: boolean; // true if user gave permission
}

