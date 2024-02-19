// IfoodLinksContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IfoodLink from './IfoodLink';

const IfoodLinksContainer = () => {
  const [ifoodLinks, setIfoodLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/ifoodLinks'); // Replace with your json-server endpoint
        setIfoodLinks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div className="landing-v2-ifood-links">{ifoodLinks.map(link => <IfoodLink link={link} key={link.id} />)}</div>;
};

export default IfoodLinksContainer;
