/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";


export const alert = (title:string,text:string,icon:any,reload?:boolean)=>{
    Swal.fire({
        title,
        text,
        icon,
    })
    .then((result) => {
        if (reload && result.isConfirmed) {
            window.location.reload()
        }
    })
}