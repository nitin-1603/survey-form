import React, { Component } from 'react';
import Details from './Details';
import Questions from './Questions';
import SubmitDone from './SubmitDone';
import { v4 as uuidv4 } from 'uuid';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCxhV22YgQiVLMUhdgYKtE13a6LyFKeaB8",
//     authDomain: "survey-form-9007c.firebaseapp.com",
//     projectId: "survey-form-9007c",
//     storageBucket: "survey-form-9007c.appspot.com",
//     messagingSenderId: "878643131981",
//     appId: "1:878643131981:web:64312e49f6f585bb734e04"
//   };

 
  

export class Container extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            q1: null,
            q2: null,
            textarea: null,
            isSubmited: false,
        }
    }

    formHandle = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email }, () => {
            console.log(name, email);
        });
        event.preventDefault();
    }

    questionHandler = (event) => {
        event.preventDefault();
        const q1 = event.target.q1.value;
        const q2 = event.target.q2.value;
        const textarea = event.target.textarea.value;
        this.setState({ q1, q2, textarea }, () => {
            console.log(q1, q2, textarea);
        });
        
    }


    render() {

        return (
            <div>
                {this.state.q1 && this.state.q2 && this.state.textarea ? (<SubmitDone />) :
                    this.state.name === null && this.state.email === null ? (<Details submit={this.formHandle} />) : (<Questions submit={this.questionHandler} />)}
            </div>
            //  {this.state.q1 && this.state.q2 && this.state.textarea ? (<SubmitDone />)  (ye conditon jb chalegi jb question ki value hme mil jaegi)
            // this.state.name === null && this.state.email === null  //////(null ka matlab jb tak hme value nhi milegi tb tk Details components hi show hoga value milte hi Question components show hoga and then question ki value milte hi SubmitDonne component show hoga)
        )
    }
}

export default Container
