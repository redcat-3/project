import BackgroundLogo from '../../components/background-logo/background-logo';
import PopupQuestionnaireUser from '../../components/popup-questionnaire-user/popup-questionnaire-user';

function QuestionnaireUser(): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <BackgroundLogo />
        <PopupQuestionnaireUser />
      </main>
    </div>
  );
}
export default QuestionnaireUser;
