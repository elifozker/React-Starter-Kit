import classNames from "classnames"
function Button({children, text,variant='default'}){

    return(
        <button className={classNames({
            "p-4 h-10 flex items-center bg-gray-100 rounded": true,
            "bg-gray-100" :variant === 'default',
            "bg-green-600" : variant === 'success',
            "bg-red-600" : variant === 'danger',
            "bg-yellow-300" : variant === 'warning',
        
        })}>
            {text} {variant}
            
            </button>
    )
}
export default Button