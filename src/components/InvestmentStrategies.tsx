import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const InvestmentStrategies: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const strategies = t('strategies.items');
  const labels = t('strategies.labels');
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? strategies.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= strategies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    if (index <= strategies.length - 1) {
      setCurrentIndex(index);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    // Clear existing timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    // Scroll right (positive deltaX or deltaY)
    if (e.deltaX > 0 || e.deltaY > 0) {
      goToNext();
    }
    // Scroll left (negative deltaX or deltaY)
    else if (e.deltaX < 0 || e.deltaY < 0) {
      goToPrevious();
    }

    // Debounce wheel events to prevent rapid firing
    wheelTimeoutRef.current = setTimeout(() => {}, 500);
  };

  useEffect(() => {
    const carousel = carouselContainerRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
      return () => carousel.removeEventListener('wheel', handleWheel);
    }
  }, [currentIndex, strategies.length]);

  return (
    <section id="strategies" className="strategies-section">
      <div className="container">
        <div className="section-header">
          <h1>{t('strategies.title')}</h1>
          <p className="strategies-intro">
            {t('strategies.intro')}
          </p>
        </div>

        <div className="carousel-container" ref={carouselContainerRef}>
          <div className="carousel-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
              {strategies.map((strategy: any, index: number) => (
                <div key={index} className="carousel-slide">
                  <div className="strategy-card">
                    <div className="strategy-image">
                      {strategy.isImageUrl ? (
                        <img src={strategy.image} alt={strategy.title} className="strategy-img" />
                      ) : (
                        <span className="image-emoji">{strategy.image}</span>
                      )}
                    </div>

                    <div className="strategy-header">
                      <h3>{strategy.title}</h3>
                    </div>

                    <div className="strategy-details">
                      <p className="strategy-description">
                        <strong>{labels.focus}:</strong> {strategy.focus}
                      </p>

                      <p className="strategy-description">
                        <strong>{labels.strategy}:</strong> {strategy.strategy}
                      </p>

                      <p className="strategy-description">
                        <strong>{labels.riskLevel}:</strong> <span className="risk-level">{strategy.riskLevel}</span>
                      </p>

                      <p className="strategy-description">
                        <strong>{labels.goal}:</strong> {strategy.goal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {strategies.map((_: any, index: number) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'page' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
