/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

{
    const ellie1 = {
      name: 'Ellie',
      age: '18',
    };
  
    const name = 'Ellie';
    const age = '18';
  
    // 💩
    const ellie2 = {
      name: name,
      age: age,
    };
  
    // ✨
    // key와 value가 같으면 하나만 작성해도 됩니다.
    const ellie3 = {
      name,
      age,
    };
  
    console.log(ellie1, ellie2, ellie3);
    console.clear();
  }
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'Anna',
      level: 1,
    };
  
    // 💩
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨ Object Destructuring
    {
      const { name, level } = student;
      console.log(name, level);
  
      const { name: studentName, level: studentLevel } = student;
      console.log(studentName, studentLevel);
    }
  
    // array
    const animals = ['🐶', '😽'];
  
    // 💩
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨ Array Destructuring
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    console.clear();
  }
  
  /**
   * Spread Syntax
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }];
    
    // 밑에 결과 값은 다 바뀝니다.
    // 즉 어떠한 값을 저장하는 공간은 존재하고
    // 무언가를 선언 할 때 그 저장한 값의 주소를 참조시키기 때문에
    // 밑에 객체의 값을 변경하면 그 값을 가리키는 모든 값들이 바뀝니다.
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    // key가 같은 경우 마지막의 값이 최종적으로 덮습니다.
    const dog = { ...dog1, ...dog2 };
    console.log(dog);
    console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {
        console.log(message);
      }
      
      // 인자가 전달 되었을 때와
      // 전달되지 않았을 경우를 대비하는 함수 입니다.
      // 위에 처럼 if문을 쓸 필요가 없습니다.
      printMessage('hello');
      printMessage();
    }
    console.clear();
  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }