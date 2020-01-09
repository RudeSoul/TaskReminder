import React, { Component } from 'react';

class Form extends Component {

    state = {
        inputVal: '',
        selectVal: '',
        searchTerms: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name + 'Val']: e.target.value
        })
    }
 
    handleSubmit = (e) => {
        const {inputVal, selectVal} = this.state;
        e.preventDefault();
        this.props.addTask(inputVal, selectVal);
        // this.props.searchChanged(searchTerms, selectVal);
        this.setState({
            inputVal: '',
            selectVal: '',
            // searchTerms:'',
            
        })
    }
    render() {
        return (
            <div>
            <form className="inputForm" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        name="input"
                        placeholder="Add your task here.." required
                            value={this.state.inputVal}
                            onChange={this.handleChange}
                        />
                 
                <input type="submit" value="+" />
                
            </form>

               
            
            </div>
        );
    }
}

export default Form;