
const FirstComponent = ({ data, fn }) => {
  return ( 
    <div>
      {data}
      <button onClick={() => {fn(10)}}>
        Set 10
      </button>
    </div>
  )
}


export default FirstComponent