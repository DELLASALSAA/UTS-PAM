import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/HomePage';
import Detail from './screen/DetailPage';
import Confirm from './screen/ConfirmPage';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Confirm" component={Confirm} />
        </Stack.Navigator>
    );
};

export default ScreenStack;