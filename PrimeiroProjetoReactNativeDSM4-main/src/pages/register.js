import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

const Register = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ curses, setCourses ] = useState('');
    
    const navigation = useNavigation()

    const handleRegister = () => {
        console.log('Dados do usuário:', { name, email, password, telephone, cpf, curses });
        Alert.alert('Usuário cadastrado com sucesso!');
        navigation.navigate('login')
        // Limpar os campos após o cadastro
        setName('');
        setEmail('');
        setPassword('');
        setTelephone('');
        setCpf('');
        setCourses('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <TextInput 
                style={ styles.input }
                placeholder="Nome"
                autoCapitalize="words"
                contextMenuHidden={ true }
                value={name}
                onChangeText={setName} 
            /> 
            <TextInput
                style={ styles.input }
                placeholder="E-mail"
                keyboardType="email-address"
                contextMenuHidden={ true }
                value={email}    
                onChangeText={setEmail}
            />
            <TextInput
                style={ styles.input }
                placeholder="Senha"
                secureTextEntry={true}
                contextMenuHidden={ true }
                value={password}    
                onChangeText={setPassword}
            />
            <TextInput
                style={ styles.input }
                placeholder="Telefone"
                keyboardType="phone-pad"
                contextMenuHidden={ true }
                value={telephone}    
                onChangeText={setTelephone}
            />
            <TextInput
                style={ styles.input }
                placeholder="CPF"
                keyboardType="numeric"
                contextMenuHidden={ true }
                value={cpf}    
                onChangeText={setCpf}
            />
            <TextInput
                style={ styles.input }
                placeholder="Cursos"
                contextMenuHidden={ true }
                value={curses}    
                onChangeText={setCourses}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister} >
                <Text style={ styles.buttonText }>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: '80%',
    },
    button: {
        backgroundColor: "#97ce4c",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
})


export default Register;