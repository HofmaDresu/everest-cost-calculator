import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckboxPicker from './Components/CheckboxPicker';
import NavButtons from './Components/NavButtons';

export default class FlightsComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            includeInternational: props.includeInternational,
            includeDomesticInNepal: props.includeDomesticInNepal,
            includeVisaFees: props.includeVisaFees,
            internationalCost: props.internationalCost,
            domesticCost: props.domesticCost,
            visaCost: props.visaCost,
        };
    }
    handleInternationalChange = (event) => {
        this.setState({includeInternational: event.target.checked});
    }
    handleDomesticChange = (event) => {
        this.setState({includeDomesticInNepal: event.target.checked});
    }
    handleVisaChange = (event) => {
        this.setState({includeVisaFees: event.target.checked});
    }
    render() {
        return (
            <div className="component">
                <h1>Travel Costs</h1>
                <CheckboxPicker isSelected={this.state.includeInternational} labelText={`Do you want to include international flight costs ($${this.props.internationalCost} per person)?`} onChangeAction={this.handleInternationalChange} />
                <CheckboxPicker isSelected={this.state.includeDomesticInNepal} labelText={`Do you want to include domestic flights in Nepal ($${this.props.domesticCost} per person)?`} onChangeAction={this.handleDomesticChange} />
                <CheckboxPicker isSelected={this.state.includeVisaFees} labelText={`Do you want to include visa fees ($${this.props.visaCost} per person)?`} onChangeAction={this.handleVisaChange} />
                <NavButtons onBackAction={() => this.props.backAction(this.state)} onForwardAction={() => this.props.saveAction(this.state)} />
            </div>
        );
    }
}

FlightsComponent.propTypes = {
    includeInternational: PropTypes.bool.isRequired,
    includeDomesticInNepal: PropTypes.bool.isRequired,
    includeVisaFees: PropTypes.bool.isRequired,
    saveAction: PropTypes.func.isRequired,
    backAction: PropTypes.func.isRequired,
};