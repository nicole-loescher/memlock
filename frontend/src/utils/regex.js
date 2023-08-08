export const PASSWORD_REGEX = new RegExp("^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}$");

export const EMAIL_REGEX = new RegExp(
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
);

export const NAME_REGEX = new RegExp("/^[a-zA-Zs.]*$/");
