export type TierName = 'brons' | 'zilver' | 'goud';

export interface PlayerTier {
  name: TierName;
  gradient: string;
  textColor: string;
}

const TIERS: Record<TierName, Omit<PlayerTier, 'name'>> = {
  brons:  { gradient: 'linear-gradient(160deg, #c98e4f 0%, #6b4214 100%)', textColor: '#fff8ec' },
  zilver: { gradient: 'linear-gradient(160deg, #d8d8d8 0%, #707070 100%)', textColor: '#1a1a1a' },
  goud:   { gradient: 'linear-gradient(160deg, #f0d370 0%, #997820 100%)', textColor: '#23180a' },
};

export function getPlayerTier(rating: number): PlayerTier {
  let name: TierName;
  if (rating >= 7.0) name = 'goud';
  else if (rating >= 5.5) name = 'zilver';
  else name = 'brons';
  return { name, ...TIERS[name] };
}
