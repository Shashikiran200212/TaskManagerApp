import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Task = {
    title: string;
    description: string;
    time: string;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (index: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            title: "Vegetables",
            description: "Get vegetables from the store.",
            time: "10:00 - 12:00",
        },
        {
            title: "Fruits",
            description: "Buy fresh fruits.",
            time: "12:00 - 13:00",
        },
        {
            title: "Milk",
            description: "Pick up milk from the dairy.",
            time: "15:00 - 16:00",
        },
        {
            title: "Bread",
            description: "Buy multigrain bread.",
            time: "18:00 - 19:00",
        },
    ]);

    const addTask = (task: Task) => {
        setTasks(prev => [task, ...prev]);
    };

    const deleteTask = (index: number) => {
        setTasks(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTaskContext must be used within TaskProvider");
    return context;
};
