import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/common/ForumApplication';
import Member from './components/Member';

app.initializers.add('zerosonesfun-flarum-member', () => {
  extend(ForumApplication.prototype, 'mount', () => {
      m.mount(document.body.appendChild, Member);
  });
});