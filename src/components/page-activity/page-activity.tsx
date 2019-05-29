import { Component, Prop, State } from '@stencil/core';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-activity',
  styleUrl: 'page-activity.css'
})
export class PageSession {
  private session: any;
  @State() isFavorite: boolean;
  @Prop() sessionId: string;
  @Prop() goback = '/';

  async componentWillLoad() {
    this.session = await ConferenceData.getSession(this.sessionId);
    this.isFavorite = UserData.hasFavorite(this.session.name);
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (UserData.hasFavorite(this.session.name)) {
      UserData.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      UserData.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback} />
          </ion-buttons>
          {this.session ? <ion-title>{this.session.name}</ion-title> : null}
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div padding>
          <ion-grid no-padding>
            <ion-row>
              <ion-col size="6">
                {this.session.tracks.map(track => (
                  <span
                    class={{ [`session-track-${track.toLowerCase()}`]: true }}
                  >
                    {track}
                  </span>
                ))}
                <div>Sessão {this.sessionId}</div>
              </ion-col>
              <ion-col size="6" text-right class={this.isFavorite ? 'show-favorite' : ''} >
                <ion-icon
                  name="heart-empty"
                  size="large"
                  class="icon-heart-empty"
                  onClick={() => this.toggleFavorite()}
                />
                <ion-icon
                  name="heart"
                  color="danger"
                  size="large"
                  class="icon-heart"
                  onClick={() => this.toggleFavorite()}
                />
              </ion-col>
            </ion-row>
          </ion-grid>

          <h1>{this.session.name}</h1>

          <p>{this.session.description}</p>

          <ion-text color="medium">
            {this.session.timeStart} &ndash; {this.session.timeEnd}
            <br />
            {this.session.location}
          </ion-text>
        </div>

        <ion-list>
          <ion-item onClick={() => this.sessionClick('watch')} button>
            <ion-label color="primary">Seguir</ion-label>
          </ion-item>
          <ion-item onClick={() => this.sessionClick('add to calendar')} button>
            <ion-label color="primary">Adicionar à Agenda</ion-label>
          </ion-item>
          <ion-item
            onClick={() => this.sessionClick('mark as unwatched')}
            button
          >
            <ion-label color="primary">Deixar de Seguir</ion-label>
          </ion-item>
          <ion-item onClick={() => this.sessionClick('download video')} button>
            <ion-label color="primary">Baixar Fatura</ion-label>
            <ion-icon
              slot="end"
              color="primary"
              size="small"
              name="cloud-download"
            />
          </ion-item>
          <ion-item onClick={() => this.sessionClick('leave feedback')} button>
            <ion-label color="primary">Enviar Feedback</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
