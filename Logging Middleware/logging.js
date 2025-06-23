// logger.js
const fetch = require('node-fetch');

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDMxMjYwMjUwQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2MzkyOSwiaWF0IjoxNzUwNjYzMDI5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDFhNWIzZTQtY2M0Yy00ZGUxLTljNjEtZWI4MjQ1NmRjYTYzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYXJwaXQgbW9oYW5rYXIiLCJzdWIiOiI4ZjU4MTAwYS01MzQ4LTQxODItYjNiYi1jMGI5OWE3YmU3YTIifSwiZW1haWwiOiIyMjAzMDMxMjYwMjUwQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJhcnBpdCBtb2hhbmthciIsInJvbGxObyI6IjIyMDMwMzEyNjAyNTAiLCJhY2Nlc3NDb2RlIjoiVFJ6Z1dNIiwiY2xpZW50SUQiOiI4ZjU4MTAwYS01MzQ4LTQxODItYjNiYi1jMGI5OWE3YmU3YTIiLCJjbGllbnRTZWNyZXQiOiJuQ0hBRHFxa0V1Zm1DVHNSIn0.PgGAfYtiajA-qqJSBnMvmfLPBgUYirmSxL_Cwl5oa7s";
async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Logging failed:', error);
  }
}

module.exports = { Log };


// =================
// http://20.244.56.144/evaluation-service/register
// Request Body
// {"email": "2203031260250@paruluniversity.ac.in",
// "name": "Arpit Mohankar",
// "mobileNo":"9922529308",
// "githubUsername": "arpitmohankar",
// "rollNo": "2203031260250",
// "collegeName": "Parul University",
// "accessCode": "TRzgWM"
// }
// Response Body
// {
//     "email": "2203031260250@paruluniversity.ac.in",
//     "name": "arpit mohankar",
//     "rollNo": "2203031260250",
//     "accessCode": "TRzgWM",
//     "clientID": "8f58100a-5348-4182-b3bb-c0b99a7be7a2",
//     "clientSecret": "nCHADqqkEufmCTsR"
// }
// ------------------------------
// http://20.244.56.144/evaluation-service/auth
// Request Body
// {
//     "email": "2203031260250@paruluniversity.ac.in",
//     "name": "arpit mohankar",
//     "rollNo": "2203031260250",
//     "accessCode": "TRzgWM",
//     "clientID": "8f58100a-5348-4182-b3bb-c0b99a7be7a2",
//     "clientSecret": "nCHADqqkEufmCTsR"
// }

// Response Body
// {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjAzMDMxMjYwMjUwQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc1MDY2MzkyOSwiaWF0IjoxNzUwNjYzMDI5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDFhNWIzZTQtY2M0Yy00ZGUxLTljNjEtZWI4MjQ1NmRjYTYzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYXJwaXQgbW9oYW5rYXIiLCJzdWIiOiI4ZjU4MTAwYS01MzQ4LTQxODItYjNiYi1jMGI5OWE3YmU3YTIifSwiZW1haWwiOiIyMjAzMDMxMjYwMjUwQHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJhcnBpdCBtb2hhbmthciIsInJvbGxObyI6IjIyMDMwMzEyNjAyNTAiLCJhY2Nlc3NDb2RlIjoiVFJ6Z1dNIiwiY2xpZW50SUQiOiI4ZjU4MTAwYS01MzQ4LTQxODItYjNiYi1jMGI5OWE3YmU3YTIiLCJjbGllbnRTZWNyZXQiOiJuQ0hBRHFxa0V1Zm1DVHNSIn0.PgGAfYtiajA-qqJSBnMvmfLPBgUYirmSxL_Cwl5oa7s",
//     "expires_in": 1750663929
// }