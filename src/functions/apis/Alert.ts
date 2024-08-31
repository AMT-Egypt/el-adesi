/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";


export const alert = (title:string,text:string,icon:any,finall?:(() => void) | null | undefined)=>{
    Swal.fire({
        title,
        text,
        icon,
    }).finally(finall);
}