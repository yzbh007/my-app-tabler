import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChangePassword() {
    const [loading, setLoading] = useState(false);

    const handleChangePassword = () => {
        //  处理修改密码逻辑
        // setLoading(true);
        // setLoading(false);
    };

    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Change Password</h2>
                        <form autoComplete="off">
                            <div className="mb-3">
                                <label className="form-label">Current Password</label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Current password"  autoComplete="off"/>
                                    <span className="input-group-text">
                                        <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-eye">
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="New password"  autoComplete="off"/>
                                    <span className="input-group-text">
                                        <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-eye">
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm New Password</label>
                                <div className="input-group input-group-flat">
                                    <input type="password" className="form-control" placeholder="Confirm new password"  autoComplete="off"/>
                                    <span className="input-group-text">
                                        <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-eye">
                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn btn-primary w-100" onClick={handleChangePassword} disabled={loading}>Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
