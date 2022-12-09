import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {ApiPageApiPagesList, PageType} from "../../types";
import Page from "../../components/Page/Page";

const Pages = () => {
  const {pageName} = useParams();
  const [pages, setPages] = useState<PageType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      let url = '/pages.json';
      if (pageName) {
        url += `?orderBy="page"&equalTo="${pageName}"`;
      }
      const pagesResponse = await axiosApi.get<ApiPageApiPagesList>(url);
      const pages = pagesResponse.data;
      if (!pages) {
        return setPages([]);
      }

      const pagesArr = Object.keys(pages).map(id => {
        return {
          ...pages[id],
          id: id,
        }
      });

      setPages(pagesArr);
    } finally {
      setLoading(false);
    }

  }, [pageName]);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);

  let pagesList = (
    <>
      {pages.map(page => (
        <Page key={page.id} page={page}/>
      ))}
    </>
  );

  if (loading) {
    pagesList = (<p>Loading...</p>);
  }

  if (pages.length === 0) {
    pagesList = (
      <div className="alert alert-primary" role="alert">
        Not found
      </div>
    );
  }
  return (
    <div>
      {pagesList}
    </div>
  );
};

export default Pages;