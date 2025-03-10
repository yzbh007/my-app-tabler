import React, { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
// import '@tabler/core/dist/css/tabler.min.css'; // 已移动到 src/main.jsx
import TablerButton from './ui/TablerButton';
// 动态导入图标 (使用 PascalCase 文件名)
const IconBrandGithub = lazy(() => import('@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs'));
const IconBrandX = lazy(() => import('@tabler/icons-react/dist/esm/icons/IconBrandX.mjs'));

function Login() {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        //setLoading(true);
        //setLoading(false);
    };
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark">Logo</a>
                </div>
                <div className="card card-md">
                    <div className="card-body">
                        <h2 className="h2 text-center mb-4">Login to your account</h2>
                        <form autoComplete="off">
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="your@email.com" autoComplete="off" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                    Password
                                    <span className="form-label-description">
                                        <Link to="/forgot-password">I forgot password</Link>
                                    </span>
                                </label>
                                <input type="password" className="form-control" placeholder="Your password" autoComplete="off" />
                            </div>
                            <div className="mb-2">
                                <label className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            <div className="form-footer">
                                {/* <button type="submit" className="btn btn-primary w-100">Sign in</button> */}
                                <TablerButton color="primary" block onClick={handleLogin} loading={loading} text="Sign in" />
                            </div>
                        </form>
                        {/* 添加分隔线和第三方登录按钮 */}
                        <div className="hr-text">or</div>
                        <div className="row">
                           <div className="col">
                                <Suspense fallback={<span className="me-2">github</span>}>
                                    <TablerButton
                                        block
                                        icon={IconBrandGithub}
                                        iconColor="github"
                                        text="Login with Github"
                                    />
                                </Suspense>
                            </div>
                            <div className="col">
                                 <Suspense fallback={<span className="me-2">x</span>}>
                                    <TablerButton
                                        block
                                        icon={IconBrandX}
                                        iconColor="x"
                                        text="Login with X"
                                    />
                                </Suspense>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center text-muted mt-3">
                    Don't have an account yet? <Link to="/sign-up">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
