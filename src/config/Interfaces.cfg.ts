/**
 * @author: dwi.setiyadi@gmail.com
 */

/**
 * __R__: response type.
 * __E__: error type.
 *
 * _Note: if possible, don`t use __any__ in both param_
 */
export declare interface InterfaceState<R = any, E = any> {
  action: string;
  fetch: boolean;
  res: R | null;
  err: E | null;
}

export declare interface InterfaceAction {
  type: string;
  data?: any;
}

export declare interface InterfaceSaga {
  type: string;
}
