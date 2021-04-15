import React, { useEffect, useState } from 'react';


import WindForecastPage from '../pages/WindForecastPage'

const WindForecastComponent = () => {
    const d = new Date();

    const [day, set_day] = useState(d.getDate())
    const [month, set_month] = useState(d.getMonth() + 1)
    const [year, set_year] = useState(d.getFullYear())

    const [wind_speed, set_wind_speed] = useState(5.6) 
    const [wind_speed_lower, set_wind_speed_lower] = useState(2.4)
    const [wind_speed_upper, set_wind_speed_upper] = useState(7.1)

    const [wind_speed_multiplier, set_wind_speed_multiplier] = useState(0)
    const [wind_speed_multipliers, set_wind_speed_multipliers] = useState(
                                                                        [
                                                                            {id: 0, scale: 'm/s', value: 1}, 
                                                                            {id: 1, scale: 'knots', value: 1.94384}, 
                                                                            {id: 2, scale: 'beaufort', value: 1.1268406556253},
                                                                        ])

    useEffect(() => {
        
    }, [])


    const handle_wind_speed_multiplier_change = (event) => {
        const { name, value } = event.target

        if (value != 0 && value != 1 && value != 2) {
            set_wind_speed_multiplier(0)
        }
        else {
            set_wind_speed_multiplier(value)
        }    
    	
    }

    const fetch_wind_speed = (event) => {
        event.preventDefault()
        
        const date = `${day}-${month}-${year}`
        console.log(`click: ${date}`)
    }

    return (
        <WindForecastPage 
            handle_wind_speed_multiplier_change={handle_wind_speed_multiplier_change}
            
            wind_speed_multiplier={wind_speed_multiplier}
            wind_speed_multipliers={wind_speed_multipliers}

            day={day}
            month={month}
            year={year}

            set_day={set_day}
            set_month={set_month}
            set_year={set_year}

            wind_speed={wind_speed}
            wind_speed_lower={wind_speed_lower}
            wind_speed_upper={wind_speed_upper}

            fetch_wind_speed={fetch_wind_speed}
        />
    )
}

export default WindForecastComponent