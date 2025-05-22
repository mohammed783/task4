import React, { useState } from 'react';
import './Best.css';

type RealEstateDealsProps = {
  residential: string[];
  commercial: string[];
  agriculture: string[];
  industrial: string[];
};

const categories = ['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property'] as const;
type Category = typeof categories[number];

const RealEstateDeals: React.FC<RealEstateDealsProps> = ({ residential, commercial, agriculture, industrial }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Residential Property');

  const getImages = () => {
    switch (activeCategory) {
      case 'Residential Property': return residential;
      case 'Commercial Property': return commercial;
      case 'Agriculture Property': return agriculture;
      case 'Industrial Property': return industrial;
    }
  };

  return (
    <section className="deals-section">
      <h2 className="section-title">Best Real Estate Deals</h2>
      <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {getImages().map((img, idx) => (
          <div key={idx} className="property-card">
            <img src={img} alt={`Property ${idx + 1}`} className="property-image" />
            <div className="badges">
              <span className="badge">Featured</span>
              <span className="badge">3D</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealEstateDeals;
