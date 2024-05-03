interface AppModalProps {
  modalType: 'Type one' | 'Type two' | 'Type three';
  title?: string;
  description?: string;
  onAcceptClick?: () => void;
  acceptTitle?: string;
  modalThreeComponent?: JSX.Element;
}
