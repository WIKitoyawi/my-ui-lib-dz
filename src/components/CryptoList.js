import React, { useState } from 'react';
import { Accordion, Card, useAccordionButton, Tooltip, OverlayTrigger } from 'react-bootstrap';

function CustomToggle({ children, eventKey, expanded }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <Card.Header 
      onClick={decoratedOnClick}
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white', // Ensures header background is white
        cursor: 'pointer' // Better UX indicating it's clickable
      }}
    >
      {children}
      <span>{expanded ? '-' : '+'}</span> {/* Toggle between plus and minus */}
    </Card.Header>
  );
}

function CryptoList({ data, searchTerm }) {
  const [open, setOpen] = useState('');
  const toggleOpen = (id) => setOpen(open === id ? '' : id);

  const filteredData = data.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Accordion defaultActiveKey="0">
      {filteredData.map(crypto => (
        <Card key={crypto.id} style={{ backgroundColor: 'white', border: '1px solid #ccc', marginBottom: '5px' }}>
          <CustomToggle eventKey={crypto.id} expanded={open === crypto.id} onClick={() => toggleOpen(crypto.id)}>
            {crypto.name} ({crypto.symbol})
          </CustomToggle>
          <Accordion.Collapse eventKey={crypto.id}>
            <Card.Body>
              <div><strong>Symbol:</strong> {crypto.symbol}</div>
              <div><strong>Price USD:</strong> {crypto.price_usd}</div>
              <div><strong>Price BTC:</strong> {crypto.price_btc}</div>
              <div>
                <strong>Market Cap USD:</strong>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${crypto.id}`}>
                      The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price.
                    </Tooltip>
                  }
                >
                  <span style={{ cursor: 'help' }}>{crypto.market_cap_usd}</span>
                </OverlayTrigger>
              </div>
              <div style={{ color: crypto.percent_change_24h.startsWith('-') ? 'red' : 'green' }}>
                <strong>24h Change:</strong> {crypto.percent_change_24h}%
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default CryptoList;
