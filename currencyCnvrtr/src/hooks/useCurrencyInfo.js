import  {useEffect,useState} from 'react'



function useCurrencyInfo(currency) {
    console.log(currency,"useCurrencyInfo")
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((r)=>(r.json()))
            .then((r)=>setData(r[currency]))
        console.log(typeof data)
        console.log('data is',data)
    }, [currency]);
    return data
}

export default useCurrencyInfo;