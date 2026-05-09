test("login email should not be empty", () => {
  const email = "";
  const result = email.trim() !== "";
  expect(result).toBe(false);
});

test("valid login email should contain @", () => {
  const email = "user@gmail.com";
  const result = email.includes("@");
  expect(result).toBe(true);
});

test("password should be at least 6 characters", () => {
  const password = "123456";
  const result = password.length >= 6;
  expect(result).toBe(true);
});

test("register name should not be empty", () => {
  const name = "Lilas";
  const result = name.trim() !== "";
  expect(result).toBe(true);
});