//import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet,View,TouchableOpacity, Image, ScrollView, Text, TextInput} from 'react-native';
import { Ionicons,SimpleLineIcons,FontAwesome,Entypo,AntDesign } from '@expo/vector-icons';
import Display from './Display';

export default function App(){
  const [Img, setImg] = useState(require('./assets/img1.jpg'));

  function firstImage(){
    setImg(require('./assets/img1.jpg'))
  } 
  function secondImage(){
    setImg(require('./assets/img2.jpg'))
  } 
  function thirdImage(){
    setImg(require('./assets/img3.jpg'))
  }
  function forthImage(){
    setImg(require('./assets/img4.jpg'))
  }
  function fifthImage(){
    setImg(require('./assets/img5.jpg'))
  }
  function sixthImage(){
    setImg(require('./assets/img6.jpg'))
  }



return(
  
  <View style = {StyleSheet.container}>
    <View style={{backgroundColor:'#000',height:80,alignItems:'center',justifyContent:'center',marginTop:28}}>
    <View style={{backgroundColor:'darkgray',width: '88%',height:35,borderRadius:10,flexDirection:'row',
    alignItems:'center',paddingLeft: 5}}>
    <TouchableOpacity>
      <AntDesign name="search1" size={20} color="#000" />
      </TouchableOpacity>
      <View style={{marginLeft:15}}>
     <TextInput placeholder='Search'/>
     </View>
    </View>
    </View>
   <ScrollView>
    <Display photo = {Img}/>
 
 <ScrollView horizontal = {true}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor:'#000',height:100,width:'100%',alignItems:'center', }}>
      <TouchableOpacity onPress={firstImage}>
          <Image style={styles.images} source={require('./assets/img1.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={secondImage}>
      <Image style={styles.images} source={require('./assets/img2.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={thirdImage}>
      <Image style={styles.images} source={require('./assets/img3.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={forthImage}>
      <Image style={styles.images} source={require('./assets/img4.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={fifthImage}>
      <Image style={styles.images} source={require('./assets/img5.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={sixthImage}>
      <Image style={styles.images} source={require('./assets/img6.jpg')}/>
      </TouchableOpacity>
    </View>
    </ScrollView>

    <View style= {styles.last}>
        <TouchableOpacity>
      <Entypo name="home" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="search1" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style= {{height: 25, width: 25,borderTopLeftRadius:10,borderTopRightRadius:10}}
          source= {require('./assets/reels.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="hearto" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style= {{height: 25, width: 25,borderRadius: 30}}
          source= {require('./assets/img7.jpg')}></Image>
      </TouchableOpacity>
      </View>
      </ScrollView>
  </View>
 
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 25
},
last: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 50,
  paddingLeft: 10,
  paddingRight: 10,
  borderTopWidth: 1,
  borderTopColor: 'dimgray',
  alignItems: 'center',
  paddingTop: 5,
  backgroundColor: '#000'
},
images: {
  height: 70,
  width: 70,
  borderRadius:15,
  marginLeft:10
}
});
