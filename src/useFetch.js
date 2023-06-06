import { useState,useEffect } from "react"
//custom hook need start with use

const useFetch=(url)=>{
    const [data,setdata]=useState(null)
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const abortCont=new AbortController()
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok){
                  throw new Error('Couldn\'t fetch data from that resource')  
                }
                return res.json() 
            })
            .then((data)=>{
                console.log(data)
                setdata(data)
                setIsPending(false)
            })
            .catch((err)=>{
                console.log(err.name)
                if(err.name==='AbortError'){
                    console.log('fetch aborted')
                }else{
                setError(err.message)
                setIsPending(false)
                }
            })
        },1000)
        return ()=>abortCont.abort()
    },[url])

    return {
        data,isPending,error
    }

}

export default useFetch