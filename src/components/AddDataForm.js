import React from 'react'
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createData} from '../actions';

class AddDataForm extends React.Component {

    renderError({error,touched}){
        if (touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    reflectValue(){

    }

    renderInput = ({input,placeholder,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return (
            <div className={className}>
                <input {...input} autoComplete="off" placeholder={placeholder}/>
                {this.renderError(meta)}
            </div>
        
        )
    }

    onSubmit = (formValues) => {
        this.props.createData(formValues)
    }

    render(){ 
        
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <h4 className="ui dividing header">Client Details</h4>
                <div className="four fields">
                    <Field name="iwo" component={this.renderInput} placeholder="IWO No."/>
                    <Field name="client" component={this.renderInput} placeholder="client" />
                    <Field name="die" component={this.renderInput} placeholder="Die No." />
                    
                </div>


                <h4 className="ui dividing header">Time</h4>
                <div className="two fields">
                    <Field name="in" component={this.renderInput} placeholder="In"/>
                    <Field name="out" component={this.renderInput} placeholder="Out"/>
                </div>

                <h4 className="ui dividing header">Billet INPUTS</h4>
                <div className="three fields">
                    <Field name="size" component={this.renderInput} placeholder="Size"/>
                    <Field name="nos" component={this.renderInput} placeholder="Nos."/>
                    <Field name="weight" component={this.renderInput} placeholder="Weight"/>
                    <Field name="alloy" component={this.renderInput} placeholder="Alloy" />
                    <Field name="speed" component={this.renderInput} placeholder="Production speed"/>

                </div>


                <button className="ui button secondary">Submit</button>
            </form>
        )
    }
    }

const validate = (formValues) => {
    const errors = {}
    if (!formValues.iwo){
        errors.iwo = 'You must enter IWO no.'
    }
    if (!formValues.client){
        errors.client = 'You must enter client'
    }
    if (!formValues.die){
        errors.die = 'You must enter die no.'
    }
    if (!formValues.in){
        errors.in = 'You must enter in time'
    }
    if (!formValues.out){
        errors.out = 'You must enter out time'
    }
    if (!formValues.size){
        errors.size = 'You must enter size'
    }
    if (!formValues.nos){
        errors.nos = 'You must enter nos.'
    }
    if (!formValues.weight){
        errors.weight = 'You must enter  weight'
    }
    if (!formValues.out){
        errors.alloy = 'You must enter out alloy'
    }
    if (!formValues.size){
        errors.speed = 'You must enter speed'
    }

    return errors;
}

const formWrapped =  reduxForm({
    form:'addDataForm',
    validate
})(AddDataForm);


export default connect(null,{createData})(formWrapped);