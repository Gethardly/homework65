import React from 'react';
import {PageType} from "../../types";

interface Props {
  page: PageType;
}

const Page: React.FC<Props> = ({page}) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h2>{page.title}</h2>
        <p>{page.content}</p>
      </div>
    </div>
  );
};

export default Page;