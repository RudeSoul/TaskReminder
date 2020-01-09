import React from 'react';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            inputVal: '',
            selectVal: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name + 'Val']: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { inputVal, selectVal } = this.state;
        e.preventDefault();
        this.props.searchChanged(inputVal, selectVal);
        this.setState({
            inputVal: '',
            selectVal: '',
        })
    }

    render() {
        return (
            <div>
                <form className="inputForm" onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        name="input"
                        placeholder="Search your task here.." required
                        value={this.props.val}
                        onChange={e => this.props.searchChanged(e)}
                    />

                    <input type="submit" value="+" />

                </form>



            </div>
        );
    }
}

export default Search;