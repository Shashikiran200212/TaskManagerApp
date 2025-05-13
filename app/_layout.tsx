import { Stack } from "expo-router";
import './globals.css';
import { TaskProvider } from "@/context/TaskContext";

export default function RootLayout() {
  return (
      <TaskProvider>
        <Stack>
          <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="movies/[id]"
              options={{ headerShown: false }}
          />
        </Stack>
      </TaskProvider>
  );
}
