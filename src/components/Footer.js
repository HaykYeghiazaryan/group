import React from 'react';

class Footer extends React.Component{
	render(){
		const {addNewGroup,newGroupTitle,handleChangeGroupTitle, userDisabled, disabledFunction, showPopupFunc, indexGroup, index}=this.props;
		return(
			<div className="footer">
				<input type="text" className="input inputFooter" placeholder="Enter Group" value={newGroupTitle}
                        onChange={handleChangeGroupTitle} />
				<button value="Add Group" className="but" onClick={(e) => addNewGroup(newGroupTitle)}
                        disabled={!newGroupTitle}>Add Group</button>
				<button value="Add User" className="but" disabled={!disabledFunction()} onClick={()=>showPopupFunc("showPopup",indexGroup,"indexGroup","user")} >Add User</button>
			</div>
		);
	}
}

export default Footer;