import { EventEmitter } from 'events';

export function tactile(node: HTMLElement, options: Object = {}): Object {

  const opts = Object.assign({ bind: true }, options);

  let bound = false;

  function mousedown() {
    // TODO
  }

  function mouseenter() {
    // TODO
  }

  function mouseleave() {
    // TODO
  }

  function mouseup() {
    // TODO
  }

  const self = {

    __proto__: EventEmitter.prototype

  , bind(): boolean {
      if (bound) { return false; }
      node.addEventListener('mousedown', mousedown, false);
      node.addEventListener('mouseenter', mouseenter, false);
      node.addEventListener('mouseleave', mouseleave, false);
      node.addEventListener('mouseup', mouseup, false);
      bound = true;
      return true;
    }

  , unbind(): boolean {
      if (!bound) { return false; }
      node.removeEventListener('mousedown', mousedown, false);
      node.removeEventListener('mouseenter', mouseenter, false);
      node.removeEventListener('mouseleave', mouseleave, false);
      node.removeEventListener('mouseup', mouseup, false);
      bound = false;
      return true;
    }
  };

  if (opts.bind) {
    self.bind();
  }

  return self;
}
