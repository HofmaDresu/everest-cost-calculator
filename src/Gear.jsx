import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from './Components/NumberPicker';
import NavButtons from './Components/NavButtons';




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
        const pickers = this.state.gearItems.map((g, i) => 
            <NumberPicker key={i} selectedNumber={g.currentCount} numberRange={[...Array(g.maxCount).keys()]} labelText={`How many ${g.name} do you need?`} onChangeAction={e => this.handleItemChange(i, e)} />
        );
        return (
            <div className="component">
                <h1>Gear Costs</h1>
                {pickers}
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