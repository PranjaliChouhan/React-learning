import React from "react";
import { ReactDOM } from "react-dom/client";

 const Heading1=React.createElement("h2",{
        id:"title",
    },"Heading 1");
    const Heading2=React.createElement("h3",{
        id:"title",
    },"Heading 2");

    const container=React.createElement("div",{//react is a global variable
         id:"container"
    },[Heading1, Heading2]);//these headings are react elemnets and object at the end of the day
    const root=ReactDOM.createRoot(document.getElementById("root"));
    //passing a react element inside the root
    
    root.render(container);