import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addPerson, deletePerson, updatePerson} from '../actions/index';
import Aux from '../hoc/Aux';
import Person from '../components/Person';

class Persons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personName: '',
            showPerson: true,
        }
    }

    inpuTextChangeHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        let newState = {...this.state};
        newState[`${name}`] = value;
        this.setState(newState);
    };

    addPerson = () => {
        let dataArr = this.state.personName.split("-");
        if (dataArr.length === 2) {
            let person = {name: dataArr[0], age: +dataArr[1]};
            this.props.addPerson(person);
        }
        else {
            alert("invalid data");
        }
    };

    render() {

        let person = null;
        const {personReducer} = this.props;
        const data = personReducer.data;
        let dataArr = this.state.personName.split("-");
        let currentPerson = null;
        if (dataArr.length === 2) {
            let p = {name: dataArr[0], age: +dataArr[1]};
            currentPerson = <Person name={p.name} age={p.age}/>
        }
        if (this.state.showPerson) {
            person = (
                <Aux>
                    {
                        data.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.props.deletePerson(index)}
                                change={(event) => this.props.updatePerson(event, person.id)}
                            />
                        })
                    }
                </Aux>
            );
        }

        let addButton = (
            <Aux>
                <button onClick={this.addPerson}>Add Person</button>
            </Aux>
        );

        return (
            <Aux>
                {currentPerson}
                <p>{addButton}</p>
                <input type="text" onChange={(event) => this.inpuTextChangeHandler(event)}
                       value={this.state.personName} name={'personName'}/>
                <p>{personReducer.message}</p>
                <div>{person}</div>
            </Aux>
        );
    }
}

function mapStateToProps({personReducer}) {
    return {personReducer};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addPerson, deletePerson, updatePerson}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);