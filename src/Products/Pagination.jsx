import React from 'react'

function Pagination({current,totalPages,onChange}) {

    const prev = <button disabled={current == 1} onClick={() => onChange(current -1)}
    >PREV</button>

    const currentPage = <button>{current}</button>

    const next  = <button disabled={current==totalPages}
    onClick={()=> onChange(current + 1)}
    >NEXT</button>



  return (
    <div>
      {prev}
      {currentPage}
      {next}
    </div>
  )
}

export default Pagination
