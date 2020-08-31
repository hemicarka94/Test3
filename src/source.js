import axios from 'axios'

export const getCompanyInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getAllShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}