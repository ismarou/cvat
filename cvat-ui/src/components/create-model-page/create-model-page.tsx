// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';

import { ModelFiles } from 'reducers/interfaces';
import CreateModelContent from './create-model-content';
import { customWaViewHit } from 'utils/enviroment';

interface Props {
    createModel(name: string, files: ModelFiles, global: boolean): void;
    isAdmin: boolean;
    modelCreatingStatus: string;
}

export default function CreateModelPageComponent(props: Props): JSX.Element {
    const {
        isAdmin,
        modelCreatingStatus,
        createModel,
    } = props;

    const location = useLocation();

    useEffect(() => {
        customWaViewHit(location.pathname);
    });

    return (
        <Row type='flex' justify='center' align='top' className='cvat-create-model-form-wrapper'>
            <Col md={20} lg={16} xl={14} xxl={9}>
                <Text className='cvat-title'>Upload a new model</Text>
                <CreateModelContent
                    isAdmin={isAdmin}
                    modelCreatingStatus={modelCreatingStatus}
                    createModel={createModel}
                />
            </Col>
        </Row>
    );
}
