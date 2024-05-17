import { useState, useEffect } from 'react';
import { Hidden, Fab, Box, Drawer } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { useData } from '../../../utils/context/useData';
import './index.css'

export default function Searchbar(){
    const [open, setOpen] = useState(false);
    const { getData } = useData();
    const [items, setItems] = useState(null);
     const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
    
      useEffect(() => {
        const fetchData = async () => {
          const data = await getData();
          setItems(data);
          console.log("searchbar items: ", data)
        };
        fetchData();
      }, [getData]);
    return(
      <div id='searchbar'>
            <div id='search'>
                <input type="text" placeholder="Buscar item o categoría"/>
                <SearchIcon sx={{marginLeft: '20px', '&:hover': {
                    cursor : 'pointer'
                }}}/>
            </div>
        </div>
    )
}