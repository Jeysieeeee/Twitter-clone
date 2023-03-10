import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router"
import { RouterIcon } from "../../components/navigation/RouterIcon";

const AppLayout = () => {
    return (
        <>
            <View style={{ marginTop: 30 }} />
            <Tabs

                backBehavior="history"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({color}) => <RouterIcon color={color} name={route.name} />,
                    tabBarShowLabel: false,
                })}
            >
                <Tabs.Screen name="NewsFeed" options={{ title: 'News Feed' }} />
                <Tabs.Screen name="search" options={{ title: "Search" }} />
                <Tabs.Screen name="record" options={{ title: "Record" }} />
                <Tabs.Screen name="notification" options={{ title: "Notification" }} />
                <Tabs.Screen name="message" options={{ title: "Message" }} />
            </Tabs>
        </>
    );
};

export default AppLayout;

