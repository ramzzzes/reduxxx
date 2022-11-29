import {useDispatch, useSelector} from "react-redux";

const Welcome = () => {
    const name = useSelector(state => state.counter)
    const setName = useDispatch()

    return (

        <>
            <button onClick={() => setName({
                type : "INCREMENT",
                payload : 5.99
            })}>+</button>
            <button onClick={() => setName({
                type : "DECREMENT",
                payload : 5
            })}>-</button>



            <br/>
            <br/>
            <br/>
            {name}

        </>
    )

}

export default Welcome
