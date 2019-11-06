import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const{data} = this.props;
		const{selectedBuilding} = this.props;
		const clickedBuilding = data
			.filter( building => {
				return selectedBuilding === building.id;
			})
			.map(building => {
				if (building.hasOwnProperty('coordinates'))	//building has own coordinates
					return (
						<div>
							<ul> Name: {building.name} </ul>
							<ul> Code: {building.code} </ul>
							<ul> ID: {building.id} </ul>
							<ul> Latitude: {building.coordinates.latitude} </ul>
							<ul> Longitude: {building.coordinates.longitude} </ul>
							<ul> Address: {building.address} </ul>
						</div>
					);
				else	//otherwise coordinates are unknown
					return (
						<div>
							<ul> Name: {building.name} </ul>
							<ul> Code: {building.code} </ul>
							<ul> ID: {building.id} </ul>
							<ul> Latitude: NA </ul>
							<ul> Longitude: NA </ul>
							<ul> Address: NA </ul>
						</div>
					);

			});

		return (
			<div>
				<p>

					<i>Click on a name to view more information</i>
					<p> </p>
					{clickedBuilding}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
