import React from 'react'

import '../styles/wind.scss'


const WindForecastPage = ({ handle_date_change, handle_wind_speed_multiplier_change, 
                            wind_speed_multiplier, wind_speed_multipliers, date, wind_speed }) => {
    return (
        <div className={`jumbotron center-div`}>
            <div className={`wind-page`}> 

                <div className={`header`}>
                    <span>Wind Speed: {wind_speed}</span>
                    <select name={`wind_multiplier`} value={wind_speed_multiplier} onChange={handle_wind_speed_multiplier_change}>
                        {wind_speed_multipliers.map(multiplier => <option value={multiplier.id}>{multiplier.scale}</option>)}
                    </select>
                </div>

                <form>
                    <input type={`date`} value={date} />
                    <button type={`button`}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default WindForecastPage