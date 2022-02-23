import Component from 'flarum/common/Component';

export default class Member extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        const loggedin = app.session.user;
        if (loggedin) {
            var body = document.body;
            body.classList.add("logged-in");
        }
    }
    view() {
        return;
    }
}
