import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Alert } from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../styles/global';
import { addTask, deleteTask, didTask } from '../store/taskAction';



const Home = ({ navigation }) => {
  // const [tasks, setTasks] = useState([
  //   { "task": "HTML I", "done": true, "id": "1" },
  //   { "task": "Responsive design", "done": true, "id": "2" },
  //   { "task": "CSS", "done": false, "id": "3" },
  // ]);
  
  const tasks = useSelector(state => state.tasks);
  
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const changeHandler = val => {
    setText(val);
  };

  const submitTask = (text) => dispatch(addTask(text));
  const removeTask = id => dispatch(deleteTask(id));
  const finishTask = id =>dispatch(didTask(id));
  return (
    <View style={globalStyles.container}>
      <TextInput style={globalStyles.input} placeholder='Add new Task' onChangeText={changeHandler}/>
      <Button title="add task" color='#f194ff' onPress={() => submitTask(text)} /> 
      {/*  Alert.alert(text) */}
      <Text>This is Home of these tasks:</Text>
      <FlatList 
        data={tasks} 
        renderItem={({item})=>(
          <TouchableOpacity style={globalStyles.item} onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Text style={item.done ? null : { 
              fontWeight: 'bold'
             }}>
              {item.task}
            </Text>
            <Button title="delete task" color="red" onPress={() => removeTask(item.id)} />
            <Button title="done" color="blue" onPress={() => finishTask(item.id)} />
          </TouchableOpacity>
          
      )} />
    </View>
  );
};


export default Home;
