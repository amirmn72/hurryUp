import React,{Component}from 'react'
import{View, StyleSheet,Image,Text} from 'react-native'


export default class Article extends Component{
render(){
const {image,title,body}=this.props
  return(
    <View>
<Image source={image} style={styles.image}/>
<View>
<Text>{title}</Text>
<Text>{body}</Text>
</View>
    </View>

  )
}
}
const styles=StyleSheet.create({

  image:{width:'100%', height:200},


})
