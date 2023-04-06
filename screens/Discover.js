import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

const Discover = () => {
  const navigation = useNavigation();
  const [type, settype] = useState("restaurants");

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
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder='Search'
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyDoeTToGBH90wC-JIhxZREYHswO03CWS3A",
            language: "en",
          }}
        />
      </View>
      <ScrollView>
        <View className='flex-row items-center justify-between px-8 mt-8'>
          <MenuContainer
            key={"hotel"}
            title='Hotel'
            imageSrc={Hotels}
            type={type}
            setType={settype}
          />
          <MenuContainer
            key={"attractions"}
            title='Attractions'
            imageSrc={Attractions}
            type={type}
            setType={settype}
          />
          <MenuContainer
            key={"restaurants"}
            title='Restaurants'
            imageSrc={Restaurants}
            type={type}
            setType={settype}
          />
        </View>
        <View>
          <View className='flex-row items-center justify-between px-4 mt-8'>
            <Text className='text-[#2C7379] text-[28px] font-bold'>
              Top Tips
            </Text>
            <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
              <Text className='text-[#A0C4C7] text-[20px] font-bold'>
                Explore
              </Text>
              <FontAwesome name='long-arrow-right' size={24} color='#A0C4C7' />
            </TouchableOpacity>
          </View>
          <View className='px-4 mt-8 flex-row items-center justify-evenly flex-wrap'>
            <ItemCardContainer
              key={"101"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2023/03/28/17/34/girl-7883816_960_720.jpg"
              }
              title='Something very big'
              location='Doha'
            />
            <ItemCardContainer
              key={"102"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg"
              }
              title='Another'
              location='Dubai'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
