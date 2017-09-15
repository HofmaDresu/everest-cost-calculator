import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from './Components/NumberPicker';
import NavButtons from './Components/NavButtons';
import './gear.css';




export default class PeopleComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            gearItems: props.gearItems.map(a => Object.assign({}, a)),
        };
    }
    handleItemChange = (gearIndex, event) => { 
        const selectedCount = parseInt(event.target.value, 10);
        this.setState(prevState => {
            const newState = prevState
            newState.gearItems[gearIndex].currentCount = selectedCount;
            return newState;
        })
    }
    render() {
        const requiredPickers = this.state.gearItems.filter(i => i.level === "Required").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(20).keys()]} labelText={g.name} onChangeAction={e => this.handleItemChange(i, e)} />
        );
        const recommendedPickers = this.state.gearItems.filter(i => i.level === "Recommended").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(20).keys()]} labelText={g.name} onChangeAction={e => this.handleItemChange(i, e)} />
        );
        const optionalPickers = this.state.gearItems.filter(i => i.level === "Optional").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(20).keys()]} labelText={g.name} onChangeAction={e => this.handleItemChange(i, e)} />
        );
        return (
            <div id="gear" className="component">
                <h1>Gear Costs</h1>
                <h3>How many of each of the following items do you need?</h3>
                <div id="gear-list">
                    <h4>Required</h4>
                    {requiredPickers}
                    <h4>Recommended</h4>
                    {recommendedPickers}
                    <h4>Optional</h4>
                    {optionalPickers} 
                </div>
                <NavButtons isLast={true} onBackAction={this.props.backAction} onForwardAction={() => this.props.saveAction(this.state)} />
            </div>
        );
    }
}

PeopleComponent.propTypes = {
    gearItems: PropTypes.array.isRequired,
    saveAction: PropTypes.func.isRequired,
    backAction: PropTypes.func.isRequired,
};