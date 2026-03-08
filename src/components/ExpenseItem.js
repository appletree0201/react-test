import React, { Component } from 'react'
import "./ExpenseItem.css";

export class ExpenseItem extends Component {
  render() {
    return (
        <li classname= 'item'>
            <div className="info">
                <span className="expense"></span>
                <span className="expense">원</span>
            </div>
            <div className="button">
                <button className="edit-btn">수정</button>
                <button className="clear-btn">삭제</button>
            </div>
        </li>
    )
  }
}

export default ExpenseItem