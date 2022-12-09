export interface ApiPage {
  page?: string;
  title: string;
  content: string;
}

export interface ApiPageApiPagesList {
  [id: string] : ApiPage;
}

export interface PageType extends ApiPage {
  id: string;
}
