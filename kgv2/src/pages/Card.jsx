import React from 'react';
import { Button, Image, Text, VStack } from '@chakra-ui/react';

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <VStack>
       <div className='flex'>
      <Text className='p-1' >{amount}</Text>
      <Button onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
      </div>
    </VStack>
  );
}

export default Card;