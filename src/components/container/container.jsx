import {useState,useEffect} from 'react'
import Dropdown from './dropdown/Dropdown';
import Card from './card/Card';
function Container(){
    const API_KEY= 'pub_153994c3c454bfceb8eb228a254ccfea8227f';
    const [dropdownValue,setDropdownValue] = useState('business');
    const [news,setNews] = useState([])

    async function callAPI(){
        const req = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=car&country=us&language=en&category=${dropdownValue}`)
        const res =  await req.json()
        setNews(res.results)
    }

    useEffect(()=>{
        callAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dropdownValue])

    
    return(<><h1>My News</h1>
    <Dropdown valueDropDown={dropdownValue} setDropdownValue={setDropdownValue}/>
    {
        news.map((newToRead)=> (<Card data={newToRead} key={newToRead.title}/>))
    }
    </>)
}
export default Container