import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
function TabIcon({ focused, icon, title }: any) {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight2}
                className="flex flex-row w-full flex-1 min-w-[80px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text className="text-secondary text-base font-semibold ml-2">
                    {title}
                </Text>
            </ImageBackground>
        );
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
    );
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                },
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 53,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth:1,
                    borderColor: "#ffffff",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused = {focused} icon = {icons.home} title = "Home" />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused = {focused} icon = {icons.person} title = "Profile" />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused = {focused} icon = {icons.search} title = "Search" />
                    ),
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: 'Add',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused = {focused} icon = {icons.add} title = "Add" />
                    ),
                }}
            />

        </Tabs>
    )
}
export default _Layout
