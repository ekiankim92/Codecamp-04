import React from 'react';
import type {Node} from 'react';
// import * as R from 'react-native';
import {Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <>
      <View>
        <Text>Hello World</Text>
      </View>
      <View>
        <Text>This is the test</Text>
      </View>
      <Text>Will this show in the IOS screen?</Text>
    </>
  );
};

export default App;
