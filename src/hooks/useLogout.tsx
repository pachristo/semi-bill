import { useStore } from 'zustand';
import { appStateStore } from '../stores/appState.store';
import routes from '../navigation/routes';
import { authStore } from '../stores/auth.store';

const useLogout = () => {
  const { setActiveModal, closeActiveModal, setIsModalLoading } =
    useStore(appStateStore);
  // const logoutAPI = useMutation({ mutationFn: logoutApi });
  const { logout } = useStore(authStore);

  const onLogout = async () => {
    setIsModalLoading(true);
    // // const response = await logoutAPI.mutateAsync();
    // setIsModalLoading(false);

    // if (response.ok) {
    //   appToast.Success(response.data.message ?? 'Logout success.');
    // }
    closeActiveModal();
    logout();
    window.location.replace(routes.HOME_PAGE);
  };

  const handleLogout = () => {
    setActiveModal({
      modalType: 'Type two',
      title: 'Are you absolutely sure?',
      description:
        'This action cannot be undone. Logging out will clear all your session history on our servers.',
      acceptTitle: 'Logout',
      onAcceptClick: onLogout,
    });
  };

  return { handleLogout };
};

export default useLogout;
