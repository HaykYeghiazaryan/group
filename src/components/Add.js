import React from 'react';

class Add extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:"",
			surname:"",
			email:"",
			desc:""
		}
	}
	componentWillMount(){
		const {name,surname,email,desc}=this.props;
		this.setState({name,surname,email,desc});
	}
	changeValue = (valName,val) => { this.setState({[valName]:val}); }
	addUserDisabled = () => {
		const {name,surname,email,desc}=this.state;
		if(name=="" || surname=="" || email=="" || desc==""){
			return "";
		}else{
			return true;
		}
	}
	clearVal = () => {
		this.setState({
			name:"",
			surname:"",
			email:"",
			desc:""
		})
	}
	render(){
		const {showPopup,addUser,indexGroup,popupName,addEditType,index,typePopup}=this.props;
		const {name,surname,email,desc}=this.state;
		return(
			<div className="addDivContent">
				<div className="addDiv">
					<input type="text" className="input" placeholder="Name" value={name} onChange={(e)=>this.changeValue("name",e.target.value)} />
					{(typePopup=="user") ? <div><input type="text" className="input" placeholder="Surname" value={surname} onChange={(e)=>this.changeValue("surname",e.target.value)} />
					<input type="text" className="input" placeholder="Email" value={email} onChange={(e)=>this.changeValue("email",e.target.value)} />
					<textarea type="text" className="input" placeholder="Write Information..." value={desc} onChange={(e)=>this.changeValue("desc",e.target.value)} ></textarea></div> : "" }
					<button name="add" className="but" disabled={!this.addUserDisabled()} onClick={(e)=>addUser(e.target.name,indexGroup,popupName,addEditType,index,name,surname,email,desc)} >{addEditType}</button>
					<button name="clear" className="but" onClick={(e)=>this.clearVal()}>Clear</button>
					<button name="close" className="but" onClick={(e)=>addUser(e.target.name,indexGroup,popupName,addEditType,index,name,surname,email,desc)}>Close</button>
				</div>
			</div>
		);
	}
}

export default Add;