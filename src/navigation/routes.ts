export const groupRoutes = {
  CRYPTO: '/crypto/list',
  CRYPTO_MANAGEMENT: '/crypto/asset',
  GIFT_CARD_MANAGEMENT: '/gift-card',
  GIFTCARDS: '/giftcards',
  CONFIG: '/config',
};

const dashboard = '/dashboard';

export default Object.freeze({
  // AUTH PAGES
  HOME_PAGE: '/',
  LOGIN_PAGE: '/login',
  REGISTER_PAGE: '/register',
  DASHBOARD_LAYOUT: dashboard,
  TRANSACTIONS_PAGE: dashboard + '/transactions',
  PROFILE_PAGE: dashboard + '/profile',
});
