import { Dialog, DialogTitle, DialogActions } from "@mui/material";

export default function RemoveItemModal () {
    return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle>{"Eliminar del carrito"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¿Estás seguro que quieres eliminar el producto del carrito? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
    </Dialog>
    )
}