package com.xfers.xfers_sdk.view

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.xfers.xfers_sdk.R

class ConnectOTPActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_connect_otp)

        title = "Link Xfers Account"
    }

    // TODO: To be replaced with Android "Back" and "Up"
    fun onClickBack(view: View) {
        finish()
    }

    fun onClickNext(view: View) {
        // TODO: Ping merchant's connect OTP API URL

        // TODO: Set dynamically based on user status, for now hardcode to be able to develop
        val isUserExistingVerified = true
        val isUserExistingUnverified = false
        val isUserNewUser = false

        when {
            isUserExistingVerified -> startActivity(Intent(this, ConnectShareKYCActivity::class.java))
            isUserExistingUnverified -> startActivity(Intent(this, ConnectIdentityVerificationActivity::class.java))
            isUserNewUser -> startActivity(Intent(this, ConnectIdentityVerificationActivity::class.java))
        }
    }
}
