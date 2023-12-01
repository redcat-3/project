import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constant';
import Intro from '../../pages/intro/intro';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import CreateTraning from '../../pages/create-training/create-training';
import FriendsList from '../../pages/friends-list/friends-list';
import MyOrders from '../../pages/my-orders/my-orders';
import MyPurchases from '../../pages/my-purchases/my-purchases';
import MyTranings from '../../pages/my-trainings/my-trainings';
import QuestionnaireCoach from '../../pages/questionnaire-coach/questionnaire-coach';
import QuestionnaireUser from '../../pages/questionnaire-user/questionnaire-user';
import SignUp from '../../pages/sign-up/sign-up';
import TrainingCardCoach from '../../pages/training-card-coach/training-card-coach';
import TrainingCardUser from '../../pages/training-card-user/training-card-user';
import TrainingCatalog from '../../pages/training-catalog/training-catalog';
import TrainingDiary from '../../pages/training-diary/training-diary';
import UserCardCoach from '../../pages/user-card-coach/user-card-coach';
import UserCardUser from '../../pages/user-card-user/user-card-user';
import UserCatalog from '../../pages/users-catalog/users-catalog';
import PersonalAccount from '../../pages/personal-account/personal-account';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <ScrollToTop>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
            key={AppRoute.Main}
          />
          <Route
            path={AppRoute.Intro}
            element={<Intro/>}
            key={AppRoute.Intro}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
            key={AppRoute.SignIn}
          />
          <Route
            path={AppRoute.CreateTraining}
            element={<CreateTraning/>}
            key={AppRoute.CreateTraining}
          />
          <Route
            path={AppRoute.FriendsList}
            element={<FriendsList/>}
            key={AppRoute.FriendsList}
          />
          <Route
            path={AppRoute.MyOrders}
            element={<MyOrders/>}
            key={AppRoute.MyOrders}
          />
          <Route
            path={AppRoute.MyPurchases}
            element={<MyPurchases/>}
            key={AppRoute.MyPurchases}
          />
          <Route
            path={AppRoute.MyTrainings}
            element={<MyTranings/>}
            key={AppRoute.MyTrainings}
          />
          <Route
            path={AppRoute.PersonalAccount}
            element={<PersonalAccount/>}
            key={AppRoute.PersonalAccount}
          />
          <Route
            path={AppRoute.QuestionnaireCoach}
            element={<QuestionnaireCoach/>}
            key={AppRoute.QuestionnaireCoach}
          />
          <Route
            path={AppRoute.QuestionnaireUser}
            element={<QuestionnaireUser/>}
            key={AppRoute.QuestionnaireUser}
          />
          <Route
            path={AppRoute.SignUp}
            element={<SignUp/>}
            key={AppRoute.SignUp}
          />
          <Route
            path={AppRoute.TrainingCardCoach}
            element={<TrainingCardCoach/>}
            key={AppRoute.TrainingCardCoach}
          />
          <Route
            path={AppRoute.TrainingCardUser}
            element={<TrainingCardUser/>}
            key={AppRoute.TrainingCardUser}
          />
          <Route
            path={AppRoute.TrainingCatalog}
            element={<TrainingCatalog/>}
            key={AppRoute.TrainingCatalog}
          />
          <Route
            path={AppRoute.TrainingDiary}
            element={<TrainingDiary/>}
            key={AppRoute.TrainingDiary}
          />
          <Route
            path={AppRoute.UserCardCoach}
            element={<UserCardCoach/>}
            key={AppRoute.UserCardCoach}
          />
          <Route
            path={AppRoute.UserCardUser}
            element={<UserCardUser/>}
            key={AppRoute.UserCardUser}
          />
          <Route
            path={AppRoute.UsersCatalog}
            element={<UserCatalog/>}
            key={AppRoute.UsersCatalog}
          />
        </Routes>
      </ScrollToTop>
    </HelmetProvider>
  );
}
export default App;
