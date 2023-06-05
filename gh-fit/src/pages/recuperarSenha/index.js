import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'

export default function CreateUser({navigation}){
    
    const [email, setEmail] = useState('');
    
    function handleCreateUser(){
        if(email !== ''){
            alert('Cadastro criado com sucesso')
            navigation.navigate('login')
        }else {
            alert('Ops! algo errado')
        }
    }
    return(
        <View style={styles.Container}>
            <View style={styles.form} >
               
                <TextInput style={styles.inputForm} placeholder='Email'
                autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                
                <TouchableOpacity style={styles.buttonForm}
                onPress={handleCreateUser} >
                    <Text style={styles.textButton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

