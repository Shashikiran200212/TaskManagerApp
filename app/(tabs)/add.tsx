// app/add.tsx
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useTaskContext } from '@/context/TaskContext';
import { router } from 'expo-router';

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const { addTask } = useTaskContext();

    const handleAddTask = () => {
        if (!title || !description || !time) {
            Alert.alert('All fields are required!');
            return;
        }

        addTask({ title, description, time });
        Alert.alert('Task Added');
        router.back(); // Navigate back to index
    };

    return (
        <ScrollView className="p-10" contentContainerStyle={{ flexGrow: 1 }}>
            <Text className="text-[30px] font-bold">Add a Task</Text>

            <View className="mt-10 space-y-6">
                <View className="mb-7">
                    <Text className="text-lg mb-1">Title</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Enter your task title"
                        placeholderTextColor="#E5E5E5"
                        selectionColor="#FFFFFF"
                        className="w-full h-[45px] bg-green-500 text-white px-4 rounded-lg"
                    />
                </View>

                <View className="mb-7">
                    <Text className="text-lg mb-1">Description</Text>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Enter your task description"
                        placeholderTextColor="#E5E5E5"
                        selectionColor="#FFFFFF"
                        multiline
                        className="w-full h-[150px] bg-green-500 text-white px-4 py-2 rounded-lg"
                    />
                </View>

                <View className="mb-9">
                    <Text className="text-lg mb-1">Time Period</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}
                        placeholder="e.g. 10:00 - 11:00"
                        placeholderTextColor="#E5E5E5"
                        selectionColor="#FFFFFF"
                        className="w-full h-[45px] bg-green-500 text-white px-4 rounded-lg"
                    />
                </View>

                <View className="mt-5 w-36">
                    <Button title="Add Task" color="#22c55e" onPress={handleAddTask} />
                </View>
            </View>
        </ScrollView>
    );
};

export default Add;
