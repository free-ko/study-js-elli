/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
    const person1 = {
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        // 밑에 반복적인 코드가 작성되는 것을 볼 수 있습니다.
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨ job, manager이 있으면 name 출력
    {
      function printManager(person) {
      // 위에 반복되는 코드 대신에 ? 를 통해 코드를 간단하게 할 수 있습니다.
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    // OR 연산자는 앞에 있는 값이 False 일 때 뒤에 있는 값이 실행됩니다.
    // 밑에 코드는 name이 존재 하기 때문에 name이 출력이 됩니다.
    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    // 💩
    // 사용자가 아무것도 쓰고 싶지 않을 때에도 즉
    // name에 ''; 값도 사실상 없는 값임에도 불구하고 False로 간주되어
    // Guest가 출력 됩니다.
    // 또한 num에 0의 값을 할당 했는데도 불구하고 undefined가 출력 되는 이유는
    // 0의 값을 False로 인지 하기 때문입니다.
    // 그러기 때문에 OR 연산자를 사용할 때 주의 해야 합니다.
    {
      const name = '';
      const userName = name || 'Guest';
      console.log(userName);
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ✨
    // name과 num에 값이 있을 때에만 name과 num을 사용하고 없을 때에는 뒤에 있는 값을 사용합니다.
    {
      const name = '';
      const userName = name ?? 'Guest';
      console.log(userName);

      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }
  }