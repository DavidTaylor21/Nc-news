import { fetchTopics } from "../Api"
import { useState, useEffect } from "react"
import TopicCard from "./TopicCard"
function TopicList(){
    const[topics, setTopics] = useState([])
    useEffect(()=>{
        fetchTopics().then((topics)=>{
            setTopics(topics)
        })
    }, [])
    return (
        <>
        {topics.map((topic)=>{
            return <TopicCard topic={topic} key ={topic.slug}/>
        })}
        </>
    )
}
export default TopicList