```javascript
// DuplicateKeysSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import uuid from 'react-native-uuid'; // Import uuid library

const data = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
];

const App = () => {
  return (
    <FlatList
      data={data.map(item => ({...item, id: uuid.v4()}))} // Adding unique IDs
      keyExtractor={(item) => item.id} // Use unique ID as key
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default App;
```