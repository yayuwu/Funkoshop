import { Dialog, DialogTitle, DialogActions } from "@mui/material";

export default function SuccessItemModal () {
    return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¡El producto ha sido agregado exitosamente al carrito! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
    </Dialog>
    )
}