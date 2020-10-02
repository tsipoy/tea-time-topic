console.log('it works');

const endpoint = 'https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json';

const addInput = document.querySelector('#add-new-topic');
const nextTopic = document.querySelector('.next-topic');

async function fetchTopics() {
    let response = await fetch(endpoint);
    const data = await response.json;
    console.log(data);

    
}

fetchTopics();