import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { addCar } from "../redux/apiCalls";
import { useState } from 'react';

const CarForm = ({user}) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [model, setModel] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [validationError, setValidationError] = useState("");
    const userId = user.id;

    const fileChange = (e) => {
        setPicture(e.files[0]);
    };

    const handelAdd = (e) => {
        e.preventDefault();
        if(!name || !price || !model || !description || !picture){
            setValidationError(t('cars_modal_validation_error'));
        }else{
            setValidationError("");
            const formData = new FormData();
            formData.append("userId",userId);
            formData.append("name",name);
            formData.append("price",price);
            formData.append("model",model);
            formData.append("description",description);
            formData.append("picture",picture,picture.name);
            addCar(dispatch, formData);
        }
    }

    return (
        <div className="modal fade" id="car-modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary">
                        <button className="btn-close" id="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body tab-content py-4 "></div>
                    <form>
                        <div className="row gx-4 gy-3 px-4">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="account-fn">{t('account_add_car_name_label')}</label>
                                <input className="form-control"  onChange={(e) => setName(e.target.value)} type="text" id="account-fn" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="car-picture">{t('account_add_car_picture_label')}</label>
                                <input className="form-control"  onChange={(e) => fileChange(e.target) } type="file" id="car-picture"  required />
                            </div>
                                <div className="col-sm-12">
                                    <div className="mb-3">
                                    <label className="form-label" htmlFor="car-model">{t('account_add_car_model_label')}</label>
                                    <select onChange={(e) => setModel(e.target.value)} className="form-select" id="car-model">
                                        <option value={model}>{model}</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Tesla">Tesla</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-12 px-4">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="car-price">{t('account_add_car_price_label')} </label>
                                        <input className="form-control"  onChange={(e) => setPrice(e.target.value)} type="text" id="car-price" />
                                    </div>
                                </div>
                                <div className="col-sm-12 px-4">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="car-description">{t('account_add_car_description_label')} </label>
                                        <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="car-description"></textarea>
                                    </div>
                                </div>
                            <div className="col-sm-12 p-4">
                                {
                                    validationError ?
                                    <div className='alert alert-danger mt-2' role="alert">{ validationError  }</div>  
                                    :
                                    error && <div className='alert alert-danger mt-2' role="alert">{ t('general_error')  }</div>
                                }
                                <button onClick={handelAdd} disabled={isFetching} className='btn btn-primary'><i className="ci-edit me-2"></i>{t('account_add_car_submit_btn')}</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default CarForm;