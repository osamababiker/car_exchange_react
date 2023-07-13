import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadUrl } from '../requestMethod';
import { Link as RouterLink } from 'react-router-dom';
import { addBids } from "../redux/apiCalls";
import Moment from 'react-moment';

 
const Cars = ({cars}) => {

  const { t } = useTranslation();
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching, error } = useSelector((state) => state.user);


  const dispatch = useDispatch();
  const [bid, setBid] = useState("");

  const handleBid = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("userId",user.id);
    formData.append("carId",e.target.dataset.id);
    formData.append("bid",bid);
    await addBids(dispatch, formData);
  }

  return (
    <section className="container pb-4 pb-md-5 mt-4">
    <div className="row">
      { cars.map(car => (
        <div key={car.id} className="col-lg-4 col-md-6">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <RouterLink className='d-block text-decoration-0 px-2' to={`/cars/${car.id}`}>
              <div className="position-relative mb-2">
                <img className="w-100" src={uploadUrl + "/cars/" + car.picture} alt={car.name} />
              </div>
              <div className="d-flex justify-content-around">
                <h6 className="fs-sm pt-1"> { car.name } </h6>
                <h6 className="fs-sm pt-1 badge bg-warning"> {t('cars_opening_price_label')} : { car.openingPrice } {t('aed')} </h6>
              </div>
              <div className="">
                <p className="pt-4">{car.description}</p>
                <div className="d-flex justify-content-around">
                  <span className="badge bg-dark">{ car.user.name }</span>
                  <span className="badge bg-dark"> 
                  <Moment format="YYYY/MM/DD">{ car.created_at }</Moment> </span>
                </div>
              </div>
            </RouterLink>
            <div className="mt-4">
              {
                car.bids_max_price ? 
                <h6 className="fs-sm p-2 badge bg-success w-100"> {t('cars_height_price')} : { car.bids_max_price } {t('aed')} </h6>
                : <h6 className="fs-sm p-2 w-100"> </h6>
              }
              <a href={`#bid-modal-${car.id}`}  data-bs-toggle="modal" className="btn btn-outline-primary w-100">{t('cars_place_bid_btn')}</a>
            </div>
          </div>

          {/* bid modal  */}
          <div className="modal fade" id={`bid-modal-${car.id}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header bg-secondary">
                  <button className="btn-close" id="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body tab-content py-4">
                  <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
                    <div className="mb-3">
                      <label className="form-label">{t('cars_place_bid_price')}</label>
                      <input onChange={(e) => setBid(e.target.value)} className="form-control" type="text" required />
                      <div className="invalid-feedback"></div>
                    </div>
                    <button onClick={handleBid} data-id={car.id} disabled={isFetching} className={`btn btn-primary btn-shadow d-block w-100 ${isFetching ? ' btn-disabled ' : ''}`} type="submit">{t('cars_place_bid_btn')}</button>
                    {error && <div className='alert alert-danger mt-2' role="alert">{ t('general_error')  }</div>  }
                  </form>
                </div>
              </div>
            </div>
          </div>


        </div>
        
      ))}
    </div>

    

  </section>
  )
}

export default Cars;