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


// ๐จ
// const { currentTarget: { value }, } = event;
// event์ currnetTarget์์ value์ ๊ฐ์ ๊ธฐ์กด ์ด๋ฆ ๊ทธ๋๋ก value ๋ผ๋ ๋ณ์๋ฅผ ๋ง๋  ๊ฒ
// const value = event.currentTarget.value;๋ ๋๊ฐ๋ค

// ๐จ ์์ฉ
// const value = event.currentTarget.value;
// const tagName = event.currentTarget.tagName;
// const width = event.currentTarget.width;
// const id = event.currentTarget.id;
// ์ด๊ฒ์ ๊ฐํธํ๊ฒ ์ธ ์ ์๋ค.

// cosnt {
  // currentTarget: { value, tagName, width, id }
// } = event;

// ์์ ๊ฐ์ ๊ฒฝ์ฐ์๋ event์ currentTarget์์ ์๋ ๊ฐ์ ๊ฐ์ ธ์์ผ๋์
// currentTarget:์ด ๋ถ์ ๊ฒ
// ๋ง์ฝ์ event์์ ์๋ ์์ฑ๋ง ๊ฐ์ ธ์ ๋ณ์๋ฅผ ๋ง๋ค๋ ค๊ณ  ํ๋ค๋ฉด
// const {x, y} = event;
// const x = event.x;
// const y = event.y;