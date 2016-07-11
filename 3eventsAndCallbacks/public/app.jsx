var Greeter = React.createClass({
    
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'default message'
        };    
    },
    
    onPrintName: function(event){
        //prevents form from actually submit and refreshing the page
        event.preventDefault();
        var name = this.refs.name.value;
        alert(name);
    },
    
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        
        return(
            <div>
                <h1>hey from react component { name }</h1>
                <p>this is from the paragraph tag { message }</p>
            
            <form onSubmit={this.onPrintName}>
                <input type="text" ref="name"/>
                <button>print name</button>
            </form>
            </div>
        );
    }
    
});

var name = 'michal';

ReactDOM.render(
    <Greeter name={ name } message="React is neat"/>,
    document.getElementById('app')
);