import { TaskProvider } from "@/context/TaskContext";
import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
      <TaskProvider>
        <Stack>
          <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="tasks/[id]"
              options={{ headerShown: false }}
          />
        </Stack>
      </TaskProvider>
  );
}
