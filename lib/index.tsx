import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name="qq"
        onClick={fn}
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
        onTouchStart={() => console.log('touch')}
  />
  <hr/>
  如果看不到上面的图标，请联系班主任或老师解决
</div>, document.querySelector('#root'));
