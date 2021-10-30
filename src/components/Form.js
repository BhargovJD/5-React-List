import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    nameChangeHandler = (e) => {
        console.log("Name:",e.target.value)
    }

    changeHandler = (e) => {
        console.log("Select:",e.target.value)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="Country"></label>
                        <input type="text" name="name" onKeyUp={this.nameChangeHandler} />
                    </div>

                    <div>
                        <label htmlFor="Country"></label>
                        <select onChange={this.changeHandler} name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </form>

                <hr />
            </div>
        )
    }
}
