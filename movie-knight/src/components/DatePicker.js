import React,{useState} from 'react';

const DataPicker = props =>{
    
    var today = new Date();
    var tomorrow = new Date(today.getTime() );

    const [active, setActive] = useState(false);

    function toggleClass(){
    const currentState = active;
    setActive(!currentState)
  }
    
    console.log(tomorrow);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    function HomePage(){
        props.history.push('/')
    }

    return (
        <div>

        <div>
            <button onClick={HomePage}>⬅</button>
        </div>

           <h2 className='question'>When would you like to go?</h2>

            <div className="days">

            
            {
               days.map(day => {
                   return(
                       <button key={day} className={active ? ' day red-box' : 'day'} onClick={() =>toggleClass()}>{day}</button>
                   )
               })
            }

            </div>



           <div className='black-box'>
                <button className='next-button'>Next</button>
            </div>
        </div>
    )
}

export default DataPicker;
