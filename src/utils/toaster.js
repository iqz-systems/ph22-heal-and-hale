import { toast } from "react-toastify";

const toastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    className: 'grey-background'
}

export function toastSuccess(message) {
    toast.success(message, toastOptions);
}

export function toastError(message) {
    toast.error(message, toastOptions);
}

