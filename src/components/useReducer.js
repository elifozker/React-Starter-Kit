import {useState, useReducer} from "react"


function reducer(state,action){ //statein kendisi bir de action gelir
    //console.log(state,action);
    switch(action.type){
        case 'SET_TODO':
            return{
                ...state,
                todo: action.value
            }
        case 'ADD_TODO':
            return{
                ...state,
                todo:'',
                todos:[
                    ...state.todos,
                    action.todo

                ]
            }
    }
}

export default function TestuseReducer(){

    const[state,dispatch] = useReducer(reducer,{
        todos:[],
        todo:''
    }); 


    const submitHandle = e=> {
        e.preventDefault();//varsayılan davranış durdurulur ki form normal olarak bir yere istek atmasın.

        dispatch({
            type:'ADD_TODO',
            todo: state.todo
        })
    }

    const onChange = e => {
        dispatch({ //dispatchin içerisi reducer fonksiyonunu çalıştırır.
            type:'SET_TODO',
            value:e.target.value
        })
    }

    return(
        <>
        <h1>Todo App</h1>
        <form onSubmit={submitHandle}>
            <input type="text" value={state.todo} onChange={onChange}/>
            <button disabled={!state.todo} type="submit">Ekle</button>
        </form>
        <ul>
            {state.todos.map((todo,index) =>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
        
        
        
        </>
    )

}