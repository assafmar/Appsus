import emailData from './emailData.service';

let emails = [];   //-------> DB


//function getEmails(){
  const getEmails = () => {
return new Promise(resolve => {
    // simple caching mechanism
    if (emails.length) {
      resolve(emails);
    }
    else {
      setTimeout(() => {
        emails = emailData.fetchEmails();
        console.log("get emails fetch from emailDate:",emails);
        resolve(emails);
      }, 500);
    }
  });
}



function getEmailById(emailId){
  return getEmails().then(emails => {
    const email = emails.find(email => emailId === email.id);
    return email;
  });
}

function updateEmailDb(updatedEmails){
//TBD later (on server)
}

function deleteEmail(email){ 
    // /// improve:
    // (1) delete just from inbox or just from sent 
    // (2)update in server and then bust cache
  console.log('Deleting the Email:', email)
  var idx = email.indexOf(email)
  emails.splice(idx, 1);
}

function getNext(email) { /// TBD later (low priority)
    // select next in a cyclic way
    var idx = emails.indexOf(email);
    return (idx < emails.length-1)?
          emails[idx+1] : emails[0];
}

function sendEmail(email){
    var emailWithControls = email;
    emailWithControls.id=getUniqueId();;
    emailWithControls.date = Date.now();
    emailWithControls.isRead = false;
    emailWithControls.category = {sent:true,inbox:true};
    emails.push(emailWithControls);
    console.log('saved');
  }

function getUniqueId(){
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
}  

function changeEmailIsRead(email,value){
 console.log('Changing email isRead to:', value)
  var idx = email.indexOf(email)
  emails[idx].isRead=value;
}

function changeEmailCategory(email,key,value){ // {inbox:true, sent:true}
 console.log('Changing email Category to:', value)
  var idx = email.indexOf(email)
  emails[idx].category.key=value;
}


export default {
    getEmails,
    updateEmailDb,
    deleteEmail,
    sendEmail,
    changeEmailIsRead,
    changeEmailCategory
}