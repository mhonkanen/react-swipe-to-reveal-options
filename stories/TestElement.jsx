import React, { Component } from 'react';
import { selectV2 as select, text, boolean,number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


export class TestElement extends Component {
    constructor(props){
        super(props);

    }


    render(){

        const {color,touched,text,size}= this.props;

        return (
            <div style={{height:`${size}px`,width:`${size}px`,backgroundColor:color}}>
            {text}
            </div>
        )
    }
}

const component =()=>( 
    <TestElement
        text={text('text','SampleText')}
        color={text('color','red')}
        touched={boolean('touched',false)}
        size={number('size',100)}
        />
)


export default component;
