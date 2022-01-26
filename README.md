Your own text encryption server!

Steps to set up the text encryption server
1: Download Postman (https://www.postman.com/downloads/), you will use this software to send request to decrypt and encrypt messages
2: Run npm i fs express body-parser, these are all the required npm packages to use the text encryption server34: Run server.js in the main directory, this will start your server (it will be hosted off your local pc)

Encryption 
Pathway: encryptMessage
Body: {
    "message": "Message you want to encrypt",
    "key": The encryption key you want to use to encrypt the text, this should be an integer
}
Response: {
    "encryptedResponse": {
        "encryptedMessage": "Encrypted Message",
    }
}

Decryption
Pathway: decryptMessage
Body: {
    "message": "Encrypted Message", 
    "key": The encryption key that was used to encrypt the text, this should be an integer
}
Response" {
    "decryptedResponse": "Decrypted message"
}
