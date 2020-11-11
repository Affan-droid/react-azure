import React, {Component} from 'react'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: ''
        };
    
      }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.Addtodo(this.state);
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label class="card-panel teal lighten-2" >Add new Todo: </label>
                    <input type ="text" onChange={this.handleChange} />
                </form>           
            </div>
        )
    }
}
export default AddForm;
