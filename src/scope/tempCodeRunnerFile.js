
var scope = "i'm global";

const functionScope = () => {
  var scope = ' I am just a local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope()