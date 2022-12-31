function getCurrentSession() {
    let session = localStorage.getItem("__react_session__");
    let sessionJSON = JSON.parse(session);
    if (sessionJSON != null) {
      if (sessionJSON.login) {
        let connect = document.querySelector(".connect");
        connect?.removeAttribute("hidden");

        let disconnect = document.querySelector(".disconnect");
        disconnect?.setAttribute("hidden", "true");

        return sessionJSON;
      }
    }
    return null
}

export { getCurrentSession };