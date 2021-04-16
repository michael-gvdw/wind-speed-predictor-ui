import axios from 'axios'


// const BASE_WIND_URL = "http://127.0.0.1:5000"
const BASE_WIND_URL = "https://wind-speed-predictor-api.herokuapp.com"

export const fetch_wind_speed_data = async (date) => {
    const { data } = await axios.get(`${BASE_WIND_URL}/wind-speed-data/${date}`)
    return data
}