/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";


export const alert = (title:string,text:string,icon:any)=>{
    Swal.fire({
        title,
        text,
        icon,
    });
}