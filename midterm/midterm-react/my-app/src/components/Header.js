import React from 'react';

export const Header = () => {
    const headerStyle = {
        width: '100%',
        padding: '4%',
        backgroundImage: 'url("https://wallpapers.com/images/hd/gray-gradient-background-iusev9u2883edgkd.jpg")',
        color: "#000000",
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '0 0 10px #00ADB5, 0 0 20px #00ADB5, 0 0 30px #00ADB5', // เพิ่ม Neon Glow
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
      };

    return (
        <div style={headerStyle}>
        <h1 style={{
            color: '#fff',
            textShadow:
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
              fontWeight: 'bold',
              fontSize: '4rem',
            // ระยะห่างและสีของ Neon Glow
          }}>React With NodeJS</h1>
        </div>
    );
};
