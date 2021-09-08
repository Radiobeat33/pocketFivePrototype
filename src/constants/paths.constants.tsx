export const topNavList = [
  {
    title: 'Articles',
    stateName: 'articles',
    endpoint: '/articles',
    submenu: [
      { title: 'Features', stateName: 'features', endpoint: '/articles/features' },
      { title: 'Podcasts', stateName: 'podcasts', endpoint: '/articles/podcasts' },
    ],
  },
  {
    title: 'Rankings',
    stateName: 'rankings',
    endpoint: '/rankings',
    submenu: [
      {
        title: 'Online Poker Rankings',
        stateName: 'online-poker-rankings',
        endpoint: '/rankings/online-poker-rankings',
      },
      {
        title: 'PocketFives Leaderboards',
        stateName: 'pocketfives-leaderboards',
        endpoint: '/rankings/pocketfives-leaderboards',
      },
      { title: 'Earnings List', stateName: 'earnings-list', endpoint: '/rankings/earnings-list' },
      { title: 'Rankings FAQ', stateName: 'rankings-faq', endpoint: '/rankings/rankings-faq' },
    ],
  },
  {
    title: 'Staking',
    stateName: 'staking',
    endpoint: '/staking',
    submenu: [
      { title: 'Marketplace', stateName: 'marketplace', endpoint: '/staking/marketplace' },
      { title: 'Apply to Sell', stateName: 'apply-to-sell', endpoint: '/staking/apply-to-sell' },
      { title: 'Leaderboard', stateName: 'leaderboard', endpoint: '/staking/leaderboard' },
      { title: 'Staking FAQ', stateName: 'staking-faq', endpoint: '/staking/staking-faq' },
    ],
  },
  {
    title: 'Online Poker',
    stateName: 'onlinePoker',
    endpoint: '/online-poker',
    submenu: [{ title: 'Site Reviews', stateName: 'site-reviews', endpoint: '/' }],
  },
];

export const secondaryNavList = [
  { title: 'Discord', endpoint: '/discord' },
  { title: 'Marketplace', endpoint: '/staking/marketplace' },
  { title: 'Accolades', endpoint: '/accolades' },
  { title: 'Topical News', endpoint: '/topical-news' },
  { title: 'Podcasts', endpoint: '/articles/podcasts' },
  { title: 'National Community', endpoint: '/national-community' },
  { title: 'Coaches', endpoint: '/coaches' },
];

export default {
  topNavList,
  secondaryNavList,
};
