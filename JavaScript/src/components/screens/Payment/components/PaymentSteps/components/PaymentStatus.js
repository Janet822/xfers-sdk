import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Button,
  FooterButtonGroup,
  StatusPanel
} from 'XfersComponents'
import { navigate } from 'Payment/actions'
import { toCurrency } from 'UtilityFunctions'

function mapStateToProps({payment}, props) {
  const { amount, availableBalance, walletName, closeModal } = payment;
  return { amount, availableBalance, walletName, closeModal }
}

class PaymentStatus extends Component {
  render() {
    const {
      amount,
      availableBalance,
      walletName,
      closeModal
    } = this.props;

    return (
      <StatusPanel
        type="secondary"
        iconType="success"
        title="Make Payment">
        <View spBody>
          <View><Text>Your payment has been completed.</Text></View>
          <br/><br/><br/>
          <View>
            <Text fontSize="12px" fontWeight="300" textTransform="uppercase">{walletName + " Balance"}</Text>
            <br/><br/>
            <Text fontWeight="bold">Payment Amount: {toCurrency(amount)}</Text>
            <br/><br/>
            <Text fontWeight="bold">New Balance: {toCurrency(availableBalance)}</Text>
          </View>
        </View>
        <FooterButtonGroup spFooter>
          <Button type="primary" onClick={closeModal}>Return to Merchant</Button>
        </FooterButtonGroup>
      </StatusPanel>
    )
  }
}

export default connect(mapStateToProps, () => ({}))(PaymentStatus)
