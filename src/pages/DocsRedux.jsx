import React, {useEffect, useState} from 'react';
import '../App.css';
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
    <div>
      {data.hits.map(item => (
          <>
          <a href={item.url} key={item.objectID}>{item.title}</a>
          <h4>{item.created_at}</h4>
          </>
      ))}
    </div>
  );
} 

export default DocsRedux;