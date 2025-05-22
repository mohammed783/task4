import React from 'react';
import './Most.css';
import loca from'../../assets/loca.png'

type TrendingSectionProps = {
  images: string[];
};

const TrendingSection: React.FC<TrendingSectionProps> = ({ images }) => {
  return (
    <section className="trending-section">
      <h3 className="section-title">Most Trending</h3>
      <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="property-grid">
        {images.map((img, idx) => (
          <div key={idx} className="property-card">
            <img src={img} alt={`Property ${idx + 1}`} className="property-image" />
            <div className="property-info">
              <h3 className="property-price">$300000</h3>
              <p className="property-title">Luxury Apartment in California</p>
              <p className="property-location"><img src={loca} alt="" /> 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
