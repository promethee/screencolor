const completeHexColor = (colorString) => colorString.includes('#') ? colorString : `#${colorString}`;

const setColor = (color) => {
  const body = document.querySelector('body');
  const cssColor = `background-color: ${color}`
  body?.setAttribute('style', cssColor);
};

const setInputColor = (color) => {
  const input = document.querySelector('input');
  if (input) input.value = color;
};

const setUrlColor = (color) => {
  const url = window.location;
  url.search = `?hex=${color}`;
  console.info({ url });
};

const updateColor = ({ target }) => {
  const { value: color } = target;
  console.info('upateColor', { color });
  setColor(color);
  setUrlColor(color.replace('#', ''));
};

const run = () => {
  const params = new URLSearchParams(window.location.search);
  const input = document.querySelector('input');

  input?.addEventListener('input', updateColor);
  const hexColorFromUrl = params.get('hex');
  if (hexColorFromUrl) {
    const hexColor = completeHexColor(hexColorFromUrl);
    console.info({ hexColor });
    setInputColor(hexColor);
    setColor(hexColor);
  }
};

document.addEventListener('DOMContentLoaded', run);
