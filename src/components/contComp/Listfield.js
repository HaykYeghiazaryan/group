import React from 'react';

class Listfield extends React.Component{
	render(){
		const {name} = this.props.data;
		const {index,editUserId,title,popupName,indexName,showPopupFunc,classer,indexGroup,deleteFunc,typePopup,classTitle} = this.props;
		console.log(typePopup);
		return(
			<div className="field">
			 	<span className={typePopup=="group" ? classTitle : ""} onClick={()=>editUserId(index,title)} >{name}</span>
			 	<button className="but" onClick={()=>showPopupFunc(popupName,index,indexName,typePopup)} >Edit</button> 
			 	<button className="but" onClick={()=>deleteFunc(index,indexName,classer,indexGroup)} >Delete</button>
			</div>
		);
	}
}

export default Listfield;