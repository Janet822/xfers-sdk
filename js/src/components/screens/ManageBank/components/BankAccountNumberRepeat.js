import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Panel, Title, ModalHeader, FormInput, Button, FooterButtonGroup } from 'XfersComponents'
import { updateBankAccountDetails } from 'ManageBank/actions'

function mapStateToProps({manageBank}, props) {
  const { newBankAccountDetails: { accountNo } } = manageBank;
  return { accountNo };
}

function mapDispatchToProps(dispatch) {
  return {}
}

class BankAccountNumberRepeat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      repeatedAccountNo: ''
    }
  }

  updateAccountNo = (e) => {
    this.setState({ repeatedAccountNo: e.target.value })
  }

  checkAccountNo() {
    const { accountNo } = this.props;
    const { repeatedAccountNo } = this.state;
    if ( accountNo === repeatedAccountNo ) {
      this.setState({error: ''});
      // Next Step to decide to upload bank statement for verification or not
    } else {
      this.setState(error: 'Bank account no did not match');
    }
  }

  render() {
    const { accountNo } = this.props;
    const { repeatedAccountNo } = this.state;

    const disabled = repeatedAccountNo ? false : true

    return (
      <Panel>
        <ModalHeader title="ADD BANK ACCOUNT" />
        <View layout="section" paddingBtm>
          <Title type="form">Enter your bank account number</Title>
          <FormInput
            type="number"
            placeholder="e.g. 1234567890"
            value={repeatedAccountNo}
            onChange={this.updateAccountNo}
            caption="Please exclude dashes"
          />
        </View>
        <FooterButtonGroup>
          <Button type="primary" disabled={disabled} onClick={checkAccountNo}>Next</Button>
        </FooterButtonGroup>
      </Panel>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountNumberRepeat)
