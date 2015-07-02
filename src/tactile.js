export function tactile(node: HTMLElement, options: Object = {}): Object {

  let opts = Object.assign({}, options);
  let bound = false;

  const self = {

    bind(): boolean {
      if (bound) { return false; }
      bound = true;
      return true;
    }

  , unbind(): boolean {
      if (!bound) { return false; }
      bound = false;
      return true;
    }
  };

  return self;
}
