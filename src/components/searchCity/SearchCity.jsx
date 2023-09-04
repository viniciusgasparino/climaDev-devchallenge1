import InputSugestions from "../form/inputSugestions/InputSugestions"
import {useState,useEffect} from "react"
import {useRouter} from "next/router"
          
        
function SearchCity(){
  const [searchText,setSearchText] = useState("")
  const [sugest,setSugest] = useState([])
  const router = useRouter()

  const fecthCityList = async () => {
    const LIMIT = 5
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${LIMIT}&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
    const json = await response.json()
    handleList(json)
  }


  const handleList = (list) => {
    const formatedList = list.map((obj) => ({
      text: `${obj.name},${obj.state},${obj.country}`,
      onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
    }))
    setSugest(formatedList)
  }


  useEffect(() => {
    if(searchText.length >= 3) fecthCityList()
    else setSugest([])
  },[searchText])


  return(
    <InputSugestions 
      placeholder="Digite o nome da cidade"
      value={searchText}
      onChange={(e)=>setSearchText(e.target.value)}
      sugestions={sugest}
    />
  )
}

export default SearchCity