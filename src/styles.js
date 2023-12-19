import Bootstrap from "./bootstrap"

function Styles() {
    return (
        <div className="App">
            <h3>{process.env.NODE_ENV}</h3>
            <p className="env">
                {process.env.REACT_APP_API_URL}
                <span>test</span>
            </p>
            {process.env.NODE_ENV === 'production' && (
                <>
                    <img src="/logo192.png"></img>
                </>
            )}
            <Bootstrap />
        </div>
    )

}
export default Styles;