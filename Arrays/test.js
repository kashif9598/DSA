function extractDomains(emails){
    return emails.map(mail => {
        return mail.split("@")[1];
    })
}

let mail = ['kashifsheikh9598@gmail.com', 'test123@hotmail.com', 'xyz123@yahoo.com','rashina46@gmail.com', 'test123@ey.in'];
const domains = extractDomains(mail);
console.log(domains.toString());

