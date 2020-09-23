import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: '',
    description: '',
    know: ''
   
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    //call api
    console.log(JSON.stringify(this.state))
}

render() {
    return <form onSubmit={this.handleSubmit}>
        <h1 className='formName'>MyProfile</h1>
        <label>
            Name: 
            <input 
                className='name'
                type='text' 
                name='name' 
                onChange={this.handleChange}
                value={this.state.name} />
        </label>
        <label>
            Gender: 
            <input 
                className='gender'
                type='select' 
                name='gender' 
                onChange={this.handleChange}
                value={this.state.gender} />
        </label>
        <label>
            Description: 
            <input 
                className='description'
                type='textarea' 
                name='description' 
                onChange={this.handleChange}
                value={this.state.description} />
        </label>
        <label>
            <input 
                className='know'
                type='checkbox' 
                name='know' 
                onChange={this.handleChange}
                value={this.state.description} />
                I have read the terms of product
        </label>
        
        <input 
            className='submit' 
            type='submit' 
            value='Submit'
             disabled={!this.state.name || !this.state.gender || !this.state.description|| !this.state.know  } />
    </form>
}
}

export default MyProfile;


