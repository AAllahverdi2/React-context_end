import Add from "./Pages/Admin/Add"
import AdminRoot from "./Pages/Admin/AdminRoot"
import DashBoard from "./Pages/Admin/DashBoard"
import BAsket from "./Pages/Client/BAsket"
import Detail from "./Pages/Client/Detail"
import Fav from "./Pages/Client/Fav"
import Home from "./Pages/Client/Home"
import MainRoot from "./Pages/Client/MainRoot"

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"BAsket",
                element:<BAsket/>
            },
            {
                path:"Fav",
                element:<Fav/>
            },
            {
                path:"prod/:id",
                element:<Detail/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<DashBoard/>
            },
            {
                path:"Add",
                element:<Add/>
                
            }
        ]
    }
]

export default ROUTES