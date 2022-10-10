import React from 'react'

const Table = (props) => {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Дата</th>
            <th>Имя</th>
            <th>Количество</th>
            <th>Дистанция</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(
              item => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.date.slice(0, 10)}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>{item.distance}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    )
}

export default Table
