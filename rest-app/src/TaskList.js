// import {Component,useState} from 'react';


// // class TaskList extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             count:0,
// //             color:"red"
// //         }
// //     }

// //     setCountTo20 = () => {
// //         this.setState({count:20});

// //     }
    
// //     render () {
// //         return (
// //             <div>
// //                 {this.props.color}
// //                 {this.state.count}
// //                 {this.props.color}{this.props.number}
// //                 <button onClick={this.setCountTo20}>Set count to 20</button>
// //             </div>
// //         )
// //     }
// // }


// // destructuring is a small syntax difference but we geta  lot of benefits, we know if we spell things wrong when we pass ({proeprty,property}) instead of just (props)
// //use it to return multiple things, return by wrapping in [] to make it 1 array
// //props come into function as opposed to constructor, destructure for readability

// //for destructuring make sure u use curly brackets
// //destructuring arrays:order matters const [x,y] = coordinate is the same
// //as const x = coordinate[0], const y = coordinate[1]
// //hooks access functionality
// //piece of crud data, anything that gets updated should be in state in one place

// function TaskList ({color,number}) {
//     const [count,setCount] = useState(0);
//     //const [color, setColor] = useState("red")


//     const setCountTo20 = () => {
//         setCount(20)
//     }

//     return (
//         <div>
//           {count}
//           <button onClick={setCountTo20}>Set to 20</button>
//         </div>
//     )
// }

//  export default TaskList;

// //imagining use state, not actual

// // const useState = (initialValue) => {
// //     let pieceOfState = initialValue;
    
// //     const setPieceOfState = () => {
// //         pieceOfState = newValue;
// //     }    
// //     return [pieceOfState, setPieceofState ]
// // }

// // props = {
// //     color:"red"
// //     number:3
// //     order: 
// //     main: "spaghetti",
// //     side:"potatoes"
// //   }
// // }

// // function getSnacks () {
// //     return["drink","chips"]
// // }

// // const [drink, crunchyThing] = getSnacks();

// // console.log(drink + crunchyThing);

// //hooking react to a background has 3 key concepts
// //fetch:ajax requests to backend api
// //async and await:control when we wait for function to finish and when we dont
// //useEffect:run code to fetch data from server when component first loads 
// //rest and fetch, method of fetch is how we tell it when to create=post, read=get, update=put, delete=delete

// //switch out with your data
// // create/POST
// // fetch("api endpoint of unicorns", {
// //     method: "POST",
// //     headers: { "Content-Type" : "application/json"},
// //     body: JSON.stringify(unicorntoCreate)
// // })
// // read/GET
// // fetch(http something unicorns)
// // or 
// // fetch(http something unicorns/unicornsdata)
// // update/PUT
// // fetch("http something endpoint unicorn/unicorn data", {
// //     method:"PUT",
// //     headers: {"Content-Type": "application/json"},
// //     body: JSON.stringify(updatedUnicornData)
// // })
// // delete/delete
// // fetch("http something unicorns/unicornsdata", {method: "DELETE"})