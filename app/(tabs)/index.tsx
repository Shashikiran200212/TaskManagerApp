import { Image, Text, View, ScrollView, Switch, TouchableOpacity } from "react-native";
import { useState } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useTaskContext } from "@/context/TaskContext";
import { Ionicons } from "@expo/vector-icons"; // <-- icon library

export default function Index() {
    const [darkMode, setDarkMode] = useState(false);
    const { tasks, deleteTask } = useTaskContext();
    const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

    const toggleTheme = () => setDarkMode(!darkMode);

    const toggleCheckbox = (index: number) => {
        const updated = [...checkedItems];
        updated[index] = !updated[index];
        setCheckedItems(updated);
    };

    return (
        <View className={`flex-1 ${darkMode ? "bg-primary" : "bg-white"}`}>
            <Image
                source={images.bg}
                className="w-full h-full absolute z-[-1]"
                resizeMode="cover"
            />

            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
            >

                <Image
                    source={icons.logo}
                    style={{
                        width: '100%',
                        height: 80,
                        marginTop: 48,
                        marginBottom: 10, // reduce to bring text closer
                        alignSelf: 'center',
                        tintColor: darkMode ? '#FFFFFF' : undefined,
                    }}
                    resizeMode="contain"
                />

                <Text
                    className={`text-center text-[8px] text-gray-500 mb-5 ${darkMode ? "text-white" : "text-black"}`}
                >
                    Designed By Shashi Kiran
                </Text>


                <View className="flex-row px-5 mt-3 gap-10">
                    <Text className={`text-[30px] font-black ${darkMode ? "text-white" : "text-black"}`}>Today's Tasks</Text>
                    <View className="flex-row justify-end items-center">
                        <Text className={`${darkMode ? "text-white" : "text-black"} text-xl mr-[-3] pb-1`}>
                            {darkMode ? "🌙" : "☀"}
                        </Text>
                        <Switch
                            value={darkMode}
                            onValueChange={toggleTheme}
                            thumbColor={darkMode ? "#CCC" : "#22c55e"}
                        />
                    </View>
                </View>

                {tasks.map((task, index) => (
                    <View
                        key={index}
                        className={`mt-10 p-5 pr-10 rounded-2xl flex-row gap-9 justify-center items-center ${
                            darkMode ? "bg-dark-200" : "bg-green-500"
                        }`}
                    >
                        <View className="flex-1">
                            <Text className={`text-xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                                {task.title}
                            </Text>
                            <Text className={`text-sm mt-3 ${darkMode ? "text-white" : "text-black"}`}>
                                {task.description}
                            </Text>
                            <Text className={`text-xs mt-3 ${darkMode ? "text-white" : "text-black"}`}>
                                {task.time}
                            </Text>
                        </View>


                        <View className="items-center gap-2">
                            {/* Checkbox */}
                            <TouchableOpacity
                                className={`w-5 h-5  mb-5 border-2 rounded ${
                                    checkedItems[index]
                                        ? "bg-blue-500 border-blue-500"
                                        : darkMode
                                            ? "border-white"
                                            : "border-black"
                                } items-center justify-center`}
                                onPress={() => toggleCheckbox(index)}
                            >
                                {checkedItems[index] && (
                                    <Text className="text-white text-sm   font-bold">✓</Text>
                                )}
                            </TouchableOpacity>

                            {/* Delete Button */}
                            <TouchableOpacity
                                onPress={() => deleteTask(index)}
                                className="mt-2"
                            >
                                <Ionicons name="trash" size={20} color={darkMode ? "white" : "black"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
