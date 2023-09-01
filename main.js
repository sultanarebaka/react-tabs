



Tabs = React.createClass({
    getInitialState(){

    }
})

<div>
      <ul className="inline">


</div>

<li className={style} key={index}</li>


this.props.children[this.state.selected];


<li>{elem.props.title}</li>




<li>
onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>




<Panel title="first">This is the first panel</Panel>
        <Panel title="second">This is the second panel</Panel>
        <Panel title="third">This is the third panel</Panel>
      

React.render(<App/>,document.querySelector('#app'));
(index).selected:
tabs.setindex();



const render = React.createClass({
  getState(){


selected.this.props;
}

<li> className={style} key={index} onClick={this.handleChange.bind(this,index)}</li>


let style = index == this.state.selected ? 'selected': '';



selected:this.props.selected || 0;



render(){
    return (<div>
      <ul className="inline">

<li>

onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>


const Panel = React.createClass({
  render(){
    return <div>{this.props.children}</div>
  })

React.render(<App/>,document.querySelector('#app'));

const Panel = React.createClass({
  render(){
    return <div>{this.props.children}</div>
  }
})

onClick={this.handleChange.bind(this,index)}>{elem.props.title};

const App = React.createClass({
  render(){
    return (
      <Tabs selected={1}>
        <Panel title="first">This is the first panel</Panel>
        <Panel title="second">This is the second panel</Panel>
        <Panel title="third">This is the third panel</Panel>
      </Tabs>
    )
  }
})
React.render(<App/>,document.querySelector('#app'));



this.props.children.map((elem,index)=>{
          let style = index == this.state.selected ? 'selected': '';
         return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
        })}
      </ul>