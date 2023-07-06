export default function validateLogin(account, password) {
    if (account === "" || password === "") {
        alert("Empty");
        return false;
    }
    return true;
}
