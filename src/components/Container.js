import React from 'react';

import List from './contComp/List.js'

class Container extends React.Component{
	render(){
		const {groups,indexGroup,editUserId,showPopupFunc,deleteFunc}=this.props;
		let users=[];
		if(groups[indexGroup]!=undefined){
			users=groups[indexGroup].users
		}
		return(
			<div className="container">
				<List title="Groups" classer="group" groups={groups} indexGroup={indexGroup} editUserId={editUserId} popupName="editGroupPopup" indexName="indexGroup" showPopupFunc={showPopupFunc} deleteFunc={deleteFunc} typePopup="group" />
				<List title="Users" classer="user" groups={users} indexGroup={indexGroup} editUserId={editUserId} popupName="editUserPopup" indexName="index" showPopupFunc={showPopupFunc} deleteFunc={deleteFunc} typePopup="user" />
			</div>
		);
	}
}

export default Container;