import React, { useEffect, useState } from 'react';


import WindForecastPage from '../pages/WindForecastPage'

const WindForecastComponent = () => {

    const [date, set_date] = useState(null)
    const [wind_speed, set_wind_speed] = useState(5) 
    const [wind_speed_multiplier, set_wind_speed_multiplier] = useState(0)
    const [wind_speed_multipliers, set_wind_speed_multipliers] = useState(
                                                                        [
                                                                            {id: 0, scale: 'm/s'}, 
                                                                            {id: 1, scale: 'knots'}, 
                                                                            {id: 2, scale: 'beaufort'},
                                                                        ])

    useEffect(() => {

    }, [])

    const handle_date_change = (event) => {
        const { name, value } = event.target
        set_date(value)
    }

    const handle_wind_speed_multiplier_change = (event) => {
        const { name, value } = event.target

        if (value != 0 && value != 1 && value != 2) {
            set_wind_speed_multiplier(0)
        }
        else {
            set_wind_speed_multiplier(value)
        }    
    }

    return (
        <WindForecastPage 
            handle_date_change={handle_date_change} 
            handle_wind_speed_multiplier_change={handle_wind_speed_multiplier_change}
            wind_speed_multiplier={wind_speed_multiplier}
            wind_speed_multipliers={wind_speed_multipliers}
            date={date}
            wind_speed={wind_speed}
        />
    )
}

export default WindForecastComponent