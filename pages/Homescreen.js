import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// firebase
import { auth } from '../firebase.config';
import { signOut } from "firebase/auth";
//Navigation
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.navigate("Login")
        } catch (error) {
            console.log(error.message)
        }
    }

    return <View style={styles.container}>
        <TouchableOpacity onPress={handleLogout} style={styles.buttonLogOut}>
            <Text style={styles.buttonLogOutText}>Disconnect</Text>
        </TouchableOpacity>
    </View>
}

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogOut: {
        backgroundColor: "#8b0000",
        padding: 20,
        borderRadius: 10
    },
    buttonLogOutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

})