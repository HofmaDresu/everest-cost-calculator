import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckboxPicker from './Components/CheckboxPicker';
import NavButtons from './Components/NavButtons';


const internationalLabelText = "Do you want to include international flight costs?";
const domesticNepalLabelText = "Do you want to include domestic flights in Nepal?";
const visaFeesLableText = "Do you want to include visa fees?";

export default class FlightsComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            includeInternational: props.includeInternational,
            includeDomesticInNepal: props.includeDomesticInNepal,
            includeVisaFees: props.includeVisaFees,
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
                <CheckboxPicker isSelected={this.state.includeInternational} labelText={internationalLabelText} onChangeAction={this.handleInternationalChange} />
                <CheckboxPicker isSelected={this.state.includeDomesticInNepal} labelText={domesticNepalLabelText} onChangeAction={this.handleDomesticChange} />
                <CheckboxPicker isSelected={this.state.includeVisaFees} labelText={visaFeesLableText} onChangeAction={this.handleVisaChange} />
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