export default function validateUpdate(username, password, confirm, tel) {
  if (username === "") {
    return {
      success: false,
      emptyUsername: true,
    };
  }
  if (password !== confirm) {
    return {
      success: false,
      confirmFailed: true,
    };
  }
  return {
    success: true,
    changePass: password !== "",
  };
}
