import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StickyPanel,
  View,
  Text,
  ModalHeader,
  Button,
  FooterButtonGroup
} from 'XfersComponents'
import { toCurrency } from 'UtilityFunctions'
import { confirmPayment } from 'Payment/actions'

function mapStateToProps({payment}, props) {
  const { amount, orderId, closeModal } = payment;
  return { amount, orderId, closeModal }
}

function mapDispatchToProps(dispatch) {
  return {
    confirm: (successCallback) => dispatch(confirmPayment(successCallback))
  }
}

class TopUpConfirmation extends Component {
  render() {
    const {
      orderId,
      amount,
      confirm,
      goNext,
      goBack,
      closeModal
    } = this.props;

    const confirmWithCallback = () => {
      confirm(goNext);
    }

    return (
      <StickyPanel showBrand>
        <ModalHeader onClose={closeModal} spHeader title="Make Payment" />
        <View spBody>
          <Text type="panelTitle">Transaction Overview</Text>
          <Text type="panelSubtitle">Your are about to make a payment via your Xfers Wallet to the following details. Please confirm.</Text>
          <View marginBottom="20px">
            <Text type="label">Payment To</Text>
            <Text type="boldValue">Merchant</Text>
          </View>
          <View marginBottom="20px">
            <Text type="label">Order ID</Text>
            <Text type="boldValue">{orderId}</Text>
          </View>
          <View marginBottom="20px">
            <Text type="label">Description</Text>
            <Text type="boldValue">This is a place for description</Text>
          </View>
        </View>
        <View spFooter>

          <View
            textAlign="center"
            padding="20px 0"
            margin="20px 0 30px"
            borderTop="1px solid #ccc"
            borderBottom="1px solid #ccc" >
            <View><Text type="label">Total Payment Amount</Text></View>
            <View><Text fontSize="24px" fontWeight="bold">{toCurrency(amount)}</Text></View>
          </View>

          <FooterButtonGroup>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="primary" onClick={confirmWithCallback}>Confirm</Button>
          </FooterButtonGroup>
        </View>

      </StickyPanel>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopUpConfirmation)
