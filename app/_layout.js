import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { AuthcontextProvider, useAuth } from '@/context/authContext';

const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated or not
        if (typeof isAuthenticated === 'undefined') return;
        const inApp = segments[0] === '(app)';
        if (isAuthenticated && !inApp) {
            // Redirect to Home
            router.replace('home');
        } else if (isAuthenticated === false) {
            // Redirect user to signIn page 
            router.replace('signIn');
        }
    }, [isAuthenticated]);

    return <Slot />;
};

export default function RootLayout() {
    return (
        <AuthcontextProvider>
            <MainLayout />
        </AuthcontextProvider>
    );
}
