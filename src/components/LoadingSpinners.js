import '../styles/spinners.css'

export const EllipsisSpinner = ({isNotWhite}) => {
    return (
        <div className="spinner-container">
            <div  className={isNotWhite ? "lds-ellipsis not-white" :"lds-ellipsis"}>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export const FacebookSpinner = ({isNotWhite}) => {
    return (
        <div className="spinner-container">
            <div class={isNotWhite ? "lds-facebook not-white":"lds-facebook"}>
                <div></div><div></div><div></div>
            </div>
        </div>
    )
}

export const RippleSpinners = ({isNotWhite}) => {
    return (
        <div className="spinner-container">
            <div class={isNotWhite ? "lds-ripple not-white":"lds-ripple"}>
                <div></div><div></div>
            </div>
        </div>
    )
}
