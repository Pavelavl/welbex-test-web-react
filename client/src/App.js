import React, { useState, useEffect } from "react"
import Pagination from "./components/pagination"
import Search from "./components/search"
import Select from "./components/select"
import Table from "./components/table"

function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [increase, setIncrease] = useState(true)
  const [totalRows, setTotalRows] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentPageNumber, setCurrentPageNumber]= useState(null)
  const [nextDisabled, setNextDisabled] = useState('page-item')
  const [prevDisabled, setPrevDisabled] = useState('page-item')
  const [currentActive, setCurrentActive] = useState('page-item')
  const limitRows = 10

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(res => setData(res.table))
      .then(setIsLoaded(true))
  }, [])

  const currentPage = (pg) => {
    setCurrentPageNumber(pg)
    setPrevDisabled('')
    setNextDisabled('')
    setCurrentActive('active')
  }

  const lastBlockRow = currentPageNumber * limitRows
  const firstBlockRow = lastBlockRow - limitRows
  const currentBlockRows = data.slice(firstBlockRow, lastBlockRow)

  useEffect(() => {
    if (!isLoaded) {
      return
    } 
    const getTotalPages = Number.isInteger(totalRows/limitRows) ? totalRows/limitRows : totalRows/limitRows + 1
    setTotalRows(data.length)
    setTotalPages(getTotalPages)
    
    currentPage()
    setCurrentPageNumber(1)
  }, [isLoaded, setTotalRows, data.length, totalRows])

  const pages = []
  for (let i = 1; i < totalPages; i++) {
    pages.push(i)
  }

  const sortData = (field) => {
    if (field === 'decrease') { setIncrease(false) }
    if (field === 'increase') { setIncrease(true) }
    const copiedData = (filterData.length === 0 ? currentBlockRows : filterData).concat()
    const sortedData = copiedData.sort(
      (a, b) => {return (increase ? a[field] > b[field] : a[field] < b[field]) ? 1 : -1}
    )
    setFilterData(sortedData)
  }

  const filteredData = (query) => {
    if (query === '') { setFilterData(currentBlockRows) } else {
      const copiedData = currentBlockRows.concat()
      const sortedData = []
      copiedData.forEach(el => {
        if (el.date.includes(query) || el.id.toString().includes(query) || el.name.toLowerCase().includes(query.toLowerCase()) || el.count.toString().includes(query) || el.distance.toString().includes(query)) {
          sortedData.push(el)
        }
      })
      setFilterData(sortedData)
    }
  }

  const nextPage = () => {
    if (currentPageNumber < totalPages - 1) {
      setCurrentPageNumber(currentPageNumber + 1)
      setPrevDisabled('')
    } else setNextDisabled('disabled')
  }

  const prevPage = () => {
    if (currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1)
      setNextDisabled('')
    } else setPrevDisabled('disabled')
  }


  return (
    <div className="container">
      <div>
        <Search filteredData={filteredData}/>
        <Select choice = {'field'} sortData={sortData}/>
        <Select sortData={sortData}/>
      </div>
      <Table data={filterData.length === 0 ? currentBlockRows : filterData} />
      {isLoaded && (totalRows > limitRows) && <Pagination currentActive={currentActive} currentPageNumber={currentPageNumber} prevDisabled={prevDisabled} nextDisabled={nextDisabled} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} pages={pages}/>}
    </div>
  )
}

export default App
