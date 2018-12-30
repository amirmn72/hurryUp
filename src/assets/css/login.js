import { StyleSheet,Dimensions } from 'react-native';
const{height,width}=Dimensions.get('window')
var styles = StyleSheet.create({
    container : {
        flex : 1 ,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:height



      },
      main: {
         flex:1,


      },
        box1:{
          backgroundColor:'white',
          flex:1,

          marginRight:50,
          marginLeft:50,
          borderRadius:5,
          elevation:2,
        },
        loginText:{
         fontFamily:'IRANSansMobile',
          textAlign:'center',
          fontSize:18,
          margin:5
        },
         inputGroups:{
          marginRight:20,
          marginLeft:20,
          marginBottom:20,





         },
        labelText:{
           fontFamily:'IRANSansMobile_Bold',
          textAlign:'right',
          margin:10,
          marginRight:7,
          // color:"#5256c9",
          //fontWeight:'bold'

        },

        inputText:{
         fontFamily:'IRANSansMobile-Light',
         borderColor:'rgba(0,0,0,0.1)',
         borderWidth:1.2,
         padding:5,
         height:40,
         borderRadius:2,
         textAlign:'right'

       },
       loginButton:{
         fontFamily:'IRANSansMobile',
         textAlign:'center',
         backgroundColor:'blue',
         marginTop:15,
         padding:10,
         color:'white',
         borderRadius:20,
         elevation:2,
         marginRight:25,
         marginLeft:25
       },

       loginButtonH:{
         marginTop:15,
         padding:10,
         marginRight:25,
         marginLeft:25,
         borderRadius:20,
         elevation:2,
         backgroundColor:'blue',
       },
       loginButtonHText:{
         fontFamily:'IRANSansMobile',
         textAlign:'center',



       },

       forgetPassword:{
         textAlign:'center',
         marginTop:10,
         overflow:'hidden',
        
       },

       error:{
        borderColor:'red'

       },
       TextError:{
           fontWeight:'bold',
           fontSize:16,
           color:'red',
           textAlign:'right'

    }

      });
        export default styles;
