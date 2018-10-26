import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  FooterButtonGroup,
  StatusPanel
} from 'XfersComponents'

export default class AddBankAccountStatus extends Component {
  render() {
    const {
      userBanks,
      navigate,
      goBackPreviousModule
    } = this.props;

    const newBankDetails = userBanks.last;

    return (
      <StatusPanel
        type="secondary"
        iconType="success"
        title="Add Bank Account">
        <View spBody>
          <Text>Your bank account has been added.</Text>
        </View>
        <FooterButtonGroup spFooter>
          { goBackPreviousModule ?
            <Button type="primary" onClick={goBackPreviousModule}>Return to Top-up</Button>
            :
            <Button type="primary" onClick={() => navigate('index')}>Okay</Button>
          }
        </FooterButtonGroup>
      </StatusPanel>
    )
  }
}
