export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: "",
            items: []
        };
    }

render() {
    return (
        <div></div>
    );
    }
}
onchange = (event) => {
    this.setState({term: event.target.value});
}
<input value={this.state.term} onChange={this.onChange}/>
onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

   <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>
   import React from "react";

   const List = props => (
       <ul>
           {
               props.items.map((item,index)=> <li key={index}>{item}</li>)
           }
       </ul>
   );
        export default List;
        <List items={this.state.items}/>