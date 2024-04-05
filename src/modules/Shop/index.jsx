import Searchbar from "../../components/Searchbar"
import ShopPagination from "../../components/ShopPagination"
import './index.css'

export default function Shop(){
    return(
        <div id="shop">
            <Searchbar/>
            <ShopPagination/>
        </div>
    )
}