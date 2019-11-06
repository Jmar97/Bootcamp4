import React from 'react'

class AddBuilding extends React.Component { //prevents system from reloading upon submission
    addItem(e){
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => (this.addItem(e))}>
            <div>
                Add Building
                <input type="text"
                       placeholder="Building Name"
                />
                <input type="text"
                       placeholder="Building Code"
                />
                <input type="text"
                       placeholder="Building Address"
                />
            </div>
                <button type="submit" classname="btn btn-primary">Add</button>
            </form>
        )
    }
}

export default AddBuilding