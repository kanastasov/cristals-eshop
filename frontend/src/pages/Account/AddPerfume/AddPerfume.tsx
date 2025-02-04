import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, notification, Row, Upload } from "antd";
import { PlusSquareFilled, PlusSquareOutlined, UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload/interface";

import {
    selectAdminStateErrors,
    selectIsAdminStateLoading,
    selectIsPerfumeAdded
} from "../../../redux-toolkit/admin/admin-selector";
import { resetAdminState, setAdminLoadingState } from "../../../redux-toolkit/admin/admin-slice";
import { LoadingStatus } from "../../../types/types";
import { addPerfume } from "../../../redux-toolkit/admin/admin-thunks";
import ContentTitle from "../../../components/ContentTitle/ContentTitle";
import AddFormInput from "./AddFormInput";
import AddFormSelect from "./AddFormSelect";
import IconButton from "../../../components/IconButton/IconButton";

type AddPerfumeData = {
    perfumeTitle: string;
    perfumer: string;
    year: string;
    country: string;
    type: string;
    volume: string;
    perfumeGender: string;
    fragranceTopNotes: string;
    fragranceMiddleNotes: string;
    fragranceBaseNotes: string;
    price: string;
    filename: string;
};

const AddPerfume: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isPerfumeAdded = useSelector(selectIsPerfumeAdded);
    const ispPerfumeLoading = useSelector(selectIsAdminStateLoading);
    const perfumeErrors = useSelector(selectAdminStateErrors);
    const [file, setFile] = React.useState<string>("");

    const [perfumeGender, setPerfumeGender] = React.useState<string>("male");
    const [type, setType] = React.useState<string>("Eau de Parfum");


    useEffect(() => {
        dispatch(setAdminLoadingState(LoadingStatus.LOADED));

        return () => {
            dispatch(resetAdminState(LoadingStatus.LOADING));
        };
    }, []);

    useEffect(() => {
        if (isPerfumeAdded) {
            window.scrollTo(0, 0);
            notification.success({
                message: "Perfume added",
                description: "Perfume successfully added!"
            });
            dispatch(resetAdminState(LoadingStatus.SUCCESS));
        }
    }, [isPerfumeAdded]);

    const onFormSubmit = (data: AddPerfumeData): void => {
        data.perfumeGender = ('male');
        data.type = ('Eau de Parfum');
        data.fragranceTopNotes = ('fragranceTopNotes');
        data.fragranceBaseNotes = ('fragranceBaseNotes');
        // data.filename = file[0].name;
                    
        const bodyFormData: FormData = new FormData();
        // @ts-ignore
        bodyFormData.append("file", { file });
        bodyFormData.append(
            "perfume",
            // new Blob([JSON.stringify({ ...data, perfumeRating: 0 })], { type: "application/json" })
                        new Blob([JSON.stringify({ ...data, perfumeRating: 0 })], { type: "application/json" })

        );
        console.log(file)
        console.log(data)

        dispatch(addPerfume(bodyFormData));
    };

    const handleUpload = ({ file }: UploadChangeParam<any>): void => {
        setFile(file);
    };

    return (
        <>
            <ContentTitle title={"Добави Продукт"} titleLevel={4} icon={<PlusSquareOutlined />} />
            <Form onFinish={onFormSubmit}>
                <Row gutter={32}>
                    <Col span={12}>
                        <AddFormInput
                            title={"Име на продукта"}
                            name={"perfumeTitle"}
                            error={perfumeErrors.perfumeTitleError}
                            placeholder={"Име на продукта"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Година"}
                            name={"year"}
                            error={perfumeErrors.yearError}
                            placeholder={"Година"}
                            disabled={ispPerfumeLoading}
                        />
                   
                        <AddFormInput
                            title={"Описание"}
                            name={"fragranceMiddleNotes"}
                            error={perfumeErrors.fragranceMiddleNotesError}
                            placeholder={"Описание"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Цена"}
                            name={"price"}
                            error={perfumeErrors.priceError}
                            placeholder={"Цена"}
                            disabled={ispPerfumeLoading}
                        />
                    </Col>
                    <Col span={12}>
                        <AddFormInput
                            title={"Тип Продукт"}
                            name={"perfumer"}
                            error={perfumeErrors.perfumerError}
                            placeholder={"Тип Продукт(Кристали, Минерали..)"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Страна пройзход"}
                            name={"country"}
                            error={perfumeErrors.countryError}
                            placeholder={"Страна пройзход"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Количество"}
                            name={"volume"}
                            error={perfumeErrors.volumeError}
                            placeholder={"Количество"}
                            disabled={ispPerfumeLoading}
                        />
                   
                        <Upload name={"file"} onChange={handleUpload} beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />} style={{ marginTop: 22 }}>
                                Качи снимка
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <IconButton title={"Добави продукта"} icon={<PlusSquareFilled />} />
            </Form>
        </>
    );
};

export default AddPerfume;