
const Tabs = React.createClass({
  getInitialState(){
    return {
      selected:this.props.selected || 0
    }
  },
  render(){
    return (<div>
      <ul className="inline">
        {this.props.children.map((elem,index)=>{
          let style = index == this.state.selected ? 'selected': '';
         return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
        })}
      </ul>
    

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
React.render(<App/>,document.querySelector('#app'))

