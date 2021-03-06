import React from 'react';
const Home = () => {
  return (
    <>
      <div className="container">
        <button className="btn-1">방장하기</button>
        <button className="btn-2">들어가기</button>
      </div>
      <style jsx global>
        {`
          body {
            background: #2ecc71;
            font-size: 62.5%;
          }

          .container {
            padding: 2em;
          }

          /* GENERAL BUTTON STYLING */
          button,
          button::after {
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }

          button {
            background: none;
            border: 3px solid #fff;
            border-radius: 5px;
            color: #fff;
            display: block;
            font-size: 1.6em;
            font-weight: bold;
            margin: 1em auto;
            padding: 2em 6em;
            position: relative;
            text-transform: uppercase;
          }

          button::before,
          button::after {
            background: #fff;
            content: '';
            position: absolute;
            z-index: -1;
          }

          button:hover {
            color: #2ecc71;
          }

          /* BUTTON 1 */
          .btn-1::after {
            height: 0;
            left: 0;
            top: 0;
            width: 100%;
          }

          .btn-1:hover:after {
            height: 100%;
          }

          /* BUTTON 2 */
          .btn-2::after {
            height: 100%;
            left: 0;
            top: 0;
            width: 0;
          }

          .btn-2:hover:after {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Home;
