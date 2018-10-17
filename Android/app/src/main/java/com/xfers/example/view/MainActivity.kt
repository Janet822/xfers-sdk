package com.xfers.example.view

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import com.xfers.example.R
import com.xfers.xfers_sdk.Xfers
import java.math.BigInteger

// TODO: Example Activity (to be turned into example app)
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        Xfers(this).config.setSGSandbox()

        // TODO: Build on top of sample code, deactivated for now
        // UpdateTextWithUserDetails(this.text, this).execute()
    }

    fun onSignupClick(view: View) {
        Xfers(this).flow.startSignupFlow()
    }

    fun onTopupClick(view: View) {
        Xfers(this).flow.startTopupFlow()
    }

    fun onTransactionsOverviewClick(view: View) {
        Xfers(this).ui.startTransactionsOverviewActivity()
    }

    fun onKYCClick(view: View) {
        Xfers(this).flow.startKYCFlow()
    }

    fun onManageBanksClick(view: View) {
        Xfers(this).flow.startManageBanksFlow()
    }

    fun onWithdrawalClick(view: View) {
        Xfers(this).flow.startWithdrawalFlow()
    }

    fun onPayClick(view: View) {
        // Pass in example 100
        Xfers(this).flow.startPaymentFlow(BigInteger("100"))
    }

    fun onMenuClick(view: View) {
        Xfers(this).ui.startMenuActivity()
    }

    fun onSettingsClick(view: View) {
        Xfers(this).ui.startSettingsActivity()
    }
}