import { Dialog, DialogProps } from "../../Dialog";

export function AddRegionDialog(props: Omit<DialogProps, 'children'>){
    return <Dialog {...props}>
        <h2>Here goes Add Region Form</h2>
    </Dialog>
}