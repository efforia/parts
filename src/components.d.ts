/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';

import '@stencil/redux';
import '@ionic/core';
import 'ionicons';
import {
  EventEmitter,
} from './stencil.core';


export namespace Components {

  interface AddressInput {
    'input': any;
    'label': string;
    'name': string;
  }
  interface AddressInputAttributes extends StencilHTMLAttributes {
    'input'?: any;
    'label'?: string;
    'name'?: string;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface GenericCarousel {}
  interface GenericCarouselAttributes extends StencilHTMLAttributes {}

  interface AppDrawer {}
  interface AppDrawerAttributes extends StencilHTMLAttributes {}

  interface AppEntrance {}
  interface AppEntranceAttributes extends StencilHTMLAttributes {}

  interface AppMap {}
  interface AppMapAttributes extends StencilHTMLAttributes {}

  interface PageAbout {}
  interface PageAboutAttributes extends StencilHTMLAttributes {}

  interface PageAccount {}
  interface PageAccountAttributes extends StencilHTMLAttributes {
    'onUserDidLogOut'?: (event: CustomEvent) => void;
  }

  interface PageCreate {}
  interface PageCreateAttributes extends StencilHTMLAttributes {}

  interface PageOrderDetail {
    'order': any;
    'orderId': string;
    'role': string;
    'userId': any;
  }
  interface PageOrderDetailAttributes extends StencilHTMLAttributes {
    'order'?: any;
    'orderId'?: string;
    'role'?: string;
    'userId'?: any;
  }

  interface PageOrderList {}
  interface PageOrderListAttributes extends StencilHTMLAttributes {}

  interface PageSchedule {}
  interface PageScheduleAttributes extends StencilHTMLAttributes {}

  interface PageSupport {}
  interface PageSupportAttributes extends StencilHTMLAttributes {}

  interface PageTabs {
    'hasTabs': boolean;
    'role': any;
    'select': (tab: string) => Promise<void>;
  }
  interface PageTabsAttributes extends StencilHTMLAttributes {
    'hasTabs'?: boolean;
    'role'?: any;
  }

  interface RegisterWizard {
    'action': any;
    'exit': any;
    'images': any;
  }
  interface RegisterWizardAttributes extends StencilHTMLAttributes {
    'action'?: any;
    'exit'?: any;
    'images'?: any;
  }

  interface ImageUploader {
    'reset': () => void;
    'send': any;
  }
  interface ImageUploaderAttributes extends StencilHTMLAttributes {
    'onOnUploadCompleted'?: (event: CustomEvent<Blob>) => void;
    'send'?: any;
  }

  interface GenericWizard {
    'action': any;
    'id': string;
    'images': any;
    'steps': number;
  }
  interface GenericWizardAttributes extends StencilHTMLAttributes {
    'action'?: any;
    'id'?: string;
    'images'?: any;
    'steps'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AddressInput': Components.AddressInput;
    'AppRoot': Components.AppRoot;
    'GenericCarousel': Components.GenericCarousel;
    'AppDrawer': Components.AppDrawer;
    'AppEntrance': Components.AppEntrance;
    'AppMap': Components.AppMap;
    'PageAbout': Components.PageAbout;
    'PageAccount': Components.PageAccount;
    'PageCreate': Components.PageCreate;
    'PageOrderDetail': Components.PageOrderDetail;
    'PageOrderList': Components.PageOrderList;
    'PageSchedule': Components.PageSchedule;
    'PageSupport': Components.PageSupport;
    'PageTabs': Components.PageTabs;
    'RegisterWizard': Components.RegisterWizard;
    'ImageUploader': Components.ImageUploader;
    'GenericWizard': Components.GenericWizard;
  }

  interface StencilIntrinsicElements {
    'address-input': Components.AddressInputAttributes;
    'app-root': Components.AppRootAttributes;
    'generic-carousel': Components.GenericCarouselAttributes;
    'app-drawer': Components.AppDrawerAttributes;
    'app-entrance': Components.AppEntranceAttributes;
    'app-map': Components.AppMapAttributes;
    'page-about': Components.PageAboutAttributes;
    'page-account': Components.PageAccountAttributes;
    'page-create': Components.PageCreateAttributes;
    'page-order-detail': Components.PageOrderDetailAttributes;
    'page-order-list': Components.PageOrderListAttributes;
    'page-schedule': Components.PageScheduleAttributes;
    'page-support': Components.PageSupportAttributes;
    'page-tabs': Components.PageTabsAttributes;
    'register-wizard': Components.RegisterWizardAttributes;
    'image-uploader': Components.ImageUploaderAttributes;
    'generic-wizard': Components.GenericWizardAttributes;
  }


  interface HTMLAddressInputElement extends Components.AddressInput, HTMLStencilElement {}
  var HTMLAddressInputElement: {
    prototype: HTMLAddressInputElement;
    new (): HTMLAddressInputElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLGenericCarouselElement extends Components.GenericCarousel, HTMLStencilElement {}
  var HTMLGenericCarouselElement: {
    prototype: HTMLGenericCarouselElement;
    new (): HTMLGenericCarouselElement;
  };

  interface HTMLAppDrawerElement extends Components.AppDrawer, HTMLStencilElement {}
  var HTMLAppDrawerElement: {
    prototype: HTMLAppDrawerElement;
    new (): HTMLAppDrawerElement;
  };

  interface HTMLAppEntranceElement extends Components.AppEntrance, HTMLStencilElement {}
  var HTMLAppEntranceElement: {
    prototype: HTMLAppEntranceElement;
    new (): HTMLAppEntranceElement;
  };

  interface HTMLAppMapElement extends Components.AppMap, HTMLStencilElement {}
  var HTMLAppMapElement: {
    prototype: HTMLAppMapElement;
    new (): HTMLAppMapElement;
  };

  interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {}
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };

  interface HTMLPageAccountElement extends Components.PageAccount, HTMLStencilElement {}
  var HTMLPageAccountElement: {
    prototype: HTMLPageAccountElement;
    new (): HTMLPageAccountElement;
  };

  interface HTMLPageCreateElement extends Components.PageCreate, HTMLStencilElement {}
  var HTMLPageCreateElement: {
    prototype: HTMLPageCreateElement;
    new (): HTMLPageCreateElement;
  };

  interface HTMLPageOrderDetailElement extends Components.PageOrderDetail, HTMLStencilElement {}
  var HTMLPageOrderDetailElement: {
    prototype: HTMLPageOrderDetailElement;
    new (): HTMLPageOrderDetailElement;
  };

  interface HTMLPageOrderListElement extends Components.PageOrderList, HTMLStencilElement {}
  var HTMLPageOrderListElement: {
    prototype: HTMLPageOrderListElement;
    new (): HTMLPageOrderListElement;
  };

  interface HTMLPageScheduleElement extends Components.PageSchedule, HTMLStencilElement {}
  var HTMLPageScheduleElement: {
    prototype: HTMLPageScheduleElement;
    new (): HTMLPageScheduleElement;
  };

  interface HTMLPageSupportElement extends Components.PageSupport, HTMLStencilElement {}
  var HTMLPageSupportElement: {
    prototype: HTMLPageSupportElement;
    new (): HTMLPageSupportElement;
  };

  interface HTMLPageTabsElement extends Components.PageTabs, HTMLStencilElement {}
  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };

  interface HTMLRegisterWizardElement extends Components.RegisterWizard, HTMLStencilElement {}
  var HTMLRegisterWizardElement: {
    prototype: HTMLRegisterWizardElement;
    new (): HTMLRegisterWizardElement;
  };

  interface HTMLImageUploaderElement extends Components.ImageUploader, HTMLStencilElement {}
  var HTMLImageUploaderElement: {
    prototype: HTMLImageUploaderElement;
    new (): HTMLImageUploaderElement;
  };

  interface HTMLGenericWizardElement extends Components.GenericWizard, HTMLStencilElement {}
  var HTMLGenericWizardElement: {
    prototype: HTMLGenericWizardElement;
    new (): HTMLGenericWizardElement;
  };

  interface HTMLElementTagNameMap {
    'address-input': HTMLAddressInputElement
    'app-root': HTMLAppRootElement
    'generic-carousel': HTMLGenericCarouselElement
    'app-drawer': HTMLAppDrawerElement
    'app-entrance': HTMLAppEntranceElement
    'app-map': HTMLAppMapElement
    'page-about': HTMLPageAboutElement
    'page-account': HTMLPageAccountElement
    'page-create': HTMLPageCreateElement
    'page-order-detail': HTMLPageOrderDetailElement
    'page-order-list': HTMLPageOrderListElement
    'page-schedule': HTMLPageScheduleElement
    'page-support': HTMLPageSupportElement
    'page-tabs': HTMLPageTabsElement
    'register-wizard': HTMLRegisterWizardElement
    'image-uploader': HTMLImageUploaderElement
    'generic-wizard': HTMLGenericWizardElement
  }

  interface ElementTagNameMap {
    'address-input': HTMLAddressInputElement;
    'app-root': HTMLAppRootElement;
    'generic-carousel': HTMLGenericCarouselElement;
    'app-drawer': HTMLAppDrawerElement;
    'app-entrance': HTMLAppEntranceElement;
    'app-map': HTMLAppMapElement;
    'page-about': HTMLPageAboutElement;
    'page-account': HTMLPageAccountElement;
    'page-create': HTMLPageCreateElement;
    'page-order-detail': HTMLPageOrderDetailElement;
    'page-order-list': HTMLPageOrderListElement;
    'page-schedule': HTMLPageScheduleElement;
    'page-support': HTMLPageSupportElement;
    'page-tabs': HTMLPageTabsElement;
    'register-wizard': HTMLRegisterWizardElement;
    'image-uploader': HTMLImageUploaderElement;
    'generic-wizard': HTMLGenericWizardElement;
  }


}
