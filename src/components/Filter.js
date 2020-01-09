import React from 'react';

const Filter = (props) => {
    const { filter, changeFilter, tasksCount } = props;
    return (
        <div id="filter">
            <div className="row">
                <label>
                    <input
                        type="radio"
                        name="Filter"
                        value="all"
                        checked={filter === 'all' ? true : false}
                        onChange={changeFilter.bind(null, 'all')}
                    />

                    &nbsp;All&nbsp;
                    
                    ({tasksCount("all")})

                </label>


                <label>
                    <input
                        type="radio"
                        name="Filter"
                        value="uncompleted"
                        checked={filter === 'uncompleted' ? true : false}
                        onChange={changeFilter.bind(null, 'uncompleted')}
                    />
                    &nbsp;Remaining&nbsp;
                    ({tasksCount("uncompleted")})

                </label>



                <label>
                    <input
                        type="radio"
                        name="Filter"
                        value="completed"
                        checked={filter === 'completed' ? true : false}
                        onChange={changeFilter.bind(null, 'completed')}
                    />
                    &nbsp;Completed&nbsp;
                    ({tasksCount("completed")})

                </label>
            </div>
        </div>
    );
};

export default Filter;