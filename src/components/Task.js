import React from 'react';

class Task extends React.Component {
    handleDel = () => {
        const title = this.props.title;
        this.props.callVerify(title);
    }
    handleComplete = () => {
        const title = this.props.title;
        this.props.isCompleteFn(title);
    }
    render() {
        const bgColor = {
            "medium": "salmon",
        }
        const {
            changeColor,
            title,
            isComplete,
        } = this.props;
        return (
            <div className="task">
                <div className="row"
                    style={!isComplete ? { backgroundColor: bgColor[changeColor] }
                        : { backgroundColor: 'rgb(104, 104, 104)' }
                    }>

                    <button
                        id="complete"
                        onClick={this.handleComplete}>
                        {isComplete ? <span>&#10004;</span> : <span></span>}
                    </button>


                    <p>{title}</p>


                    <button
                        onClick={this.handleDel}>
                        Delete
                        </button>
                </div>

            </div>
        );
    }
};

export default Task;