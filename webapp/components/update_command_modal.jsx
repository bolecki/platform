// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import * as AsyncClient from 'utils/async_client.jsx';
import Client from 'client/web_client.jsx';
import {Modal} from 'react-bootstrap';
import TeamStore from 'stores/team_store.jsx';
import Constants from 'utils/constants.jsx';

import {FormattedMessage} from 'react-intl';

import {browserHistory} from 'react-router/es6';

import React from 'react';

export default class UpdateCommandModal extends React.Component {
    constructor(props) {
        super(props);

        this.doHide = this.doHide.bind(this);
        this.doUpdate = this.doUpdate.bind(this);
    }

    doHide() {
        this.props.onModalDismissed();
    }

    doUpdate() {
        this.props.onUpdate();
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.doHide}
            >
                <Modal.Header closeButton={true}>
                    <h4 className='modal-title'>
                        <FormattedMessage
                            id='update_command.confirm'
                            defaultMessage='Edit Slash Command'
                        />
                    </h4>
                </Modal.Header>
                <Modal.Body>
                    <FormattedMessage
                        id='update_command.question'
                        defaultMessage='Your changes may break the existing slash command. Are you sure you would like to update it?'
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type='button'
                        className='btn btn-default'
                        onClick={this.doHide}
                    >
                        <FormattedMessage
                            id='update_command.cancel'
                            defaultMessage='Cancel'
                        />
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-dismiss='modal'
                        onClick={this.doUpdate}
                    >
                        <FormattedMessage
                            id='update_command.update'
                            defaultMessage='Update'
                        />
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

UpdateCommandModal.defaultProps = {
    show: false
};

UpdateCommandModal.propTypes = {
    show: React.PropTypes.bool.isRequired,
    onModalDismissed: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
};
