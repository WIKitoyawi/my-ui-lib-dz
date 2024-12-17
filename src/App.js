import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CryptoList from './components/CryptoList';
import SearchBar from './components/SearchBar';
import UpdateButton from './components/UpdateButton';
import useCryptoData from './hooks/useCryptoData';

function App() {
  const { data, updateData, searchTerm, setSearchTerm } = useCryptoData();

  return (
    <Container>
      <h1>Cryptocurrency Prices</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UpdateButton updateData={updateData} />
      <CryptoList data={data} searchTerm={searchTerm} />
    </Container>
  );
}

export default App;
