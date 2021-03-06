import { Component, Method, Prop, State } from '@stencil/core';
import { Action, Store } from '@stencil/redux';

import { open } from '../../actions/session';

@Component({
  tag: 'page-tabs',
  styleUrl: 'page-tabs.css',
})
export class PageTabs {

  @Prop({ connect: 'ion-menu-controller' }) menuCtrl: HTMLIonMenuControllerElement;
  @Prop({ connect: 'ion-tabs' }) tabCtrl: HTMLIonTabsElement;
  @Prop({ context: 'store' }) store: Store;
  @Prop() role: any;
  @Prop() hasTabs = true;

  @State() directions: any[];

  open: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const { session: { directions } } = state;
      return { directions };
    });
    this.store.mapDispatchToProps(this, { open });
  }

  async componentDidLoad() {
    const menuCtlr: HTMLIonMenuControllerElement = await (this.menuCtrl as any).componentOnReady();
    const tabsCtlr: HTMLIonTabsElement = await (this.tabCtrl as any).componentOnReady();
    // const dir = (this.directions.slice(-1)[0].component as string).toLowerCase();
    // const direction = dir === 'drawer' || dir === undefined ? 'drawer' : dir;
    tabsCtlr.select('tab-drawer');
    document.querySelector('ion-tabs').select('tab-drawer');
    menuCtlr.enable(true);
  }

  @Method()
  async select(tab: string) {
    const tabsCtlr: HTMLIonTabsElement = await (this.tabCtrl as any).componentOnReady();
    tabsCtlr.select('tab-' + tab);
  }

  toggleOpen(tab: string) {
    this.open(tab.toUpperCase(), '/' + tab);
  }

  render() {
    return [
      <ion-tabs>
        <slot/>
        {
          /*this.hasTabs &&*/
          [
            <ion-tab tab="tab-drawer" component="app-map"></ion-tab>,
            <ion-tab tab="tab-schedule" component="page-schedule"></ion-tab>,
            <ion-tab tab="tab-create" component="page-create"></ion-tab>,
            <ion-tab tab="tab-speakers" component="page-order-list"></ion-tab>,
            <ion-tab tab="tab-about" component="page-about"></ion-tab>
          ]
        }

        <ion-tab-bar slot="bottom">
          {this.role === 'CUSTOMER' && [
            <ion-tab-button tab="tab-create" onClick={() => this.toggleOpen('create')}>
              <ion-icon name="cube"></ion-icon>
              <ion-label>Criar</ion-label>
            </ion-tab-button>,
            <ion-tab-button tab="tab-speakers" onClick={() => this.toggleOpen('speakers')}>
              <ion-icon name="cash"></ion-icon>
              <ion-label>Ofertas</ion-label>
            </ion-tab-button>,
            <ion-tab-button tab="tab-schedule" onClick={() => this.toggleOpen('schedule')}>
              <ion-icon name="calendar"></ion-icon>
              <ion-label>Fretes</ion-label>
            </ion-tab-button>
          ]}
          {this.role === 'MERCHANT' && [
            <ion-tab-button tab="tab-speakers" onClick={() => this.toggleOpen('speakers')}>
              <ion-icon name="cash"></ion-icon>
              <ion-label>Ofertar</ion-label>
            </ion-tab-button>,
            <ion-tab-button tab="tab-schedule" onClick={() => this.toggleOpen('schedule')}>
              <ion-icon name="calendar"></ion-icon>
              <ion-label>Fretes</ion-label>
            </ion-tab-button>,
            <ion-tab-button tab="tab-about" onClick={() => this.toggleOpen('about')}>
              <ion-icon name="information-circle"></ion-icon>
              <ion-label>Sobre</ion-label>
            </ion-tab-button>
          ]}
          {/*<ion-tab-button tab="tab-map" onClick={() => this.toggleOpen('map')}>
            <ion-icon name="map"></ion-icon>
            <ion-label>Mapa</ion-label>
          </ion-tab-button>*/}
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
