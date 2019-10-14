import React from 'react';
import { View, Text, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';
import firebase from 'firebase';
class JoinRoom extends React.Component {
    static navigationOptions = {
        title: ' Chat Group',
    };
    state = {
        name : ''
    };
    
   
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCHZQ0B8nspchdLVzfOMoFxIHYk5k_Kceo",
            authDomain: "reactnative-3db72.firebaseapp.com",
            databaseURL: "https://reactnative-3db72.firebaseio.com",
            projectId: "reactnative-3db72",
            storageBucket: "reactnative-3db72.appspot.com",
            messagingSenderId: "659158387090",
            appId : "1:659158387090:web:e17611a8f0e85a7570d94b ",
            measurementId : " G-QEVVN4M0H1 "
        };
        firebase.initializeApp(config);
    };
    _onChangeName = (text) =>
    {
        this.setState({
            name : text
        });
    };
    _toChatRoom = () => {
        firebase.auth().signInAnonymously().then((user) => {
            AsyncStorage.setItem('name',this.state.name);
            this.props.navigation.navigate('ChatRoom');
        }).catch( (err) => alert(err) );
    }
    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, paddingBottom: 15 }} >
                <Text>
                    Name User
                </Text>
                <TextInput placeholder="" style={{
                    borderColor: "#A5A5A5",
                    borderWidth: 0.5, padding: 8, width: '100%', marginBottom: 15, marginTop: 15
                    }} 
                    onChangeText={(text) => this._onChangeName(text)}
                />
                <TouchableOpacity onPress={() => this._toChatRoom()} >
                    <Text style={{ fontWeight: 'bold' }} >
                        Join Now
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};
export default JoinRoom;