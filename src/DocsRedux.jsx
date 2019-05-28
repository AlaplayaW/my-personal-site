import React, {useEffect, useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DocsRedux() {

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
} 

export default DocsReducs;