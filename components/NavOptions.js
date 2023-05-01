import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function NavOptions() {
	const navigation = useNavigation();

	return (
		<FlatList
			data={navData}
			horizontal
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)}
					className="pr-2 pl-6 pt-4 pb-8 bg-gray-200 mr-2 mb-5 w-40 rounded-md"
				>
					<View className="items-center">
						<Image
							source={{ uri: item.image }}
							style={{
								width: 120,
								height: 120,
								resizeMode: 'contain',
							}}
						/>

						<Text className="mt-2 text-lg font-bold">
							{item.title}
						</Text>

						<Icon
							className="p-2 bg-black rounded-full w-10 mt-6"
							type="antdesign"
							color="white"
							name="arrowright"
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
}

export const navData = [
	{
		id: '123',
		title: 'Get a ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen',
	},
	{
		id: '456',
		title: 'Order Food',
		image: 'https://links.papareact.com/28w',
		screen: 'EatsScreen',
	},
];
