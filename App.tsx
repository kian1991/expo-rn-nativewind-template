import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import './src/global.css';

export default function App() {
	return (
		<View className='flex-1 justify-center items-center'>
			<Text className='text-3xl tracking-tighter font-bold'>shadcn/ui</Text>
			<StatusBar style='auto' />
			<Pressable className='bg-black h-9 px-4 py-2 rounded-md mt-4'>
				<Text className='text-white text-sm font-semibold tracking-tight'>BUTTON</Text>
			</Pressable>
		</View>
	);
}
