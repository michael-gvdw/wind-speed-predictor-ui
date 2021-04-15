import React from 'react'

import '../styles/wind.scss'


const WindForecastPage = ({ handle_date_change, handle_wind_speed_multiplier_change, 
                            wind_speed_multiplier, wind_speed_multipliers, date, wind_speed }) => {
    return (
        <div className={`wind-forecast`}>

            <div className={`header`}>
                <span>wind speed in: </span>

                <select value={wind_speed_multiplier} onChange={handle_wind_speed_multiplier_change}>
                    {wind_speed_multipliers.map(multiplier => <option key={multiplier.id} value={multiplier.id}>{multiplier.scale}</option>)}
                </select>
            </div>

            <div className={`wind-values`}>
                <WindValue key={0} label={`prediction:`} value={5.6} />
                <WindValue key={1} label={`lower limit:`} value={2.4} />
                <WindValue key={2} label={`upper limit:`} value={7.1} />
            </div>

            <form>
                <input type={`date`} value={``} onChange={handle_date_change} />
                <input type={`submit`} value={`submit`} />
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

export default WindForecastPage