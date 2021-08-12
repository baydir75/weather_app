// Component Page d'accueil
import weatherSearch from '../API/API'
import { useState, useEffect } from 'react'

const Home = () => {
    const [city, setcity] = useState("")
    const [data, setData] = useState({})

    const dataResult = async (e) => {
        e.preventDefault()
        const dataTemp = await weatherSearch(city)
        setData(dataTemp)
        console.log(dataTemp)
    }

    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <form onSubmit={dataResult}>
                    <input onChange={e => setcity(e.target.value)} type="text"></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
            <div>
                <p>City : {data.name}</p>
                <p>Temperature : {data.main ? data.main.temp : null}</p>
            </div>
        </div>
    )
}

export default Home