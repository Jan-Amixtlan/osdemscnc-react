import React, { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ items = [], className = '', isLoading = false }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Datos de navegación por defecto si no se pasan items
  const defaultItems = [
    { text: 'HOME', href: '/', active: true },
    { 
      text: 'COMPANY', 
      href: '/nosotros', 
      hasDropdown: true,
      dropdownItems: [
        { text: 'ABOUT US', href: '/about-us' },
        { text: 'HISTORY', href: '/history' },
        { text: 'NEWS', href: 'https://www.manufacturingtomorrow.com/' }
      ]
    },
    { text: 'SERVICES', href: '/servicios' },
    { text: 'AMR', href: '/amr' },
    { text: 'INDUSTRIES', href: '/industries' },
    { text: 'CARRER', href: '/contacto' }
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDropdownClick = (e, item) => {
    if (item.hasDropdown) {
      e.preventDefault();
      // Toggle dropdown instead of navigating
      setActiveDropdown(activeDropdown === navigationItems.indexOf(item) ? null : navigationItems.indexOf(item));
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Cargando navegación...</div>;
  }

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <ul className={styles.navigationList}>
        {navigationItems.map((item, index) => (
          <li 
            key={index} 
            className={styles.navigationItem}
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            {item.external ? (
              <button 
                onClick={() => handleExternalLink(item.href)}
                className={`${styles.navigationLink} ${item.active ? styles.active : ''}`}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  font: 'inherit',
                  color: 'inherit',
                  padding: 'inherit'
                }}
              >
                {item.text}
              </button>
            ) : (
              <a 
                href={item.hasDropdown ? '#' : item.href}
                className={`${styles.navigationLink} ${item.active ? styles.active : ''}`}
                onClick={(e) => handleDropdownClick(e, item)}
              >
                {item.text}
                {item.hasDropdown && <span className={styles.dropdownArrow}> ▼</span>}
              </a>
            )}
            
            {item.hasDropdown && item.dropdownItems && activeDropdown === index && (
              <div className={styles.dropdown}>
                <ul className={styles.dropdownList}>
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex} className={styles.dropdownItem}>
                      {dropdownItem.external ? (
                        <button 
                          onClick={() => handleExternalLink(dropdownItem.href)}
                          className={styles.dropdownLink}
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                            padding: 0,
                            font: 'inherit',
                            color: 'inherit'
                          }}
                        >
                          {dropdownItem.text}
                        </button>
                      ) : (
                        <a 
                          href={dropdownItem.href}
                          className={styles.dropdownLink}
                        >
                          {dropdownItem.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
