import './index.css'
import { Box, Typography, Table, TableHead, TableRow, TableBody, TableCell, TableContainer, Paper, Button } from '@mui/material'

function createData(product, quantity) {
    const total = product.price * quantity;
    return { product, quantity, total };
  }
  
  const rows = [
    createData({ productName: 'Baby Yoda Blueball', category: 'Star wars', price: 1799 }, 1),
    createData({ productName: 'Pidgeotto', category: 'Pokemon', price: 1799 }, 2)
  ];

export default function Cart(){
    return(
        <Box id='cart_section' sx={{margin:'0 75px'}} display='flex' justifyContent='center' flexDirection='column'>
            <Box>
                <Typography variant='h2' sx={{fontSize:'32px', fontWeight:'700',  borderBottom: '5px solid #F24E1E', margin:'20px 0', paddingBottom:'10px'}}>CARRITO DE COMPRAS</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '10px', overflow: 'hidden' }}>
                 <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                   <Table aria-label="simple table">
                     <TableHead>
                       <TableRow sx={{ backgroundColor: '#FAFAFF' , boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'}}>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700' }}>DETALLES DEL PRODUCTO</TableCell>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700' }}>CANTIDAD</TableCell>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700' }}>TOTAL</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       {rows.map((row, index) => (
                         <TableRow key={index} sx={{ backgroundColor: '#FAFAFF' , boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', marginBottom: '10px !important'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase' }}>{row.product.productName}</TableCell>
                           <TableCell sx={{ borderBottom: '0' }}>{row.quantity}</TableCell>
                           <TableCell sx={{ borderBottom: '0' }}>{row.total}</TableCell>
                         </TableRow>
                       ))}
                     </TableBody>
                   </Table>
                 </TableContainer>
            </Box>
            <Box alignSelf='end' sx={{marginBottom:'30px'}}>
                <Typography variant='h2' sx={{fontSize:'32px', fontWeight:'700',  borderBottom: '5px solid #F24E1E', margin:'20px 0', paddingBottom:'10px', textAlign:'end'}}>RESUMEN</Typography>
                <TableContainer component={Paper} sx={{ minWidth: 550, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', marginBottom:'30px' }}>
                   <Table aria-label="simple table">
                     <TableHead>
                       <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                         <TableCell sx={{ borderBottom: '0', fontWeight:'700' }}>CANTIDAD DE ELEMENTOS</TableCell>
                         <TableCell sx={{ borderBottom: '0'}}>3</TableCell>
                       </TableRow>
                     </TableHead>
                     <TableBody>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', fontWeight:'700' }}>SUBTOTAL</TableCell>
                           <TableCell sx={{ borderBottom: '0' }}>5399</TableCell>
                         </TableRow>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', fontWeight:'700' }}>ENVIO</TableCell>
                           <TableCell sx={{ borderBottom: '0' }}>0</TableCell>
                         </TableRow>
                         <TableRow sx={{ backgroundColor: '#FAFAFF'}}>
                           <TableCell sx={{ borderBottom: '0', textTransform: 'uppercase', fontWeight:'700' }}>TOTAL</TableCell>
                           <TableCell sx={{ borderBottom: '0' }}>5399</TableCell>
                         </TableRow>
                     </TableBody>
                   </Table>
                 </TableContainer>
                 <Button sx={{backgroundColor :'#FF3333', color:'white', padding: '10px 15px', width: '100%', borderRadius: '0', fontWeight:'600', fontSize:'20px'}}>IR A PAGAR</Button>
            </Box>
        </Box>
    )
}