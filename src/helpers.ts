import {PAGESNAME} from './constants';

export const getPageName = (id: string | undefined) => {
  if (!id) {
    return 'All pages';
  }

  const page = PAGESNAME.find(page => page.id === id);
  return page ? page.title : "Unknown category";
}