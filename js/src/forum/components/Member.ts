import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

import type Mithril from 'mithril';

export default class Member extends Component {
  oninit(vnode: Mithril.Vnode) {
    super.oninit(vnode);

    const loggedin = app.session.user;
    if (loggedin) {
      var body = document.body;
      body.classList.add('logged-in');
    }
  }
  view() {
    return;
  }
}
