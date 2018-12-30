import React , { Component } from 'react' ;
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView, ScrollView
} from 'react-native'

import styles from './../assets/css/login' ;
import LinearGradient from "react-native-linear-gradient"

const KeyboardHide=({children})=>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>

export default class Amir extends Component {

constructor(){
    super()
    this.state={
        show:false,
        show2:false,
        email:'',
        password:'',
        error:'',
        error2:'',
        colorLoginButtonHText:{color:'white'},
    }
}

    validation(text,field){

       const alph=/^[a-zA-Z]+$/;

        if(field==='mail'){
            this.setState({email:text,error:''})
        }

            if(alph.test(text)){
                this.setState({show:false,error:''})
           }
            else{ this.setState({show:true,error:"fill valid text"})}

    }

    validation2(text,field){
        const num=/^[0-9]+$/;

        if('password'===field){
            this.setState({password:text,error:''})
        }


            if(num.test(text)){
                this.setState({show2:false,error2:''})
            }
            else{ this.setState({show2:true,error2:"fill numeric text"})}

    }

    myFun=()=> {
        const{show,show2,password,email}=this.state;

if(password===''){ this.setState({error2:'fill the space password',show2:true})}
if(email===''){ this.setState({error:'fill the space of email',show:true})}

if(!show&&!show2&&email!==''&&password!==''){alert("hello world")}

    };

_login(){
console.log('ok')
}
    render() {
    const{error2,error}=this.state
        return (

            <KeyboardHide>

            <LinearGradient colors={['#3181e5' , '#594dc2']} style={styles.main}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-170} style={styles.container}>



                          <ScrollView style={styles.box1}>

                            <Text style={styles.loginText}>ورود</Text>

                            <View style={styles.inputGroups}>


                              <Text style={[styles.labelText,]}>ایمیل : </Text>
                              <TextInput
                               placeholder ="لطفا ایمیل خود را وارد کنید"
                               style={[styles.inputText,this.state.show?styles.error:null]}
                               underlineColorAndroid="transparent"
                               onSubmitEditing={()=>this.refs.amir.focus()}
                               returnKeyType='next'
                               onChangeText={(text)=>this.validation(text,"mail")}
                               // textContentType='emailAddress'
                                  keyboardType='email-address'
                              />
                              <Text style={[styles.TextError,{display:error ===''?'none':'flex'}]}>{this.state.error} </Text>

                              <Text style={[styles.labelText,]}>پسوورد : </Text>
                              <TextInput
                               placeholder ="لطفا پسوورد خود را وارد کنید"
                               style={[styles.inputText,this.state.show2?styles.error:null]}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               ref='amir'
                               returnKeyType="done"
                               onSubmitEditing={()=>alert("amir")}
                               onChangeText={(text)=>this.validation2(text,'password')}
                               keyboardType='numeric'
                               selectionColor='yellow'
                               maxLength={10}
                              />
                                <Text style={[styles.TextError,this.checkDisplay(error2)]}>{this.state.error2} </Text>
                               <TouchableOpacity onPress={this.myFun}>
                                  <Text style={styles.loginButton}>ورود به اپلیکیشین</Text>
                               </TouchableOpacity>

                               <TouchableHighlight
                               onPress={this._login}
                               style={styles.loginButtonH}
                               underlayColor={"green"}

                               onShowUnderlay={()=> this.setState({
                                 colorLoginButtonHText:{
                                   color:'black'
                                 }

                               })}
                              onHideUnderlay={()=> this.setState({
                               colorLoginButtonHText:{
                                  color:'white'
                                }
                                  }) }  >

                                  <Text style={[styles.loginButtonHText, this.state.colorLoginButtonHText]}>ورود به اپلیکیشین</Text>
                               </TouchableHighlight>

                               <TouchableOpacity>
                               <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                               </TouchableOpacity>

                               <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white')}>
                               <View style={styles.loginButtonH}>
                                  <Text style={[styles.loginButtonHText, this.state.colorLoginButtonHText]}>ورود به اپلیکیشین</Text>
                               </View>

                               </TouchableNativeFeedback >

                            </View>


                          </ScrollView>



</KeyboardAvoidingView>
</LinearGradient>

            </KeyboardHide>


          )
}
    checkDisplay=(field)=>{

    return{display:field===''?'none':'flex'}
    }
}
