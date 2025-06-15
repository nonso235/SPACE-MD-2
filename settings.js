require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAJWz1oo8OWCVQQAAHMHAAAKAAAAY3JlZHMuanNvbpVUa4+iSBT9L*VVM*ISxKSTRaABFUERX5v5UEIBJY+ioUBx4n*fYE9PTzbZSS+fils395577jn1AxQE12iBOjD9AcoKt5Ci*ki7EoEpmDVRhCowBCGkEExBbvKt*MrZ7mx2WPrixA0Js0ZtmOHYJ7tImVspm5xtMTWuL+AxBGVzznDwh4LSxcpUXzt3WpBszckm1DJ3CdGM3WOdGS24cFY4Je9wgma9gEdfEeIKF7FeJihHFcwWqHMhrr4G316su+CmpmXqYcekaDE4hoqT3zn11O0nKmdwxFycnUhn*a*Bd7R2Z*hedWk4Q3EXzka5JNbd8Qhk5wjzG24lZ3SkDMjr8R1+jeMChVaICopp92Xekeun97Et05I47Ti7z8hYXZ22E59bFsiQtmJatpo82gqm8jXgyehizpW3m3aLt2rIyJvNzLTtjdy9RXJhLN1RbrlNluiQt38H7lYfWkn*D++pFtLTfTkR8vC6TxmTMZ2gFq1BbAlX8coQL18cL9n53OzI1+AfkkKkNnbv7UFn7F1x5rmbImnu4MQXa6ldS*PR6KDWkW2sP+FD2lR*QrkgdhvvmfNhZxLa7ZGdefpVKHOjOx74MXuQfPamrrRY4RlRrRbqhR6W6e1itYaf25PbfL*WERWkWjqqF9+uY+lQHFTl5TlRijorBFP2MQQVinFNK0gxKfoYN2aHAIath4IK0Se9QOOq18ZVoVh6jeZkorMu5jtmQT1sXeLZRVLwtXWYhPHemBcwBGVFAlTXKDRxTUnV2aiuYYxqMP37+xAU6EbfF9e349khiHBVU79oyozA8GOrH5cwCEhTUK8rArU*oApMmc8wohQXcd3z2BSwChLcIjWBtAbTCGY1+jUhqlAIprRq0C*XqiTsiX9djz1XU45gCPLnQnAIpoDjhQnLy2N5Ik*GU4n*q*527evCsvxWIAqGIHvmSRIniqIgcoI8Hk*6xD7++IWwLxgiCnFWgylQl3DQOKmur*h5U1uGoeixosYK+JzoQxrv1N+IpwYXV4Oj9rDYrG3LHxc8MsZesp+*bTKeyY7rI7e96Pcn9f8uAqbgahQ7HVapoIUjdhknNyUc1JdlRmunfOvW4ltuOWzovg6UbXNYKn4C16ninpP4at6OMRncM02zN3Rs35mZ56LsVi2X2vWl7xaiFgfo92aR5aWDhCu427LNLmyw3cizuJKcEw3cMIr83diUeKbM9azzl2zWKWuBLLQsED3*tNp3ESGxdk*xrj4LK84wDbMhthq*i*ZpmuznY4Wfcup31f9GGD29X8B+g1*Y3TvyXmPMY*hbkZ*PyX9YchZAPS6s+5VrJbZLfU19dU4ynzQ+2WGYnkJ5vteNVSrcbBk8Ht+HoMwgjUiVgymARVgRHIIhqEjTi9YqIvKHZqriWx9+zWBNlU8jbHGOagrzEkxZSZDliSBM2PcstyKlCeukZ8EQlLzpVd0pZelRSD98BZT+W3ECePwDUEsBAhQDFAAACAgAAlbPWijw5YJVBAAAcwcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '2348139598985',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
