export default {
  componentUpdated(el, binding) {
    const nextEl = el.nextSibling;
    const className = 'error-form-indicator';
    if (typeof binding.value === 'string' && binding.value) {
      let smallTag = nextEl;
      if (!smallTag || smallTag.tagName.toLowerCase() !== 'small' || !smallTag.classList.contains(className)) {
        smallTag = document.createElement('small');
        smallTag.classList.add(className);
      }
      smallTag.innerText = binding.value;

      smallTag.style.color = 'red';
      smallTag.style.fontStyle = 'italic';
      smallTag.style.display = 'block';

      el.parentNode.insertBefore(smallTag, el.nextSibling);
    } else if (nextEl && nextEl.tagName.toLowerCase() === 'small' && nextEl.classList.contains(className)) {
      // if does not contain the error and there is small tag before
      nextEl.parentNode.removeChild(nextEl);
    } else {
      return null;
    }
    return true;
  },
};
