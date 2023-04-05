import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <View className='flex-row items-center justify-between px-8 mt-6'>
        <View>
          <Text className='text-[40px] text-[#0B646B] font-bold'>Discover</Text>
          <Text className='text-[#527883] text-[36px]'>the beauty today</Text>
        </View>
        <View className='w-12 h-12 bg-gray-400 rounded-md'>
          <Image
            source={Avatar}
            className='w-full h-full rounded-md object-cover'
          />
        </View>
      </View>
      <View className='flex-row items-center bg-whites mx-4 rounded-xl py-1 px-4 shadow-lg mt-4'>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDoeTToGBH90wC-JIhxZREYHswO03CWS3A",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
