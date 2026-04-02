import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import non_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const Todoitems = ({ no, display, text }) => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
            {display==="" ?<img src={non_tick} alt=""   /> : <img src={tick} alt="Tick"/>}
            <div className="todoitems-text">{text}</div>

        </div>
        <img className="todoitems-cross-icon" src={cross} alt="Delete"/>
    </div>
  )
}

export default Todoitems