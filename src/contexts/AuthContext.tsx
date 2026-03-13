import React, { createContext, useContext, useEffect, useState } from 'react';

// Define a simple User type for frontend-only auth
interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>; // Kept for interface compatibility, will mock
    login: (email: string) => Promise<void>; // New simple login
    logout: () => Promise<void>;
    signup: (name: string, email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage on mount
        const storedUser = localStorage.getItem('partner_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string) => {
        // Simulate API call
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800)); // Fake 800ms delay

        // Mock user data
        const mockUser: User = {
            uid: 'frontend-mock-uid-' + Date.now(),
            email: email,
            displayName: email.split('@')[0], // Simple display name from email
            photoURL: null
        };

        localStorage.setItem('partner_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setLoading(false);
    };

    const signup = async (name: string, email: string) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockUser: User = {
            uid: 'frontend-mock-uid-' + Date.now(),
            email: email,
            displayName: name,
            photoURL: null
        };

        localStorage.setItem('partner_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setLoading(false);
    };

    const signInWithGoogle = async () => {
        // Mock Google Sign In
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const mockUser: User = {
            uid: 'google-mock-uid-' + Date.now(),
            email: 'demo-user@gmail.com',
            displayName: 'Demo Google User',
            photoURL: null
        };

        localStorage.setItem('partner_user', JSON.stringify(mockUser));
        setUser(mockUser);
        setLoading(false);
    };

    const logout = async () => {
        localStorage.removeItem('partner_user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, login, logout, signup }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
