import PersonalAccountCoachItem from '../personal-account-coach-item/personal-account-coach-item';

function PersonalAccountCoachList(): JSX.Element {
  return (
    <ul className="personal-account-coach__list">
      <PersonalAccountCoachItem />
      <PersonalAccountCoachItem />
      <PersonalAccountCoachItem />
    </ul>
  );
}
export default PersonalAccountCoachList;
