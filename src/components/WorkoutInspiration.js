// src/components/WorkoutInspiration.js
import React from 'react';
import styled from 'styled-components';

const WorkoutContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  margin: 20px 0;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImageItem = styled.div`
  width: 45%;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const WorkoutInspiration = () => {
  return (
    <WorkoutContainer>
      <Title>Daily Workout Inspiration</Title>
      <ImageContainer>
        <ImageItem>
          <Image src="/mnt/data/powerful-stylish-bodybuilder-with-tattoo-his-arm-posing-with-dumbbells-studio-isolated-dark-background.jpg" alt="Bodybuilder with Dumbbells" />
          <p>Bodybuilder with Dumbbells</p>
        </ImageItem>
        <ImageItem>
          <Image src="/mnt/data/gorgeous-young-sports-woman-make-sport-exercises.jpg" alt="Fitness Woman in Action" />
          <p>Fitness Woman in Action</p>
        </ImageItem>
      </ImageContainer>
    </WorkoutContainer>
  );
};

export default WorkoutInspiration;
