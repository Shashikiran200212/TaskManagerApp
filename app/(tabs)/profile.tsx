import { View, Text, TouchableOpacity, Switch, Alert } from 'react-native'
import React, { useState } from 'react'

const Profile = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const handleOptionPress = (option: string) => {
        Alert.alert('Option Selected', `Your in: ${option}`)
    }

    const options = [
        '👱🏻‍♂️ Profile Settings',
        '🤝 Refer a friend',
        '🔒 Security',
        '🕥 Task History',
        '🤙🏻 Contact Us'
    ]

    return (
        <View className={`flex-1 ${darkMode ? 'bg-primary' : 'bg-white'}`}>
            {/* Header */}
            <View className="flex-row  bg-green-500 w-full justify-between items-center px-5 py-10">
                <Text className={`text-[30px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    My Account
                </Text>

                {/* Theme Switch */}
                <View className="flex-row items-center">
                    <Text className={`${darkMode ? 'text-white' : 'text-black'} text-xl mr-[-3] pb-1`}>
                        {darkMode ? '🌙' : '☀'}
                    </Text>
                    <Switch
                        value={darkMode}
                        onValueChange={toggleTheme}
                        thumbColor={darkMode ? '#AB8BFF' : '#CCC'}
                    />
                </View>
            </View>

            {/* Options */}
            {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleOptionPress(option)}>
                    <View className="m-5 mt-10 ml-10 h-10 w-[80%]">
                        <Text className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {option}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Profile
