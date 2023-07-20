import {useState, useEffect} from "react";
import axios from 'axios';
import { log } from "react-native-reanimated";
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])  ;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    let response;
    

    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'Python developer in Texas, USA',
        page: '1',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Key': '5606c34202msh3f278398db1050bp175e8cjsn685231a915d5',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
        // params:{...query},
      };

      const fetchData = async()=>{
        setIsLoading(true);

        try
        {
             response = await axios.request(options);
            console.log(response.data.data,"data response")
            setData(response.data.data)
            setIsLoading(false);

        }
        catch (error) {
            setError(error);
            console.log(error,"error")
            //alert('There is an erro  yugtyg r')
        } finally{
            setIsLoading(false);

        }

      }
      useEffect(()=>{
        fetchData();
           }, []);

      const refetch=() => {
        setIsLoading(true);
        fetchData();
      }

      return{data, isLoading, error, refetch}
}
export default useFetch;