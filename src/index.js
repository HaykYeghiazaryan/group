import React from 'react';

import Add from './components/Add.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';

class Group extends React.Component{
	constructor(props){
		super(props);
		this.state={
			indexGroup:0,
			index:0,
			newGroupTitle:'',
			showPopup:false,
			editGroupPopup:false,
			editUserPopup:false,
			typePopup:"user",
			groups:[],
		}
	}
	disabledFunction = () => {
		const {groups}=this.state;
		if(groups.length==0){
			return "";
		}else{
			return true;
		}
	}
	addNewGroup = (name) => {
		const { groups } = this.state;
		    if (name) {
		        groups.push({ name, users: [] });
		        this.setState({ groups, newGroupTitle: '' });
		    }
		}
	editUserId = (indexGroup,title) => { 
		if(title=="Groups"){
			this.setState({ indexGroup }); 
		}
	}
	handleChangeGroupTitle = e => { this.setState({newGroupTitle:e.target.value}); }
	showPopupFunc = (typePopup,index,indexName,groupOrUser) => { 
		this.setState({[typePopup]:true,[indexName]:index,typePopup:groupOrUser}) 
	}
	addUser = (type,index,popType,typeAddEdit,indexUser,name,surname,email,desc) => {
		const {groups} = this.state;
		if(type=="add"){
			if(typeAddEdit=="Add"){
				let arr = groups[index].users;
				let obj = {name,surname,email,desc};
				arr.push(obj);
			}else if(typeAddEdit=="Update Group"){
				let objGroup=groups[index];
				objGroup.name=name;
				groups.splice(index,1,objGroup)
			}else if(typeAddEdit=="Update User"){
				let objUser = groups[index].users[indexUser];
				objUser.name=name;
				objUser.surname=surname;
				objUser.email=email;
				objUser.desc=desc;
				groups.splice(index,1,groups[index]);
			}
			this.setState({ groups,[popType]:false });
		}
		if(type=="close"){
			this.setState({ [popType]:false })
		}
	}
	deleteFunc = (i,indexName,type,iGroup) => {
		let {groups,indexGroup,index}=this.state;
		if(type == "group"){
			if(indexGroup>i){
				indexGroup--;
			}
			groups.splice(i,1);
		}else if(type == "user"){
			if(index>i){
				index--;
			}
			let arr=groups[iGroup].users;
			arr.splice(i,1)
		}
		this.setState({ groups,indexGroup,index });
	}
	render(){
		const {groups,indexGroup,newGroupTitle,addNewGroup,userDisabled,name,surname,email,desc,showPopup,editGroupPopup,index,editUserPopup,typePopup}=this.state;
		let groupName = "";
		let userName = "";
		let userSurname = "";
		let userEmail = "";
		let userDesc = "";
		if(groups[indexGroup]!=undefined){
			groupName=groups[indexGroup].name;
			if(groups[indexGroup].users[index]!=undefined){
				userName = groups[indexGroup].users[index].name;
				userSurname = groups[indexGroup].users[index].surname;
				userEmail = groups[indexGroup].users[index].email;
				userDesc = groups[indexGroup].users[index].desc;
			}
		}
		return(
			<div className="contDiv">
				{showPopup && <Add name="" surname="" email="" desc="" changeValue={this.changeValue} showPopup={showPopup} addUser={this.addUser} indexGroup={indexGroup} popupName="showPopup" addEditType="Add" index={index} typePopup={typePopup} />}
				{editGroupPopup && <Add name={groupName} changeValue={this.changeValue} showPopup={showPopup} addUser={this.addUser} indexGroup={indexGroup} popupName="editGroupPopup" addEditType="Update Group" index={index} typePopup={typePopup} />}
				{editUserPopup && <Add name={userName} surname={userSurname} email={userEmail} desc={userDesc} changeValue={this.changeValue} showPopup={showPopup} addUser={this.addUser} indexGroup={indexGroup} popupName="editUserPopup" addEditType="Update User" index={index} typePopup={typePopup} />}
				<div className="content">
					<Container groups={groups} indexGroup={indexGroup} editUserId={this.editUserId} showPopupFunc={this.showPopupFunc} deleteFunc={this.deleteFunc} />
					<Footer newGroupTitle={newGroupTitle} addNewGroup={this.addNewGroup} handleChangeGroupTitle={this.handleChangeGroupTitle} userDisabled={userDisabled} disabledFunction={this.disabledFunction} showPopupFunc={this.showPopupFunc} indexGroup={indexGroup} index={index} />
				</div>
			</div>
		);
	}
}
export default Group;