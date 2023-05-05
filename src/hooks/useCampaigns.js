import { useEffect, useState } from "react"

const useCampaigns = (email) => {
    const [campaigns, setCampaigns] = useState([]);
    const [isCampaignsLoading, setIsCampaignsLoading] = useState(true);



    useEffect(() => {
        if(email){
            fetch(`https://fund-future-server.vercel.app/all-campaigns`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCampaigns(data);
                setIsCampaignsLoading(false);
            })
        }

    },[email])
    return [campaigns, isCampaignsLoading]
}

export default useCampaigns;