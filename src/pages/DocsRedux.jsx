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
          <React.Fragment key={item.objectID}>
          <a href={item.url}>{item.title}</a>
          <h4>{item.created_at}</h4>
          </React.Fragment>
      ))}
    </div>
  );
} 

export default DocsRedux;