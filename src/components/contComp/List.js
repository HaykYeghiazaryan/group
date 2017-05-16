import React from 'react';

import Listfield from './Listfield.js';

class List extends React.Component{
	render(){
		const {title,classer,groups,indexGroup,editUserId,popupName,indexName,showPopupFunc,deleteFunc,typePopup}=this.props;
		return(
			<div className={classer}>
				<div className="usGroupField">
					{title}
				</div>
				{groups.map((item,index)=>{return <Listfield key={index} data={item} index={index} indexGroup={indexGroup} editUserId={editUserId} title={title} popupName={popupName} indexName={indexName} showPopupFunc={showPopupFunc} classer={classer} deleteFunc={deleteFunc} typePopup={typePopup} classTitle={indexGroup==index? "titNameHov" : "titName"} /> })}
			</div>
		);
	}
}

export default List;