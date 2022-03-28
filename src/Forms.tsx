import React, { useState } from 'react';

function Forms() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = event;
    console.log(event.currentTarget.value)
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello")
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="username"
        />
        <button>Log </button>
      </form>
      {/* <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
      <Circle bgColor="orange" borderRradius="50%" />
      <Circle bgColor="lightgreen" borderRradius="50%" borderColor="red" /> */}
    </div>
  );
}

export default Forms;


// 🚨
// const { currentTarget: { value }, } = event;
// event안 currnetTarget안에 value의 값을 기존 이름 그대로 value 라는 변수를 만든 것
// const value = event.currentTarget.value;랑 똑같다

// 🚨 응용
// const value = event.currentTarget.value;
// const tagName = event.currentTarget.tagName;
// const width = event.currentTarget.width;
// const id = event.currentTarget.id;
// 이것을 간편하게 쓸 수 있다.

// cosnt {
  // currentTarget: { value, tagName, width, id }
// } = event;

// 위와 같은 경우에는 event안 currentTarget안에 있는 값을 가져와야되서
// currentTarget:이 붙은 것
// 만약에 event안에 있는 속성만 가져와 변수를 만들려고 한다면
// const {x, y} = event;
// const x = event.x;
// const y = event.y;