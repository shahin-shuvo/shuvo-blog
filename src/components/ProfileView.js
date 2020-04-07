import React from 'react'

import { Avatar } from 'antd';

function ProfileView(props) {

    return (
        <div>
            <div class="container main-secction">
                <div class="row">

                    <div class="row user-left-part" style={{}}>
                        <div class="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
                            <div class="row ">
                                <div class="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                                    <Avatar size={160}
                                        style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                        <p style={{ fontSize: "4rem" }}>
                                            {((props.user.username || "").substring(0, 2) || "").toUpperCase()}
                                        </p>
                                    </Avatar>

                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                                    <button id="btn-contact" data-toggle="modal" data-target="#" class="btn btn-success btn-block follow">Update Profile</button>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section" >
                            <div class="row profile-right-section-row" style={{ marginLeft: "10px" }}>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <ul class="nav nav-tabs" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#profile" role="tab" data-toggle="tab"><i class="fas fa-user-circle"></i> Personal Informatión</a>
                                                </li>
                                              
                                            </ul>


                                            <div class="tab-content">
                                                <div role="tabpanel" class="tab-pane fade show active" id="profile">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Username</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>{props.user.username}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Email</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>{props.user.email}</p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Token ID</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>{props.user.token}</p>
                                                        </div>
                                                    </div>
                                                    <div class = "row">
                                                    <div class="col-md-6">
                                                            <label>Total Post</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p>{props.totalPost}</p>
                                                        </div>
                                                        </div>
                                                </div>
                                               

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="contact">Contactarme</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <p for="msj">Se enviará este mensaje a la persona que desea contactar, indicando que te quieres comunicar con el. Para esto debes de ingresar tu información personal.</p>
                            </div>
                            <div class="form-group">
                                <label for="txtFullname">Nombre completo</label>
                                <input type="text" id="txtFullname" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="txtEmail">Email</label>
                                <input type="text" id="txtEmail" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="txtPhone">Teléfono</label>
                                <input type="text" id="txtPhone" class="form-control" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;
