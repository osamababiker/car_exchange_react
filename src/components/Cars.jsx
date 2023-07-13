import React from 'react';
import { useTranslation } from 'react-i18next';
import { uploadUrl } from '../requestMethod';
import { Link as RouterLink } from 'react-router-dom';
import cookies from 'js-cookie';
import Moment from 'react-moment';

 
const Cars = ({cars}) => {

  const { t } = useTranslation();
  const currentLangCode = cookies.get('i18next') || 'ar';

  return (
    <section className="container pb-4 pb-md-5 mt-4">
    <div className="row">

      { cars.map(car => (
        <div key={car.id} className="col-lg-4 col-6">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <RouterLink className='d-block text-decoration-0 px-2' to={`/cars/${car.id}`}>
              <div className="position-relative mb-2">
                <img className="w-100" src={uploadUrl + "/cars/" + car.picture} alt={car.name} />
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="fs-sm pt-1"> { car.name } </h6>
                <h6 className="fs-sm pt-1 badge bg-success"> { car.openingPrice } {t('aed')} </h6>
              </div>
              <div className="">
                <p className="pt-4">{car.description}</p>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-dark"> 
                  <Moment format="YYYY/MM/DD">{ car.created_at }</Moment> </span>
                  <span className="badge bg-dark">{ car.user.name }</span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      ))}


    </div>
  </section>
  )
}

export default Cars;