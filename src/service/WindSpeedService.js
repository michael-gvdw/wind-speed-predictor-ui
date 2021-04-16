import axios from 'axios'




export const fetch_wind_speed_data = async () => {
    const { data } = await axios.get()

    return data
}