const axios = require('axios');

async function register() {
    const registerUrl = 'http://20.244.56.144/evaluation-service/register';
    const registerBody = {
        email: "2203031260250@paruluniversity.ac.in",
        name: "Arpit Mohankar",
        mobileNo: "9922529308",
        githubUsername: "arpitmohankar",
        rollNo: "2203031260250",
        collegeName: "Parul University",
        accessCode: "TRzgWM"
    };

    const response = await axios.post(registerUrl, registerBody);
    return response.data;
}

async function authenticate(authBody) {
    const authUrl = 'http://20.244.56.144/evaluation-service/auth';
    const response = await axios.post(authUrl, authBody);
    return response.data;
}


(async () => {
    try {
        const registerData = await register();
        console.log('Register Response:', registerData);

        const authBody = {
            email: registerData.email,
            name: registerData.name,
            rollNo: registerData.rollNo,
            accessCode: registerData.accessCode,
            clientID: registerData.clientID,
            clientSecret: registerData.clientSecret
        };

        const authData = await authenticate(authBody);
        console.log('Auth Response:', authData);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
})();