console.log('it works');

const endpoint = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;

const addInput = document.querySelector('#add-new-topic');
const nextTopic = document.querySelector('.navigation');
const submitButton = document.querySelector('.submit-btn');

async function fetchTeaTopic() {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

    // populate tea topic 
async function populateTeaTopic() {
    const topics = await fetchTeaTopic();
        const html = topics.map(topic => {
            return `
                <img src="./images/archive.png" alt>
                <ul>
                    <li>${topic.title}</li>
                    <li><img src="./images/thumbs-up.png" alt>${topic.upvotes}</li>
                    <li><img src="./images/thumbs-down.png" alt>${topic.downvotes}</li>
                </ul>
        `;    
        }).join('');
        // console.log(html);
        nextTopic.innerHTML = html;
    }

    const addNewTopics = () => {
        const newHtml = `
            <img src="./images/archive.png" alt>
            <ul>
                <li>${addInput.value}</li>
                <li><img src="./images/thumbs-up.png" alt>0</li>
                <li><img src="./images/thumbs-down.png" alt>0</li>
            </ul>   
        `;
        console.log(newHtml);
        nextTopic.insertAdjacentHTML('afterbegin', newHtml);
    }

    submitButton.addEventListener('click', addNewTopics);

    populateTeaTopic();