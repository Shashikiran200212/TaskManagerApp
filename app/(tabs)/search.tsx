import { View, Text, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';

const taskList = [
    { title: 'Workout', description: 'Morning cardio at the gym.', time: '06:00 - 07:00', status: 'Done 👍' },
    { title: 'Meditation', description: '15 minutes of mindfulness.', time: '07:15 - 07:30', status: 'Done 👍' },
    { title: 'Emails', description: 'Respond to pending emails.', time: '09:00 - 10:00', status: 'Not yet Done 👎' },
    { title: 'Team Meeting', description: 'Daily stand-up with the dev team.', time: '10:30 - 11:00', status: 'Done 👍' },
    { title: 'Code Review', description: 'Review PRs on GitHub.', time: '11:00 - 12:30', status: 'Not yet Done 👎' },
    { title: 'Lunch', description: 'Have a light lunch and relax.', time: '13:00 - 13:30', status: 'Done 👍' },
    { title: 'Design Mockups', description: 'Work on Figma UI drafts.', time: '14:00 - 16:00', status: 'Not yet Done 👎' },
    { title: 'Walk', description: 'Evening walk in the park.', time: '17:30 - 18:00', status: 'Done 👍' },
    { title: 'Reading', description: 'Read a chapter of a book.', time: '20:00 - 21:00', status: 'Done 👍' },
];


const Search = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleTheme = () => setDarkMode(!darkMode);

    const filteredTasks = taskList.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View className={`flex-1 ${darkMode ? 'bg-primary' : 'bg-white'} p-10`}>

            {/* Theme Switch */}
            <ScrollView
                className="flex-1 px-3"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
            >
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search for a particular task"
                />

                <View className="flex flex-row justify-between items-center mt-5 mb-2">
                    <Text className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                        Recent Tasks
                    </Text>

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

                {/* Grid Container */}
                <View className="flex-row flex-wrap justify-between">
                    {filteredTasks.map((task, index) => (
                        <View
                            key={index}
                            className={`w-[48%] mt-5 p-4 rounded-2xl ${
                                darkMode ? 'bg-dark-200' : 'bg-green-500'
                            }`}
                        >
                            <Text className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                                {task.title}
                            </Text>
                            <Text className={`text-xs mt-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                                {task.time}
                            </Text>
                            <Text className={`text-sm font-bold mt-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                                {task.status}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Search;
