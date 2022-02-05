import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'; 
import { useSelector } from 'react-redux';
import { globalStyles } from '../styles/global';


const Done = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks);
  const doneTasks = tasks.filter(task => task.done == true);
  
  return (
    <View style={globalStyles.container}>
      <Text>Done tasks:</Text>
      <FlatList 
        data={doneTasks} 
        renderItem={({item})=>(
          <TouchableOpacity style={globalStyles.item} onPress={()=>navigation.navigate("ReviewDetails", item)}>
            <Text>
              {item.task}
            </Text>
          </TouchableOpacity>
          
      )} />
    </View>
  );
};


export default Done;
