
import { Image, Text, View, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { BlurView } from "expo-blur"
//hooks react
import { useState } from 'react';
// imagenes
import fondo from "../assets/fondo.webp"
import logo from "../assets/logo40.png"
// firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config';
//Navigation
import { useNavigation } from '@react-navigation/native';


const Loginscreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleCreateAccount = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            handleStates();
            navigation.navigate("Home")
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSingIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            handleStates();
            navigation.navigate("Home")
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleStates = () => {
        setEmail("");
        setPassword("");
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={fondo} style={styles.imageBackground}  >
                <BlurView intensity={100}>
                    <View style={styles.loginView}>
                        <View style={styles.loginContainer}>
                            <Image source={logo} style={styles.logo} />
                            <View>
                                <Text style={styles.loginLabel}>Correo electrónico</Text>
                                <TextInput onChangeText={(text) => setEmail(text)} value={email} style={styles.loginInput} placeholder='Ingresa el correo electrónico' />
                            </View>
                            <View>
                                <Text style={styles.loginLabel}>Contraseña</Text>
                                <TextInput onChangeText={(text) => setPassword(text)} value={password} style={styles.loginInput} secureTextEntry={true} placeholder='Ingresa tu contraseña' />
                            </View>
                            <TouchableOpacity onPress={handleSingIn} style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Ingresar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCreateAccount} style={[styles.loginButton, styles.loginButtonColorRed]}>
                                <Text style={styles.loginButtonText}>Registrarse</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </ImageBackground>
        </View>
    );
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        width: '100%',
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginView: {
        height: 500,
        width: 350,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    loginContainer: {
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 100,
        marginBottom: 20,
    },
    loginLabel: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    loginInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        color: 'gray',
        marginBottom: 20
    },
    loginButton: {
        backgroundColor: 'green',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    loginButtonColorRed: {
        backgroundColor: 'darkred',
    },
    loginButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    }

});