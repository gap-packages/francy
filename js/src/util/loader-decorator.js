/* global d3 */

export function loader() {
  return function (target, key, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = async function() {
      let loaderId = showLoader.call(this);
      let result = await oldValue.apply(this, arguments);
      hideLoader.call(this, loaderId);
      return result;
    };
    return descriptor;
  };
}

export function showLoader() {
  let id = generateId();
  let element = d3.select(`div.loader#Loader-${this.data.canvas.id}`);
  element.data()[0][id] = true;
  element.style('visibility', 'visible');
  return id;
}

export function hideLoader(loaderId) {
  let element = d3.select(`div.loader#Loader-${this.data.canvas.id}`);
  delete element.data()[0][loaderId];
  // hide only if no more loaders present
  if (Object.values(element.data()[0]).length == 0) {
    element.style('visibility', 'hidden');
  }
}

function generateId(){
  // Math.random should be unique because of its seeding algorithm
  // Convert it to base 36 (numbers + letters), 
  // and grab the first 9 characters after the decimal
  return `L-${Math.random().toString(36).substr(2, 9)}`;
}
