import React from 'react';
import RemoveBuilding from "./RemoveBuilding";

class BuildingList extends React.Component {
	selectedUpdate(id) {
		this.props.selectedUpdate(id);
	}

	deleteBuilding(id) {
		this.props.deleteBuilding(id);
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		const { filterText } = this.props;

		const buildingList = data	//filter method similar to baby names tutorial
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})

			.filter(e => {	//list updates upon a removal
			return !this.props.list.some(filter => {
				return filter === e.id
			});
		})

			.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td>
						<button onClick = { () => this.selectedUpdate(directory.id)}>
						{directory.name}
						</button>
					</td>
					<td>
						<button onClick = { () => this.deleteBuilding(directory.id)}>
						<RemoveBuilding/>
						</button>
					</td>
				</tr>
			);
		});

		return (<div>{buildingList}</div>);
	}
}
export default BuildingList;
