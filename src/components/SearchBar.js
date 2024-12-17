import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search Cryptocurrencies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
