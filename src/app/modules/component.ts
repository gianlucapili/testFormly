import { RlbAlertData, RlbButtonData, RlbCardData, RlbProgressData, RlbSpinnerData } from "./components";
import { FormData } from "./components/forms/form-data";
import { ApiDescriptor } from "./services/apis/apis.interfaces";


export type AllComponents =
  ComponentItem<'rlb-alert-component', RlbAlertData> |
  ComponentItem<'rlb-card-component', RlbCardData> |
  ComponentItem<'rlb-button-component', RlbButtonData> |
  ComponentItem<'rlb-spinner-component', RlbSpinnerData> |
  ComponentItem<'rlb-progress-component', RlbProgressData> |
  ComponentItem<'rlb-form-component', FormData> |
  ComponentItem<'rlb-collapse-component', any> |
  ComponentItem<'rlb-badge-component', any>
  ;
export interface ComponentItem<name = string, T = any> extends ComponentData<T> {
  name: name;
  apis?: ApiDescriptor;
  components?: AllComponents[];
}

export interface ComponentData<T = any> {
  data: T;
  $ref?: string;
}