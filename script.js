document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const visit = document.getElementById('visit').value;
    const opinion = document.getElementById('opinion').value;
    
    if (name && visit && opinion) {
        alert('Thank you for your submission, ' + name + '!');
    } else {
        alert('Please fill out all fields.');
    }
});
