import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Begin(){
    const [data, setData] = useState({
        Bid : 0
    });
    const [team, setTeam] = useState("none")

    const teamList = ['Giants', 'Eagles', 'Redskins', 'Cowboys']

    function chooseTeam () {
        let rand = Math.floor(Math.random() * teamList.length) +1;
        setTeam(teamList[rand])
    }
    useEffect(()=>{
        chooseTeam();
    });

    const [highBid, setHighBid] = useState(0)

    const submitBid = async () =>{

        await axios.post("http://localhost:5000/bids",
        {
            bid: data.Bid
       })
    }

    const getHighBid = async () =>{
        axios.get("http://localhost:5000/getBid")
        .then(res => {
            let jsonNameArray = res.data
            let arr = 0;
            for(let i = 0; i < jsonNameArray.length; i++){
                if(jsonNameArray[i].bid > arr){
                    arr = jsonNameArray[i].bid
                }
            }
            setHighBid(arr)
        })
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value;
        setData(newData)
    }
    return(
        <div>
            <h3>
                We will now begin the auction in need to insert timer here
            </h3>
            <form onSubmit={(e) => submitBid(e)} onChange={getHighBid}>
                <label> Enter Your bid </label>
                <input onChange={(e) => {handle(e)}} id= "Bid" value = {data.Bid} placeholder="Bid" type = "number"></input>
                
            </form>
            <h1>
                Current team: {team}
            </h1>
            <h1>
                Highest Bid : {highBid}
            </h1>

            <button>
                End Bidding
            </button>
           
        </div>
    )
    
}
export default Begin