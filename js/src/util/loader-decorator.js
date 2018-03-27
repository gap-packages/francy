export function loader() {
  return function (target, key, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      let loaderId = generateId();
      showLoader.call(this, loaderId);
      let result = oldValue.apply(this, arguments);
      hideLoader.call(this, loaderId);
      return result;
    };
    return descriptor;
  };
}

function showLoader(loaderId) {
  let element = this.HTMLParent.select(`div.loader`);
  element.data()[0][loaderId] = true;
  element.style('visibility', 'visible');
}

function hideLoader(loaderId) {
  let element = this.HTMLParent.select(`div.loader`);
  delete element.data()[0][loaderId];
  // hide only if no more loaders present
  if (Object.values(element.data()[0]).length == 0) {
    this.HTMLParent.select(`div.loader`).style('visibility', 'hidden');
  }
}

function generateId(){
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `L-${Math.random().toString(36).substr(2, 9)}`;
}
