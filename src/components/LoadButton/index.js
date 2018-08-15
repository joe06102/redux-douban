import React from 'react'


const LoadButton = ({ loadMore }) => {
  return (
    <button style={{
      display: 'block',
      margin: '16px auto',
      minWidth: '120',
      height: '40px',
      lineHeight: '40px',
      fontSize: '20px',
      border: '0 none',
      boxShadow: '0 0 4px 1px #ccc',
      backgroundColor: '#fff',
      cursor: 'pointer',
    }} onClick={loadMore}>
      加载更多
    </button>
  )
}

export default LoadButton