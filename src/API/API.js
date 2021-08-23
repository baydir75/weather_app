/* const API_KEY = "abc817763a2a7c4405e13c58d571e89d" */

const weatherSearch = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=abc817763a2a7c4405e13c58d571e89d`)
    const data = await response.json()
    return data
}

export default weatherSearch