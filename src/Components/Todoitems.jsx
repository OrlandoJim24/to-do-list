import './CSS/Todoitems.css'
import tick from '../Assets/tick.png'
import non_tick from '../Assets/non_tick.png'
import cross from '../Assets/cross.png'

const Todoitems = () => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
            <img src={non_tick} alt="Tick"/>
            <img src={tick} alt="Non-Tick"/>
            <div className="todoitems-text"></div>

        </div>
        <img src={cross} alt=""/>
    </div>
  )
}

export default Todoitems