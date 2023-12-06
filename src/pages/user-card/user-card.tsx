import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selectors';
import { useEffect, useRef, useState } from 'react';
import PopupUserMap from '../../components/popup-user-map/popup-user-map';
import { CITY, POINTS } from '../../constant';
import { locationToMap } from '../../utils';
import UserCardCoach from './items/user-card-coach/user-card-coach';
import PopupCertificate from './items/popup-certificate/popup-certificate';
import { UserRole } from '../../types/user-data';
import UserCardUser from './items/user-card-user/user-card-user';

function UserCard(): JSX.Element {
  const user = useAppSelector(getUser);
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const popupMapRef = useRef<HTMLDivElement>(null);
  const onSendLocation = (location: number) => {
    console.log(location);
  };
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMapOpen(false);
        setIsCertificateOpen(false);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
   
    };
    window.addEventListener('keydown', handleEscapePress);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      window.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('click', handleClickOutside, true);
    }
  });
  return (
    <div className="wrapper">v
      <Helmet>
        <title>FitFriends. Карточка пользователя</title>
      </Helmet>
      <Header />
      <main>
        <div className="inner-page inner-page--no-sidebar">
          <div className="container">
            <div className="inner-page__wrapper">
              <button
                className="btn-flat inner-page__back"
                type="button"
                onClick={goBack}
              >
                <svg width="14" height="10" aria-hidden="true">
                  <use xlinkHref="#arrow-left"></use>
                </svg>
                <span>Назад</span>
              </button>
              <div className="inner-page__content">
                {user.role === UserRole.Coach ?
                <UserCardCoach
                  onMapClick={() => setIsMapOpen(!isMapOpen)}
                  onCertificateClick={() => setIsCertificateOpen(true)}
                  id={user.id}
                  name={user.name}
                  trainingReady={user.trainingReady}
                  description={user.description}
                  typeOfTrain={user.typeOfTrain}
                /> : 
                <UserCardUser
                  onMapUserClick={() => setIsMapOpen(!isMapOpen)}
                  id={user.id}
                  name={user.name}
                  trainingReady={user.trainingReady}
                  description={user.description}
                  typeOfTrain={user.typeOfTrain}
                />
                }
              </div>
            </div>
          </div>
        </div>
        {isMapOpen && 
          <div className="popup-form popup-form--map" ref={popupMapRef}>
            <PopupUserMap
              name={user.name}
              location={user.location}
              onClose={() => setIsMapOpen(false)}
              onSendLocation={onSendLocation}
              city={CITY}
              points={POINTS}
              selectedPoint={locationToMap(user.location)}
            />
          </div>
        }
        {isCertificateOpen && 
          <div className="popup-form" ref={popupMapRef}>
            <PopupCertificate
              certificate={user.certificate}
              onClose={() => setIsCertificateOpen(false)}
            />
          </div>
        }
      </main>
    </div>
  );
}
export default UserCard;
