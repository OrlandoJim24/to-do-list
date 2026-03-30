import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import non_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const Todoitems = ({ no, display, text }) => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
            <img src={non_tick} alt="Tick"/>
            <img src={tick} alt="Non-Tick"/>
            <div className="todoitems-text">{text}</div>

        </div>
        <img src={cross} alt=""/>
    </div>
  )
}

export default Todoitems