import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import UserInfoEdit from '../../components/user-info-edit/user-info-edit';
import { useAppSelector } from '../../hooks';
import { getUser } from '../../store/user-process/selectors';
import PersonalAccountCoach from './items/personal-account-coach/personal-account-coach';
import PersonalAccountUser from './items/personal-account-user/personal-account-user';
import { UserRole } from '../../types/user-data';
import { useState } from 'react';

function PersonalAccount(): JSX.Element {
  const user = useAppSelector(getUser);
  const [certificates, setCertificates] = useState(user.certificate);
  const addCertificate = (certificate: string) => {
    const newCertificates = certificates.slice();
    newCertificates.push(certificate);
    setCertificates(newCertificates);
  }
  return (
    <div className="wrapper">
      <Helmet>
        <title>FitFriends. Мой аккаунт</title>
      </Helmet>
      <Header />
      <main>
        <section className="inner-page">
          <div className="container">
            <div className="inner-page__wrapper">
              <h1 className="visually-hidden">Личный кабинет</h1>
              <UserInfoEdit
                id={user.id}
                avatar={user.avatar}
                name={user.name}
                description={user.description}
                location={user.location}
                typeOfTrain={user.typeOfTrain}
                trainingReady={user.trainingReady}
                level={user.level}
                gender={user.gender}
                role={user.role}
              />
              <div className="inner-page__content">
                { user.role === UserRole.Coach ? 
                  <PersonalAccountCoach/> :
                  <PersonalAccountUser/>
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default PersonalAccount;
