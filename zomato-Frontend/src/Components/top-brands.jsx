import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const carouselItems = [
  // ... (your carousel items)
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/77d5b489b0ea3773900191553512b17d_1605103915.png",
    alt: "1",
    name: "Harilal's"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/b33aaf8c14823c85b0470fdce138fa81_1617931389.png",
    alt: "2",
    name: "Haldiram's"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png",
    alt: "3",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017785.png",
    alt: "4",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/c505604a9a42be5e6d3644e4a28acd84_1678081788.png",
    alt: "5",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/1005fb0c9e31b63b7c3f9e825d62a3d8_1605103758.png",
    alt: "6",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png",
    alt: "7",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/2f32014b8ff892ba75217e3ef050e1bd_1648017751.png",
    alt: "8",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/0c45494107cfd8e2d6e9bd855bfec678_1669019617.png",
    alt: "9",
    name: ""
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/brand_creatives/logos/1dc9563533730bc3829922fa50c9814b_1654533773.png",
    alt: "10",
    name: ""
  }
];

const TopBrands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 6 ? prevIndex : prevIndex + 1));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.carouselContainer}>
        <Text fontSize={"2rem"} ml={'-77%'} mb={'5%'}>Top brands for you</Text>
        <div style={styles.carouselWrapper}>
          <div style={{ ...styles.carouselList, transform: `translateX(-${currentIndex * 16.66}%)` }}>
            {/* Loop through carouselItems and create carousel items */}
            {carouselItems.map((item, index) => (
              <div key={index} style={styles.carouselItem}>
                <img src={item.imageSrc} alt={item.alt} style={styles.image} />
              </div>
            ))}
          </div>
        </div>
        <div style={styles.buttonContainer}>
          {currentIndex !== 0 && <Button
            position="absolute"
            top="70%"
            left="7"
            transform="translate(-50%, -50%)"
            borderRadius="50%"
            backgroundColor="white"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            width="32px"
            height="40px"
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon w={6} h={6} color="gray.600" />
          </Button>}
          {currentIndex !== carouselItems.length - 6 && <Button
            position="absolute"
            top="70%"
            right="7"
            transform="translate(50%, -50%)"
            borderRadius="50%"
            backgroundColor="white"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            width="32px"
            height="40px"
            onClick={handleNextClick}
            disabled={currentIndex === carouselItems.length - 6}
          >
            <ChevronRightIcon w={6} h={6} color="gray.600" />
          </Button>
          }
        </div>
      </div>
    </div>
  );
};

const styles = {
  // Styles for the overall page container
  pageContainer: {
    textAlign: 'center',
    padding: '2rem',
  },
  // Styles for the carousel container
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
  },
  // Styles for the wrapper that holds the carousel items
  carouselWrapper: {
    display: 'flex',
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
  },
  // Styles for the list of carousel items
  carouselList: {
    display: 'flex',
    width: `${carouselItems.length * 16.66}%`, /* Adjust to the total width of all items */
  },
  // Styles for individual carousel items
  carouselItem: {
    flex: '0 0 16.66%', /* Display 6 items at once */
    transition: 'transform 0.3s ease-in-out',
  },
  // Styles for images within carousel items
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '5%'
  },
};

export default TopBrands;