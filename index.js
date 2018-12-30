//
// import app from './src/app';
   import Login from './src/components/Login'
// import React ,{Component}from 'react'
// import {
//   AppRegistry,
//   Image,
//   View,
//   Text,
//   Alert,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   TouchableWithoutFeedback,
//   StyleSheet,
// } from 'react-native'
// export default class amir extends Component {
// onPressButton=()=>
//
//   alert("im not busy");
//
// constructor(){
//   super();
//   this.state={onShowUnderlay:{color:'yellow', fontSize:16}
//
//   }
// }
//
//
// render() {
//
//   return(
//   <View
//   style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'red'}}>
// <TouchableHighlight onPress={this.onPressButton}
// style={{padding:10, margin:20, borderRadius:7, borderWidth:1.2, backgroundColor:'blue'}}
// underlayColor={'brown'}
// onShowUnderlay={()=>this.setState({
//   onShowUnderlay:{color:'green',fontSize:16}
// })}
// onHideUnderlay={()=>this.setState({
//     onShowUnderlay:{color:'yellow'}
// })}
// >
//
// <Text style={this.state.onShowUnderlay}>click me</Text>
//
// </TouchableHighlight>
//
//
// <TouchableNativeFeedback onPress={this.onPressButton} background={TouchableNativeFeedback.SelectableBackground()}
// useForeground={false}
// >
// <View style={{padding:10, margin:15,borderRadius:7, borderWidth:1.2,backgroundColor:'blue'}}>
// <Text style={{margin:5, color:'white'}}>clickFeedback</Text>
//
// </View>
//
// </TouchableNativeFeedback>
//
//
// <TouchableWithoutFeedback onPress={this.onPressButton}
// onPresssIn={()=>{alert("onpressin")}}
// >
//
// <View style={{padding:10, margin:15,borderRadius:7, borderWidth:1.2,backgroundColor:'blue'}}>
// <Text style={{margin:5, color:'white'}}>TouchableWithoutFeedback</Text>
// </View>
//
// </TouchableWithoutFeedback>
//
//   </View>
//   )
// }
//
// }
import React , { Component } from 'react' ;
import {
    AppRegistry,
    View ,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

import styles from './src/assets/css/login' ;
import LinearGradient from "react-native-linear-gradient"

const DismissKeyboard=({children})=>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>

export default class Amir extends Component {
state={show:true,error:''};

componentWillMount(){
    this.validation=this.validation.bind(this)
}

    validation(text){
      const alph=/^[a-zA-Z]+$/;
      const yi=/^[]+$/
        if(alph.test(text)){
          this.setState({show:true})
        }
        else{this.setState({show:false,error:"غلط است"})}
       

        }


    validation2(text){
       const num=/^[0-9]+$/;
        if(num.test(text)){
            console.warn("correctt")
        }
        else{console.warn("incorrect")}
    }


  render(){

    return(
       <DismissKeyboard>
        <LinearGradient colors={['#3181e5' , '#594dc2']} style={styles.main}>
            <View style={styles.container}>



                <View style={styles.box1}>

                    <Text style={styles.loginText}>ورود</Text>

                    <View style={styles.inputGroups}>


                        <Text style={[styles.labelText]}>ایمیل:  </Text>
                        <TextInput
                            placeholder ="لطفا ایمیل خود را وارد کنید"
                            style={[styles.inputText,!this.state.show ? styles.Error:null]}
                            underlineColorAndroid="transparent"
                            onSubmitEditing={()=>this.refs.amir.focus()}
                            returnKeyType='next'
                            onChangeText={text=>this.validation(text)}
                            keyboardType='email-address'
                        />
                        <Text style={{fontWeight:'bold',fontSize:16,color:'red',marginBottom:0,textAlign:'right'}}>{this.state.error} </Text>

                        <Text style={[styles.labelText,]}>پسوورد : </Text>
                        <TextInput
                            placeholder ="لطفا پسوورد خود را وارد کنید"
                            style={[styles.inputText,]}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            ref='amir'
                            returnKeyType="done"
                            onSubmitEditing={()=>alert("amir")}
                            onChangeText={text=>this.validation2(text)}
                            keyboardType='numeric'
                            selectionColor='yellow'
                            maxLength={10}
                        />
                        {/*<Text style={{fontWeight:'bold',fontSize:16,color:'red',marginBottom:1,textAlign:'right'}}>{this.state.Error2} </Text>*/}
                        <TouchableOpacity onPress={this.myFun}>
                            <Text style={styles.loginButton}>ورود به اپلیکیشین</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </LinearGradient>
        </DismissKeyboard>

                        )
  }
}


AppRegistry.registerComponent('firstapp' , () => Login)
