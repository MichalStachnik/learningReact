
var GreeterMessage = React.createClass({
    //every React component needs to have a render method
    render: function(){
        return(
            <div>
                <h1>h1 coming from GreeterMessage component</h1>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    render: function(){
        return(
            <form>
                <input type="text" ref="name"/>
                <button>print name</button>
            </form>
        );
    }
});

//Greeter component
var Greeter = React.createClass({
    //a component shouldn't update it's own props but it is allowed to update its own state
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'default message'
        };    
    },
    
    getInitialState: function(){
        return{
            name: this.props.name
        };
    },
    
    onPrintName: function(event){
        //prevents form from actually submit and refreshing the page
        event.preventDefault();
        
        var nameRef = this.refs.name;
        var name = nameRef.value;
        //clears the input box
        nameRef.value = '';
        
        //checks to see if input box is populated with a string with length > 0
        if(typeof name ==='string' && name.length > 0){
            this.setState({
                name: name  
            });
        }
    },
    
    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        
        return(
            <div>
                <h1>hey from react component { name }</h1>
                <p>this is from the paragraph tag { message }</p>
            
            <GreeterMessage/>
            <GreeterForm/>
            
            </div>
        );
    }
    
});

var name = 'michal';

ReactDOM.render(
    <Greeter name={ name } message="React is neat"/>,
    document.getElementById('app')
);