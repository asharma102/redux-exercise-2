import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';


class Persons extends Component {

    render() {

        return (
            <div>
                <AddPerson personAdded={() => this.props.personAddedHandler()} />
                {this.props.prsn.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)} />
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        prsn: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (newPerson) => dispatch({
            type: actionTypes.ADD_PERSON,
            payload: {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
        }),
        personDeletedHandler: (deleteID) => dispatch({ type: actionTypes.DELETE_PERSON, id: deleteID })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);