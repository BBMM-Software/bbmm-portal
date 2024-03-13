import React, { useState, useEffect } from 'react';
import { TbHandFinger } from 'react-icons/tb';
import { TbHandClick } from 'react-icons/tb'; 

const ContinuousTransitionIcon = () => {
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsClicking(prevIsClicking => !prevIsClicking);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const IconComponent = isClicking ? TbHandClick : TbHandFinger; 

  return <IconComponent fontSize={32}/>;
};

export default ContinuousTransitionIcon;