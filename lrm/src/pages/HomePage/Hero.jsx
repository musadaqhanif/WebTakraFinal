import React from 'react';

const HeroSection = () => {
  // Styles defined inline without modules
  const styles = {
    heroSection: {
      position: 'relative',
      backgroundColor: '#1a2f38',
      color: 'white',
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3))',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: 'calc(80px + 2rem) 1rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem'
    },
    heading: {
      fontSize: 'min(max(2rem, 5vw), 3.5rem)',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      textAlign: 'center',
      margin: 0,
      padding: '0 1rem'
    },
    paragraph: {
      fontSize: 'min(max(1rem, 2.5vw), 1.3rem)',
      lineHeight: 1.6,
      opacity: 0.9,
      textAlign: 'center',
      maxWidth: 'min(90%, 600px)',
      margin: '0 auto',
      padding: '0 1rem'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center'
    },
    primaryBtn: {
      padding: '0.8rem 2rem',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      backgroundColor: '#E76F51',
      color: 'white'
    },
    secondaryBtn: {
      padding: '0.8rem 2rem',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      backgroundColor: '#2A9D8F',
      color: 'white'
    },
    searchForm: {
      width: 'min(90%, 600px)',
      margin: '2rem auto 0'
    },
    searchContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      borderRadius: '100px',
      padding: '0.5rem',
      gap: '0.5rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    },
    searchInput: {
      flex: 1,
      height: '100%',
      border: 'none',
      background: 'none',
      padding: '0.8rem 1.2rem',
      fontSize: '1rem',
      color: '#333',
      outline: 'none',
      minWidth: 0
    },
    searchButton: {
      backgroundColor: '#2A9D8F',
      color: 'white',
      border: 'none',
      padding: '0.8rem 1.5rem',
      borderRadius: '100px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would go here
  };

  return (
    <section style={styles.heroSection}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={styles.heading}>Welcome to Learning Management System</h1>
        <p style={styles.paragraph}>Explore the Course Here</p>
        <div style={styles.heroButtons}>
          {/* <button style={styles.primaryBtn}>Browse Items</button>
          <button style={styles.secondaryBtn}>List an Item</button> */}
        </div>
        <div style={styles.searchForm}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for items..."
              style={styles.searchInput}
            />
            <button 
              onClick={handleSearch} 
              style={styles.searchButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;