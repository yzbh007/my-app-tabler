import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="page page-center">
      <div className="container container-tight py-4">
        <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">Logo</a>
        </div>
        <div className="card card-md">
          <div className="card-body">
            <h2 className="h2 text-center mb-4">Forgot password</h2>
            <p className="text-muted mb-4">Enter your email address and your password will be reset and emailed to you.</p>
            <form  autoComplete="off">
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-footer">
                <button  className="btn btn-primary w-100">
                  {/* <IconMail />  如果需要图标，取消注释并安装 @tabler/icons-react */}
                  Send me new password
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center text-muted mt-3">
          Forget it, <Link to="/">send me back</Link> to the sign in screen.
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
