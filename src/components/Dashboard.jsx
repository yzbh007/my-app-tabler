import React from 'react';
import invoicesData from '../data/invoices.json';

function Dashboard() {
    return (
        <div className="page">
            {/* Navbar */}
            <aside className="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
                {/* ... Navbar content ... */}
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu" aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a href="." className="navbar-brand navbar-brand-autodark">
                        Tabler
                    </a>
                    <div className="collapse navbar-collapse" id="sidebar-menu">
                        <ul className="navbar-nav pt-lg-3">
                            <li className="nav-item">
                                <a className="nav-link" href="./" >
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-1">
                                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-title">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="layout-fluid-vertical.html#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="false" role="button" aria-expanded="false">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-1">
                                            <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                            <path d="M12 12l8 -4.5" />
                                            <path d="M12 12l0 9" />
                                            <path d="M12 12l-8 -4.5" />
                                            <path d="M16 5.25l-8 4.5" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-title"> Interface </span>
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-menu-columns">
                                        <div className="dropdown-menu-column">
                                            <a className="dropdown-item" href="accordion.html">
                                                Accordion
                                                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a className="dropdown-item" href="alerts.html"> Alerts </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            {/* Page Content */}
            <div className="page-wrapper">
                {/* Page header */}
                <div class="page-header d-print-none">
                    <div class="container-xl">
                        <div class="row g-2 align-items-center">
                            <div class="col">
                              <div class="page-pretitle">
                              Overview
                              </div>
                              <h2 class="page-title">Fluid vertical layout</h2>
                            </div>
                            <div class="col-auto ms-auto d-print-none">
                              <div class="btn-list">
                              <span class="d-none d-sm-inline">
                              <a href="layout-fluid-vertical.html#" class="btn btn-1"> New view </a> 
                              </span>
                              <a href="layout-fluid-vertical.html#" class="btn btn-primary btn-5 d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
                              <path d="M12 5l0 14" />
                              <path d="M5 12l14 0" />
                              </svg>
                               Create new report 
                              </a>
                              <a href="layout-fluid-vertical.html#" class="btn btn-primary btn-6 d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-2">
                              <path d="M12 5l0 14" />
                              <path d="M5 12l14 0" />
                              </svg>
                              </a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Page body */}
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-deck row-cards">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Invoices</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <div className="text-secondary">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <input type="text" className="form-control form-control-sm" value="8" size="3" aria-label="Invoices count" />
                                                </div>
                                                entries
                                            </div>
                                            <div className="ms-auto text-secondary">
                                                Search:
                                                <div className="ms-2 d-inline-block">
                                                    <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-selectable card-table table-vcenter text-nowrap datatable">
                                            <thead>
                                                <tr>
                                                    <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                                    <th className="w-1">No.</th>
                                                    <th>Invoice Subject</th>
                                                    <th>Client</th>
                                                    <th>VAT No.</th>
                                                    <th>Created</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoicesData.map((invoice, index) => (
                                                    <tr key={index}>
                                                        <td><input className="form-check-input m-0 align-middle table-selectable-check" type="checkbox" aria-label="Select invoice" /></td>
                                                        <td><span className="text-secondary">{invoice.no}</span></td>
                                                        <td><a href="/invoice" className="text-reset" tabIndex="-1">{invoice.subject}</a></td>
                                                        <td><span className="flag flag-xs flag-country-us me-2"></span>{invoice.client}</td>
                                                        <td>{invoice.vat}</td>
                                                        <td>{invoice.created}</td>
                                                        <td>
                                                            {invoice.status === 'Paid' ? <span className="badge bg-success me-1"></span> : <span className="badge bg-warning me-1"></span>}
                                                            {invoice.status}
                                                        </td>
                                                        <td>{invoice.price}</td>
                                                        <td className="text-end">
                                                            <span className="dropdown">
                                                                <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item" href="#">Action</a>
                                                                    <a className="dropdown-item" href="#">Another action</a>
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer d-flex align-items-center">
                                        <p className="m-0 text-secondary">
                                            Showing <span>1</span> to <span>8</span> of <span>16</span> entries
                                        </p>
                                        <ul className="pagination m-0 ms-auto">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                                                <path d="M15 6l-6 6l6 6" />
                                                </svg>
                                                    prev
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    next
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-1">
                                                    <path d="M9 6l6 6l-6 6" />
                                                    </svg>                                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="footer footer-transparent d-print-none">
                    {/* ... Footer content ... */}
                    <div className="container-xl">
                        <div className="row text-center align-items-center flex-row-reverse">
                            <div className="col-lg-auto ms-lg-auto">
                                <ul className="list-inline list-inline-dots mb-0">
                                    <li className="list-inline-item">
                                        Copyright © 2025 Tabler.
                                        All rights reserved.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Dashboard;
