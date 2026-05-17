import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};
