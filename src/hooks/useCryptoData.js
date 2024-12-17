import { useState, useEffect } from 'react';
import axios from 'axios';

function useCryptoData() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coinlore.net/api/tickers/');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return { data, updateData: fetchData, searchTerm, setSearchTerm };
}

export default useCryptoData;
