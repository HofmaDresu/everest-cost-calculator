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
    handleItemChange = (gearId, event) => { 
        const selectedCount = parseInt(event.target.value, 10);
        this.setState(prevState => {
            const newState = prevState
            newState.gearItems.filter(g => g.id === gearId)[0].currentCount = selectedCount;
            return newState;
        })
    }
    render() {
        const requiredPickers = this.state.gearItems.filter(i => i.level === "Required").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(21).keys()]} labelText={`${g.name} -- $${g.price}`} onChangeAction={e => this.handleItemChange(g.id, e)} />
        );
        const recommendedPickers = this.state.gearItems.filter(i => i.level === "Recommended").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(21).keys()]} labelText={`${g.name} -- $${g.price}`} onChangeAction={e => this.handleItemChange(g.id, e)} />
        );
        const optionalPickers = this.state.gearItems.filter(i => i.level === "Optional").map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(21).keys()]} labelText={`${g.name} -- $${g.price}`} onChangeAction={e => this.handleItemChange(g.id, e)} />
        );
        return (
            <div id="gear" className="component">
                <h1>Gear Costs</h1>
                <h3>How many of each of the following items do you need?</h3>
                <div id="gear-list">
                    <div className="items-wrapper">
                        <h4>Required</h4>
                        {requiredPickers}
                    </div>
                    <div className="items-wrapper">
                        <h4>Recommended</h4>
                        {recommendedPickers}
                    </div>
                    <div className="items-wrapper">
                        <h4>Optional</h4>
                        {optionalPickers} 
                    </div>
                </div>
                <NavButtons onBackAction={this.props.backAction} onForwardAction={() => this.props.saveAction(this.state.gearItems)} />
            </div>
        );
    }
}

PeopleComponent.propTypes = {
    gearItems: PropTypes.array.isRequired,
    saveAction: PropTypes.func.isRequired,
    backAction: PropTypes.func.isRequired,
};