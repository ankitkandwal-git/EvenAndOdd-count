import { Component } from "react";

import './index.css'

class EvenAndOdd extends Component{
    state = {
        count :0
    }
    generateCount = () => Math.ceil(Math.random()*100)
    onRandomEvenAndOdd = () =>{
        const anyNumber = this.generateCount()
        this.setState(prevState=>({
            count:prevState.count + anyNumber
        }))
    }
    render(){
        const {count} = this.state
        const typeOfNumber = count%2 ? 'Even' : 'Odd'
        return(
            <div className="app-container">
                <h1 className="heading">Count {count}</h1>
                <p className="paragraph">Count is {typeOfNumber}</p>
                    <button className="button" type="button" onClick={this.onRandomEvenAndOdd}>Increment</button>
                <p className="random-paragraph">Increase By Random Number Between 0 to 100</p>
            </div>
        )
    }
}

export default EvenAndOdd