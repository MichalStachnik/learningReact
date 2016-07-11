var Greeter = React.createClass({
    
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'default message'
        };    
    },
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        
        return(
            <div>
                <h1>hey from react component { name }</h1>
                <p>this is from the paragraph tag { message }</p>
            </div>
        );
    }
    
});

var name = 'michal';

ReactDOM.render(
    <Greeter name={ name } message="React is neat"/>,
    document.getElementById('app')
);