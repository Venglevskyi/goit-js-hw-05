const Account = function Account(login, email) {
  this.login = login;
  this.email = email;
  Account.prototype.getInfo = function getInfo() {
    console.log(`Login: ${login}, Email: ${email}`);
  };
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo();
const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo();
console.log(Account.prototype.getInfo);
