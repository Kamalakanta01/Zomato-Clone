import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

const carouselItems = [
  // ... (your carousel items)
  {
    imageSrc: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    alt: "1",
    name: "Pizza"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    alt: "2",
    name: "Cake"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    alt: "3",
    name: "Biriyani"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    alt: "4",
    name: "Thali"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    alt: "5",
    name: "Burger"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    alt: "6",
    name: "Fried Rice"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    alt: "7",
    name: "Dosa"
  },
  {
    imageSrc: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    alt: "8",
    name: "North Indian"
  },
];

const MultiCarousel = () => {
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
        <Text fontSize={"2rem"} ml={'-65%'} mb={'5%'}>Inspiration for your first order</Text>
        <div style={styles.carouselWrapper}>
          <div style={{ ...styles.carouselList, transform: `translateX(-${currentIndex * 16.66}%)` }}>
            {/* Loop through carouselItems and create carousel items */}
            {carouselItems.map((item, index) => (
              <div key={index} style={styles.carouselItem}>
                <img src={item.imageSrc} alt={item.alt} style={styles.image} />
                {/* <p>{item.name}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <Button
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
          </Button>
          <Button
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
    backgroundColor: "#f8f8f8"
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

export default MultiCarousel;