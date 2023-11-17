import BackgroundLogo from "../../components/background-logo/background-logo";
import PopupSignUp from "../../components/popup-sign-up/popup-sign-up";

function SignUp(): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <BackgroundLogo />
        <PopupSignUp />
      </main>
    </div>
  );
}

export default SignUp;