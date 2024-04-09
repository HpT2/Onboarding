import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Button 
                title="Click here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Home;
