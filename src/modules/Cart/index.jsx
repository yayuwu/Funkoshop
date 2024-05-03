import { useEffect, useState } from 'react';
import './index.css'
import { Box, Typography, Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Paper, Button } from '@mui/material'

export default function Cart(){
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      console.log(cartItems && cartItems.length > 0 ? cartItems[0].img : 'No hay imagen disponible');
      console.log()
    } else {
      console.log('No hay elementos en el carrito almacenados en localStorage');
    }
  }, []);
    return(
        <Box id='cart_section' sx={{margin:'20px 75px'}} display='flex' justifyContent='center' flexDirection='column'>
            <Box>
                <Typography variant='h2' sx={{fontSize:'32px', fontWeight:'700',  borderBottom: '5px solid #F24E1E', margin:'20px 0', paddingBottom:'10px', display: 'inline-block'}}>CARRITO DE COMPRAS</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', overflow: 'hidden' }}>
                 <TableContainer component={Paper} sx={{ minWidth: 650, marginBottom:'10px' }}>
                   <Table aria-label="simple table">
                     <TableHead>
                       <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700', paddingLeft:'50px'}}>DETALLES DEL PRODUCTO</TableCell>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700', textAlign:'center' }}>CANTIDAD</TableCell>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700', textAlign:'center' }}>TOTAL</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                     {cartItems && cartItems.length > 0 ? (
                         cartItems.map((cartItem) => (
                           <TableRow key={cartItem?.key} sx={{ backgroundColor: '#FAFAFF'}}>
                             <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
                               <Box>
                                 {cartItem && cartItem?.img && <img src={cartItem.img} alt="" style={{width: '200px'}}/>}
                               </Box>
                               <Box sx={{paddingLeft:'20px'}}>
                                 {cartItem && cartItem?.title && <Typography fontWeight='600'>{cartItem.title}</Typography>}
                                 {cartItem && cartItem?.category && <Typography fontSize='12px'>{cartItem.category}</Typography>}
                                 {cartItem && cartItem?.price && <Typography fontSize='12px' textTransform='none'>Precio unitario: ${cartItem.price}</Typography>}
                               </Box>
                             </TableCell>
                             <TableCell sx={{ borderBottom: '0', textAlign:'center' }}>{}</TableCell>
                             { cartItem && cartItem?.price && <TableCell sx={{ borderBottom: '0', textAlign:'center' }}>${cartItem.price}</TableCell>}
                           </TableRow>
                         ))
                       ) : (
                         <TableRow>
                          <TableCell sx={{textAlign:'center'}} colSpan={3}>No agregaste nada al carrito aún.</TableCell>
                         </TableRow>
                       )}

                     </TableBody>
                   </Table>
                 </TableContainer>
            </Box>
            {cartItems && cartItems.length > 0 && 
            <Box alignSelf='end' sx={{marginBottom:'30px'}}>
                <Box sx={{ textAlign: 'end'}}>
                  <Box sx={{display: 'inline-block'}}>
                     <Typography variant='h2' sx={{fontSize:'32px', fontWeight:'700',  borderBottom: '5px solid #F24E1E', margin:'20px 0', paddingBottom:'10px'}}>RESUMEN</ Typography>
                  </Box>
                </Box>
                <TableContainer component={Paper} sx={{ minWidth: 400, marginBottom:'30px'}}>
                   <Table aria-label="simple table">
                     <TableHead>
                       <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700' }}>CANTIDAD DE ELEMENTOS</TableCell>
                         <TableCell sx={{ borderBottom: '0', textAlign:'end'}}>3</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', fontWeight:'700' }}>SUBTOTAL</TableCell>
                           <TableCell sx={{ borderBottom: '0' , textAlign:'end'}}>$5399</TableCell>
                         </TableRow>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ textTransform: 'uppercase', fontWeight:'700', borderBottom: '2px solid #F24E1E' }}>ENVIO</TableCell>
                           <TableCell sx={{  textAlign:'end', borderBottom: '2px solid #F24E1E'}}>$0</TableCell>
                         </TableRow>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', fontWeight:'700' }}>TOTAL</TableCell>
                           <TableCell sx={{ borderBottom: '0' , textAlign:'end'}}>$5399</TableCell>
                         </TableRow>
                     </TableBody>
                   </Table>
                 </TableContainer>
                 <Button sx={{backgroundColor :'#FF3333', color:'white', padding: '10px 15px', width: '100%', borderRadius: '0', fontWeight:'600', fontSize:'20px', '&:hover': {
                   backgroundColor: '#FF6666', },}}>IR A PAGAR</Button>
            </Box>
            }
        </Box>
    )
}