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
};

const AddPerfume: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isPerfumeAdded = useSelector(selectIsPerfumeAdded);
    const ispPerfumeLoading = useSelector(selectIsAdminStateLoading);
    const perfumeErrors = useSelector(selectAdminStateErrors);
    const [file, setFile] = React.useState<string>("");

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
        const bodyFormData: FormData = new FormData();
        // @ts-ignore
        bodyFormData.append("file", { file });
        bodyFormData.append(
            "perfume",
            new Blob([JSON.stringify({ ...data, perfumeRating: 0 })], { type: "application/json" })
        );

        dispatch(addPerfume(bodyFormData));
    };

    const handleUpload = ({ file }: UploadChangeParam<any>): void => {
        setFile(file);
    };

    return (
        <>
            <ContentTitle title={"Добави продукт"} titleLevel={4} icon={<PlusSquareOutlined />} />
            <Form onFinish={onFormSubmit}>
                <Row gutter={32}>
                    <Col span={12}>
                        <AddFormInput
                            title={"Продукт"}
                            name={"perfumeTitle"}
                            error={perfumeErrors.perfumeTitleError}
                            placeholder={"Добави продукт"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Година"}
                            name={"year"}
                            error={perfumeErrors.yearError}
                            placeholder={"Добави Година"}
                            disabled={ispPerfumeLoading}
                        />
                    
                        <AddFormSelect
                            title={"Gender"}
                            name={"perfumeGender"}
                            error={perfumeErrors.perfumeGenderError}
                            placeholder={"male"}
                            disabled={ispPerfumeLoading}
                            values={["male", "female"]}
                        />
                        <AddFormInput
                            title={"Допълнителна информация"}
                            name={"fragranceMiddleNotes"}
                            error={perfumeErrors.fragranceMiddleNotesError}
                            placeholder={"Добави Допълнителна информация"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Цена"}
                            name={"price"}
                            error={perfumeErrors.priceError}
                            placeholder={"Добави цена"}
                            disabled={ispPerfumeLoading}
                        />
                    </Col>
                    <Col span={12}>
                        <AddFormInput
                            title={"Категория"}
                            name={"perfumer"}
                            error={perfumeErrors.perfumerError}
                            placeholder={"Добави категория(Кристал, Минерал..)"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Страна"}
                            name={"country"}
                            error={perfumeErrors.countryError}
                            placeholder={"Страна"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Количество"}
                            name={"volume"}
                            error={perfumeErrors.volumeError}
                            placeholder={"Количество"}
                            disabled={ispPerfumeLoading}
                        />
                        {/* <AddFormInput
                            title={"забележки"}
                            name={"fragranceTopNotes"}
                            error={perfumeErrors.fragranceTopNotesError}
                            placeholder={"забележки"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Base notes"}
                            name={"fragranceBaseNotes"}
                            error={perfumeErrors.fragranceBaseNotesError}
                            placeholder={"base notes"}
                            disabled={ispPerfumeLoading}
                        /> */}
                        <Upload name={"file"} onChange={handleUpload} beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />} style={{ marginTop: 22 }}>
                                Качи снимка
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <IconButton title={"Запази"} icon={<PlusSquareFilled />} />
            </Form>
        </>
    );
};

export default AddPerfume;
