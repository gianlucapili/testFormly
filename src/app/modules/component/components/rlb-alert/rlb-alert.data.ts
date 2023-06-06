export interface RlbAlertData {
  text?: string;
  dismissible: boolean;
  type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';
}