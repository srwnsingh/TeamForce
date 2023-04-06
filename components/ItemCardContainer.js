import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className='rounded-md border border-gray-300 space-y-2 py-3 px-3 shadow-md bg-white w-[182px] my-2'>
      <Image
        className='w-full h-40 rounded-md object-cover'
        source={{ uri: imageSrc }}
      />
      <Text className='text-[#428288] test-[18px] font-bold '>
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
