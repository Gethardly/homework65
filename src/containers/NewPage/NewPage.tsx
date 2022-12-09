import React from 'react';
import {ApiPage} from '../../types';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';
import PagesForm from "../../components/PagesForm/PagesForm";

const NewQuote = () => {
  const navigate = useNavigate();
  const createPage = async (quote: ApiPage) => {
    await axiosApi.post('/pages.json', quote);
    navigate('/');
  };
  return (
    <div>
      <PagesForm onSubmit={createPage}/>
    </div>
  );
};

export default NewQuote;