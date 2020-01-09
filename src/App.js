import React from 'react';
import Form from './components/Form';
import Task from './components/Task';
import Verify from './components/Verify';
import Filter from './components/Filter';
import './app.css';
import Search from './components/search';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [
                { title: "Learn React ", isComplete: true },
                { title: "Get A Job", isComplete: true },
                { title: "Build Tools", isComplete: false },
                { title: "Earn Money", isComplete: false },
                { title: "SLEEP LIKE PANDA", isComplete: false }
            ],
            applyVerify: null,
            selectedTasktitle: null,
            filter: 'all',
            searchTerms: '',
        }
    }

    addTask = (title) => {
        this.setState((prevState) => {
            const task = { title, isComplete: false };
            return ({
                tasks: prevState.tasks.concat([task])
            })
        })
    }

    callVerify = (selectedTask) => {
        this.setState({
            applyVerify: true,
            selectedTasktitle: selectedTask
        })
    }
    onYes = () => {
        const tasktitle = this.state.selectedTasktitle;
        this.delTask(tasktitle, () => {
            this.setState({
                applyVerify: false,
                selectedTasktitle: null,
            })
        });
    }
    onNo = () => {
        this.setState({
            applyVerify: false,
            selectedTasktitle: null,
        })
    }
    delTask = (title, callback) => {

        this.setState(prevState => {
            return (
                {
                    tasks: prevState.tasks.filter(task => task.title !== title)
                }
            )
        }, callback)
    }
    isCompleteFn = (tasktitle) => {
        this.setState(
            (prevState) => {
                const updatedTasks = prevState.tasks.map(task => {
                    if (task.title === tasktitle)
                        task.isComplete = !task.isComplete;

                    return task;
                });
                return (
                    {
                        tasks: updatedTasks
                    }
                )
            }
        )
    }

    changeFilter = (filter) => {
        this.setState({
            filter: filter
        }
        );

    }
    filterTasks = (filter) => {
        const tasks = this.state.tasks;
        return (tasks.filter(this.filters[filter]))
    }
    tasksCount = (filter) => {
        const tasks = this.state.tasks;
        return (tasks.filter(this.filters[filter]).length)
    }
    filters = {
        "all": task => task,
        "uncompleted": task => !task.isComplete,
        "completed": task => task.isComplete,
    }
    searchChanged = (evt) => {
        this.setState({ searchTerms: evt.target.value })
    }


    render() {
        const filter = this.state.filter;
        const tasks = this.state.searchTerms === '' ? this.filterTasks(filter) : this.filterTasks(filter).filter(item => (item.title.toLowerCase().includes(this.state.searchTerms.toLowerCase())));
        const tasksCopy = tasks;


        return (
            <div>
                <h1>DayMarker</h1>

                <Form
                    addTask={this.addTask}
                />
                <Search
                    searchChanged={this.searchChanged}
                    val={this.state.searchTerms}
                />

                <div className="row">
                    <Filter
                        tasksCount={this.tasksCount}
                        filter={this.state.filter}
                        changeFilter={this.changeFilter}
                    />
                </div>

                <div>
                    {
                        this.state.applyVerify &&
                        <Verify onYes={this.onYes}
                            onNo={this.onNo}
                            message="Delete Task ?"
                        />
                    }

                    {this.state.tasks.length === 0 && <div>No Tasks !</div>}

                    {this.state.tasks.length !== 0 &&
                        tasksCopy.map(task =>
                            <Task key={task.title}
                                {...task}
                                callVerify={this.callVerify}
                                isCompleteFn={this.isCompleteFn}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;