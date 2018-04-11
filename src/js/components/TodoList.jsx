import React, { Component } from 'react';

const TodoList = ({ items }) => {
    const renderList = () => {
        return items.map((item, index) => {
            return (
                <li key={ index }>{ item.text }</li>
            );
        })
    };

    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    );
};

export default TodoList;