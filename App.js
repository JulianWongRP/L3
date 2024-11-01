import React, {useState} from 'react';
import {TextInput, View, Text, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';




//Exercise 1A, B, C, D, E, F//
const App = () => {
  return (
      <View>
          <Text></Text>
          <Text></Text>

          <Text>User Type:</Text>
          <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
              {label: "Admin", value: "admin"},
              {label: "Guest", value: "guest"},
          ]}/>

        <Text> Password: </Text>
        <TextInput style={{borderWidth: 1}}/>
          {/*<Button onPress={() => Alert.alert("Welcome!")}*/}
          {/*        title="Login" color="green"/>*/}
          <TouchableOpacity onPress={()=> ToastAndroid.show("Welcome!", ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
      </View>
  );
};

// Exercise 1G //
const oneG = () => {
    const [pw, setPw] = useState('Welcome!');
    const [ut, setUt] = useState('User Type');
    const [un, setUn] = useState('User Name');

    const InputBox = ({label, onChangeText}) => {
        return (
            <View>
                <Text>{label}</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
            </View>
        )
    }

    return (
        <View>
            <Text></Text>
            <Text></Text>

            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    {label: "Admin", value: "Admin"},
                    {label: "Guest", value: "Guest"},
                ]} onChangeText={(text) => setUt(text)}/>

            <InputBox label="User Name" onChangeText={(text) => setUn(text)}/>


            <InputBox label="Password" onChangeText={(text) => setPw(text)}/>

            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! wrong password!';
                if (pw === correctPassword){
                    mymessage = 'Welcome' + `${ut}` + `${un}`
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                }
            }>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
            <Text>{ut}</Text>
            <Text>{un}</Text>
        </View>
    );
};

export default oneG;
