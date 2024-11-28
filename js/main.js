document.addEventListener("DOMContentLoaded", function () {
  const users = [
    {
      username: "admin",
      password: "170800",
    },
  ];
  const userview = [
    {
      username: "ega",
      password: "ega123",
    },
  ];

  const togglePassword = document.getElementById("toggle-password");
  const passwordField = document.getElementById("password");

  togglePassword.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  const loginForm = document.getElementById("login");
  const sukses = document.getElementById("sukses");
  const pesan = document.getElementById("pesan");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Reset tampilan sukses/error
    sukses.style.display = "none";
    sukses.style.backgroundColor = "";
    sukses.style.color = "";
    pesan.textContent = "";

    const cekAkun = users.find(
      (s) => s.username === username && s.password === password
    );
    const userget = userview.find(
      (e) => e.username === username && e.password === password
    );

    if (cekAkun) {
      localStorage.setItem("username", username);
      window.location.href = "dashboard.html";
    } else if (userget) {
      localStorage.setItem("username", username);
      window.location.href = "user.html";
    } else {
      sukses.style.display = "block";
      sukses.style.backgroundColor = "red";
      sukses.style.color = "white";
      pesan.textContent = "Username atau password salah!";
    }
  });
});
