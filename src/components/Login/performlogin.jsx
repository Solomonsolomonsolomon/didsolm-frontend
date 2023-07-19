import Login from "./Login";
import jwt_decode from "jwt-decode";

let baseUrl = "http://localhost:5678";

export async function loginFetch(inputValues) {
  return new Promise(async (resolve, reject) => {
    let res = await fetch(
      //   "https://e-commerce-api.solomonsolomons.repl.co/auth/login",
      `${baseUrl}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      }
    );
    let json = await res.json();
    if (!res.ok) {
      return reject(json.msg);
    } else {
      document.cookie = `accessToken=${json.accessToken}`;
      document.cookie = `refreshToken=${json.refreshToken}`;
      document.cookie = `id=${json.id}`;
      document.cookie = `role=${json.role}`;
      return resolve("successful login");
    }
  });
}

export async function getStoredInfo() {
  return new Promise((resolve, reject) => {
    let cookies = document.cookie.split("=").join(":").split(";");
    let cookieArray = cookies;
    const cookieObject = {};
    cookieArray.forEach((element) => {
      const [key, value] = element.split(":");
      cookieObject[key.trim()] = value.trim();
    });
    if (cookieObject) {
      resolve(cookieObject);
    } else {
      reject("failed to get stored info");
    }
  });
}

export async function handleLoginRedirect() {
  getStoredInfo().then(({ accessToken, refreshToken, id, role }) => {
    if (accessToken && role == "admin") {
      location.href = "/#/admin";
    } else if (accessToken && role == "user") {
      location.href = "/#/home";
    } else {
      location.href = "/#/login";
    }
  });
}

export async function handleSilentAuth() {
  return new Promise((resolve, reject) => {
    getStoredInfo()
      .then(async ({ refreshToken }) => {
        if (!refreshToken) {
          reject("silent auth failed ..no refresh token");
        }
        let res = await fetch(`${baseUrl}/refresh`, {
          method: "POST",
          headers: {
            refresh: refreshToken,
            "content-Type": "application/json",
          },
          body: null,
        });
        let json = await res.json();
        if (res.ok) {
          document.cookie = `accessToken=${json.accessToken}`;
          resolve("silent auth successful");
        } else {
          reject("silent auth failed");
        }
      })
      .catch((err) => {
        reject("silent auth failed");
      });
  });
}

// export async function isLoggedIn() {
//   return getStoredInfo()
//     .then(async ({ accessToken }) => {
//       let res = await fetch(`${baseUrl}/`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       let json = await res.json();
//       if (res.ok) {
//         return true;
//       } else if (res.status == 401) {
//         return handleSilentAuth()
//           .then((e) => {
//             return true;
//           })
//           .catch((err) => {
//             return false;
//           });
//       } else {
//         return false;
//       }
//     })
//     .catch((err) => {
//       return false;
//     });
// }

export async function decodeToken() {
  return getStoredInfo().then(async ({ accessToken }) => {
    try {
      let token = await jwt_decode(accessToken);
      if (!token) {
        throw new Error("false");
      }
      let jwtExpiryDate = token.exp;
      if (jwtExpiryDate < Math.floor(Date.now() / 1000)) {
        throw new Error("false");
      } else {
        return { status: true, accessToken };
      }
    } catch (error) {
      return { status: false, accessToken };
    }
  });
}

export async function isLoggedIn() {
  return decodeToken()
    .then((e) => {
      let i;
      e.status ? (i = true) : (i = false);
      return i;
    })
    .catch(async () => {
      try {
        await handleSilentAuth();
        return true;
      } catch {
        return false;
      }
    });
}
