import React from 'react';
import {ApiPage} from '../../types';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';
import PagesForm from "../../components/PagesForm/PagesForm";

const NewQuote = () => {
  const navigate = useNavigate();
  const createPage = async (page: ApiPage) => {
    console.log(page);
    await axiosApi.put('/pages/' + page.page + '.json', page);
    navigate('/');
  };
  return (
    <div>
      <PagesForm onSubmit={createPage}/>
    </div>
  );
};

export default NewQuote;