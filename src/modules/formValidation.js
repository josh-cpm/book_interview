// validation types:
// * presence(exists)
// * phone number
// * email
// * sanitizeinput
// * async?

export default function validateInput(input, options) {
  const errors = [];
  if (options.hasOwnPropert('presence')) {
    const e = presence(input);
    if (e) errors.push(e);
  }

  if (options.hasOwnProperty('tel')) {
    const e = tel(input);
    if (e) errors.push(e);
  }

  return errors;
}

function presence(input) {
  if (typeof input === null || input.length === 0) {
    return 'This field is required.';
  }
}

function tel(input) {
  const regex = new RegExp(`^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$`);
  const pass = regex.test(input);
  if (!pass) {
    return 'Please enter a valid phone number.';
  }
}
