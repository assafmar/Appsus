
const emailText = 'lorem ipsum is the best way to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, praesentium, nobis repellat perspiciatis quidem ex voluptatem eaque magni hic. Reprehenderit architecto, inventore dolore dicta. Possimus praesentium est quaerat ducimus nam.';
 
const emails = [
    
    {date: Date.now(), id: 0, from: 'baba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello b!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 1, from: 'caba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello c!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 2, from: 'daba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello d!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 3, from: 'eaba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello e!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 4, from: 'faba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello f!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 5, from: 'gaba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello g!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 6, from: 'haba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello h!', text: emailText, flag: '', category: ''},
    {date: Date.now(), id: 7, from: 'iaba@example.com', to: 'tuki@example.com', isRead: false, subject: 'hello i!', text: emailText, flag: '', category: ''},   
]

function fetchEmails(){
return emails;

}


export default {
    fetchEmails
}
