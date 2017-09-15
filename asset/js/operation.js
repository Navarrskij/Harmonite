
class Operation {
  calculate(input1, input2) {
    throw "13123123";
  }

   isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  validate(input1, input2) {
    // return this.isNumber(+input1.value) && this.isNumber(+input2.value);
    return true
  }
};

class Plus extends Operation {
  calculate(input1, input2) {
    if (super.validate(input1, input2))
    { return input1 + input2; }
    else {
      return null
    }
  }
};

class Minus extends Operation {
  calculate(input1, input2) {
    return input1 - input2;
  }
};

class Umn extends Operation {
  calculate(input1, input2) {
    return input1 * input2;
  }
};

class Del extends Operation {
  calculate(input1, input2) {
    return input1 / input2;
  }
};
