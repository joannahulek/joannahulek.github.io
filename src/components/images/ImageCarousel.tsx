import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
    images: string[];
    alt: string;
    title: string;
    width: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, title, width }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <img
            src={images[currentImageIndex]}
            alt={alt}
            title={title}
            width={width}
            loading="lazy"
        />
    );
};

export default ImageCarousel;