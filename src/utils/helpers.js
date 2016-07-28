// copied from lodash
export function throttle(func, wait, options) {
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  if (!options) options = {};
  const later = () => {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return () => {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

export function extractLabels(item) {
  const labels = {};

  item.images.forEach((image) => {
    for (let label in image.labels) {
      labels[label] = image.labels[label];
    }
  });
  return labels;
}

export function containsLabel(images, filter) {
  let found = false;

  images.forEach((image) => {
    for (let label in image.labels) {
      if (label === filter) { found = true; }
    }
  });
  return found;
}
