import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Suche nach:', searchQuery);
    // Hier Suchlogik implementieren
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <svg 
            className="search-icon" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" strokeWidth="2"/>
          </svg>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Adressen, Tokens, NFTs suchen..."
            className="search-input"
            aria-label="Suche"
          />
          
          {searchQuery && (
            <button 
              type="button"
              onClick={handleClear}
              className="clear-button"
              aria-label="Suche zurücksetzen"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18" strokeWidth="2"/>
                <path d="M6 6L18 18" strokeWidth="2"/>
              </svg>
            </button>
          )}
        </div>
        
        <button 
          type="submit" 
          className="search-submit"
          disabled={!searchQuery.trim()}
        >
          Suchen
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
