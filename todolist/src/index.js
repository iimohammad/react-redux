// import React from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// let counter = 0;

// function show (){
//     counter ++;
//     const el = <p>{counter}</p>;
//     ReactDOM.render(
//         el, document.getElementById("root")
//     );
// }
// setInterval(show,1000)

// function Hello(){
//     return <h1> Hello every body </h1>

// }
// const el = <Hello/>
// ReactDOM.render(
//     el, document.getElementById('root')
// )


// class Hello extends React.Component{
//     render(){
//         return <h1> hello world</h1>
//     }
// }

// const el = <Hello/>
// ReactDOM.render(
//     el, document.getElementById('root')
// )


// class Hello extends React.Component{
//     state  = {
//         name : "mohammad"
//     }
//     render (){
//         return <h1>hello {this.state.name}</h1>
//     }
// }
// const el = <Hello/>
// ReactDOM.render(
//     el, document.getElementById('root')
// )
// class Counter extends React.Component
// {
//     state = {
//         counter :0
//     }
//     increment = () => {
//         this.setState ({
//             counter: this.state.counter+1});
        
//     }
//     render(){
//         return <div><p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//         </div>;
//     }
// }
// const el = <Counter/>
// ReactDOM.render(
//     el, document.getElementById('root')
// )

// function Counter (){
//     const [counter, setCounter] = useState(0);

//     useEffect(() => {
//        alert("Number of clicks:"+counter);
//         })
    
//     function increment(){
//         setCounter(counter+1);
//     }
    
//     return <div>
//         <p>{counter}</p>
//         <button onClick={increment}>Increment
//         </button>
//     </div>
//     }
// const el = <Counter/>
// ReactDOM.render(
//     el,document.getElementById('root')
// )


function Converter (){
    const [km , setKm] = useState(0);

    function handleChange(e){
        setKm(e.target.value);
    }
    
    function convert(km){
        return (km/1.609).toFixed(2);
    }

    return <div>
        <input type="text" value={km}
        onChange={handleChange} />
        <p>{km} km is {convert(km)} miles </p>
    </div>;
}
const el = <Converter/>
ReactDOM.render()(
    el , document.getElementById('root')
)