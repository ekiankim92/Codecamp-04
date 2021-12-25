import React from 'react';
import type {Node} from 'react';
// import * as R from 'react-native';
import {Text, View, ScrollView, TextInput} from 'react-native';

const App: () => Node = () => {
  return (
    <>
      <ScrollView>
        <View>
          <Text>Hello World</Text>
        </View>
        <View>
          <Text>This is the test</Text>
        </View>
        <Text>Will this show in the IOS screen?</Text>
        <View>
          <TextInput
            onPress={(alert = 'Hello World')}
            placeholder="Enter your name"
            stlye={{color: 'red'}}
          />
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
      </ScrollView>
    </>
  );
};

export default App;
