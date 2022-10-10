import React from 'react'

const Select = ({choice, sortData}) => {
    if (choice === 'field') {
        return (
            <select className="form-select" onChange={(event) => {sortData(event.target.value)}} aria-label="Default select">
                    <option value="id">Номер</option>
                    <option value="name">Имя</option>
                    <option value="count">Количество</option>
                    <option value="distance">Дистанция</option>
            </select>
        )
    } else {
        return (
            <select id='increase' className="form-select" onChange={(event) => {sortData(event.target.value)}} aria-label="Default select">
                    <option value="increase">По возрастанию</option>
                    <option value="decrease">По убыванию</option>
            </select>
        )
    }
    
}

export default Select
