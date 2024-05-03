import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import ChangePassword from './sections/ChangePassword';
import ChangePhoto from './sections/ChangePhoto';
import EditProfile from './sections/EditProfile';

const ProfilePage = () => {
  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Profile" />

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="flex flex-col gap-y-7">
            <EditProfile />
            <ChangePassword />
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <ChangePhoto />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
