const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();
// generara error ya que la variable es local
// console.log(hello);

var scope = "i'm global";

const functionScope = () => {
  var scope = ' I am just a local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
