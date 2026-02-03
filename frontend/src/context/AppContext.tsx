import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'te'; // English, Hindi, Telugu

export interface Profile {
    id: string;
    name: string;
    age: number;
    role: 'primary' | 'member';
    avatar?: string;
}

interface AppState {
    language: Language;
    setLanguage: (lang: Language) => void;
    user: Profile; // The current acting user (caregiver)
    familyMembers: Profile[];
}

const defaultState: AppState = {
    language: 'en',
    setLanguage: () => { },
    user: { id: '1', name: 'Priya', age: 34, role: 'primary' },
    familyMembers: [
        { id: '1', name: 'Priya', age: 34, role: 'primary' },
        { id: '2', name: 'Raju', age: 8, role: 'member' },
        { id: '3', name: 'Lakshmi', age: 65, role: 'member' },
        { id: '4', name: 'Anjali', age: 5, role: 'member' },
    ]
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    // Mock data - in real app, these would come from local DB/Sync
    const user = defaultState.user;
    const familyMembers = defaultState.familyMembers;

    return (
        <AppContext.Provider value={{ language, setLanguage, user, familyMembers }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
