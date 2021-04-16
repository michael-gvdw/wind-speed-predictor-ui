import React from 'react'

import '../styles/wind.scss'


const WindForecastPage = ({ handle_wind_speed_multiplier_change, 
                            wind_speed_multiplier, wind_speed_multipliers,
                            day, month, year, 
                            set_day, set_month, set_year, 
                            wind_speed, wind_speed_lower, wind_speed_upper, 
                            fetch_wind_speed }) => {
    return (
        <div className={`wind-forecast`}>

            <div className={`header`}>
                <span>wind speed in: </span>

                <select value={wind_speed_multiplier} onChange={handle_wind_speed_multiplier_change} disabled={true}>
                    {wind_speed_multipliers.map(multiplier => <option key={multiplier.id} value={multiplier.id}>{multiplier.scale}</option>)}
                </select>
            </div>

            <div className={`wind-values`}>
                <WindValue key={0} label={`prediction:`} value={wind_speed} />
                <WindValue key={1} label={`lower limit:`} value={wind_speed_lower} />
                <WindValue key={2} label={`upper limit:`} value={wind_speed_upper} />
            </div>

            <form>
                <div className={`select-group`}>
                    <FormSelect start={1} end={32} label={`day:`} value={day} handle_change={set_day} />
                    <FormSelect start={1} end={13} label={`month:`} value={month} handle_change={set_month} />
                    <FormSelect start={2021} end={2022} label={`year:`} value={year} handle_change={set_year} />
                </div>
                <input type={`button`} value={`submit`} onClick={fetch_wind_speed}/>
            </form> 

        </div>
    )
}

const WindValue = (props) => {
    return(
        <div className={`value`}>
            <label>{ props.label }</label>
            <input type="text" value={props.value} readOnly={true} disabled={true} />
        </div>
    )
}

const FormSelect = (props) => {

    let items = []
    for (let i=props.start; i<props.end; i++) {
        items.push(<option key={i} value={i}>{ i }</option>)
    }

    return (
        <div className={`select-item`}>
            <label>{ props.label }</label>

            <select 
                value={props.value} 
                onChange={(event) => props.handle_change(event.target.value)} 
            >{ items }</select>
        </div>
    )  
}

export default WindForecastPage