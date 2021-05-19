const parseStringFloat = (number, showSign = true) =>
  `${number < 0 ? "-" : ""}${showSign ? "$" : ""}${parseFloat(
    Math.abs(number)
  ).toFixed(2)}`;

const combineValues = (
  {delivery = 0, prep = 0, pickup = 0},
  orderType = "pickup"
) => {
  const safePickup = pickup || 0;
  const safeDelivery = delivery || 0;
  const safePrep = prep || 0;

  const baseValue = orderType === "delivery" ? safeDelivery : safePickup;
  return safePrep + baseValue;
};

const stringReplacer = (str, arr) => {
  let newStr = str;
  arr.forEach((targetString) => {
    newStr = newStr.replace(
      targetString.replaceTarget,
      targetString.replaceValue
    );
  });

  return newStr;
};

const formatPhoneNumber = (phoneNumberString: string): string => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return "";
};

const formatPrice = (price, showSign = true) =>
  Array.isArray(price)
    ? `${parseStringFloat(price[0], showSign)} - ${parseStringFloat(
        price[1],
        showSign
      )}`
    : parseStringFloat(price, showSign);

const baseURL = "https://assets.lunchbox.io";

const ImageUrlGenerator = (image, config) =>
  `${baseURL}/${config.directory}/images/${image}`;

const addComma = (value) => `${value ? `${value},` : ""}`;

const DEFAULT_ADDRESS = {
  city: "",
  state: "",
  street1: "",
  street2: "",
  zip: "",
};
const formatAddress = (inputAddress = {}) => {
  const address = {...DEFAULT_ADDRESS, ...inputAddress};
  return `${addComma(address.street1)}${addComma(address.street2)} ${addComma(
    address.city
  )} ${address.state} ${address.zip}`;
};
const formatAddressAsTwoArray = (inputAddress = {}) => {
  const address = {...DEFAULT_ADDRESS, ...inputAddress};
  const address1 = `${addComma(address.street1)}${addComma(address.street2)}`;
  const address2 = `${addComma(address.city)} ${address.state} ${address.zip}`;
  return [address1, address2];
};

export {
  combineValues,
  formatPhoneNumber,
  formatPrice,
  ImageUrlGenerator,
  parseStringFloat,
  stringReplacer,
  formatAddress,
  formatAddressAsTwoArray
};
