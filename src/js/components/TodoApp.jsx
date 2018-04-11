import React, { Component } from 'react';
import TodoList from './TodoList.jsx';
import Label from './Label.jsx';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.state.text.length) {
            return;
        }
        
        const newItem = {
            text: this.state.text,
            id: new Date().toISOString()
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));

    }

    render() {
        return (
            <div>
                <h3>Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <Label>What needs to be done?</Label>
                    <input type="text" id="new-todo" onChange={this.handleChange} value={this.state.text} />
                    <button>Add</button>
                </form>
                <TodoList items={this.state.items} />
            </div>
        );
    }
}