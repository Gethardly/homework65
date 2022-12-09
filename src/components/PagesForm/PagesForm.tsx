import React, {useState} from 'react';
import {ApiPage} from '../../types';
import {PAGESNAME} from '../../constants';

type ChangedElements = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement;

interface Props {
  onSubmit: (page: ApiPage) => void;
}

const PagesForm: React.FC<Props> = ({onSubmit}) => {
  const [page, setPage] = useState<ApiPage>({
    page: '',
    title: '',
    content: '',
  });

  const onFieldChange = (event: React.ChangeEvent<ChangedElements>) => {
    const {name, value} = event.target;
    setPage(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({...page});
  };

  const pagesName = [...PAGESNAME];
  pagesName.splice(PAGESNAME.length-1);
  return (
    <form onSubmit={onFormSubmit}>
      <h4>Edit page</h4>
      <div className="form-group mb-2">
        <label htmlFor="page">Page</label>
        <select
          name="page" id="page"
          className="form-select"
          required
          value={page.page}
          onChange={onFieldChange}
        >
          <option value="" disabled>Please select a page</option>
          {pagesName.map(page => (
            <option key={page.id} value={page.id}>
              {page.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"
               className="form-control"
               required
               value={page.title}
               onChange={onFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="text">Content</label>
        <textarea
          id="content" name="content"
          className="form-control"
          value={page.content}
          onChange={onFieldChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default PagesForm;