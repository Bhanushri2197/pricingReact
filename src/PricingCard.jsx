function PricingCard(props){

    let pricing ={
        FREE : [
                
                {   icon:" ✔ ", name:"Single User", className: "" },
                {   icon:" ✔ ", name:"50Gb Storage" , className: ""},
                {   icon:" ✔ ", name:"Unlimited Public Projects" , className: ""},
                {   icon:" ✔ ", name:"Community Access" , className: ""},
                {   icon:" ✖ ", name:"Unlimited Private Project" , className: "disable"},
                {   icon:" ✖ ", name:"Dedicated Phone Support" , className: "disable"},
                {   icon:" ✖ ", name:"Free Subdomain" , className: "disable"}  , 
                {   icon:" ✖ ", name:"Monthly Status Reports" , className: "disable"}   
            ],
        PLUS : [
            {   icon:" ✔ ", name:"5 User" , className: "" },
            {   icon:" ✔ ", name:"50Gb Storage" , className: ""},
            {   icon:" ✔ ", name:"Unlimited Public Projects" , className: ""},
            {   icon:" ✔ ", name:"Community Access" , className: ""},
            {   icon:" ✔ ", name:"Unlimited Private Project" , className: ""},
            {   icon:" ✔ ", name:"Dedicated Phone Support" , className: ""},
            {   icon:" ✔ ", name:"Free Subdomain" , className: ""}  , 
            {   icon:" ✖ ", name:"Monthly Status Reports" , className: "disable"}   
        ],
        PRO: [
            {   icon:" ✔ ", name:"Unlimited User" , className: ""},
            {   icon:" ✔ ", name:"50Gb Storage" , className: "" },
            {   icon:" ✔ ", name:"Unlimited Public Projects" , className: "" },
            {   icon:" ✔ ", name:"Community Access" , className: ""},
            {   icon:" ✔ ", name:"Unlimited Private Project" , className: ""},
            {   icon:" ✔ ", name:"Dedicated Phone Support" , className: ""},
            {   icon:" ✔ ", name:"Free Subdomain" , className: ""}  , 
            {   icon:" ✔ ", name:"Monthly Status Reports" , className: ""}   
        ]
        
     }
       
    return    <div className="pricingList">
                         <div className = "pricingPlan">{props.plan}</div>
                        <div className="priceValue">${props.price}/month</div>
                        <ul className="subscribeList">
                            {pricing[props.plan].map((list,index) => {
                               return  <li key={index}  className={list.className}><span  className="symbolMark">{list.icon}</span>{list.name}</li>
                             
                            })}
                        
                        </ul>
                
                        <button className="subscribeBtn">Subscribe</button>
                    </div>
                  
              
       
          
}

export default PricingCard