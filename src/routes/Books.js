import React from 'react';
import Book from '../components/book';

class Dom extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', padding: 20, boxSizing: 'border-box' }}>
        <Book />
      </div>
    );
  }
}

export default Dom;
