console.log('it works');

const endpoint = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;

const addInput = document.querySelector('#add-new-topic');
const nextTopic = document.querySelector('.arc-navigation');
const submitButton = document.querySelector('.submit-btn');
const pastTopics = document.querySelector('.past-topic-navigation');


async function fetchTeaTopic() {
    const response = await fetch(endpoint);
    const data = await response.json();
    localStorage.setItem("teaTimeTopics", JSON.stringify(data));
    var item = JSON.parse(localStorage.getItem("people"));
    return data;
}

    // populate tea topic 
async function populateTeaTopic() {
    const topics = await fetchTeaTopic();
    const sortedScore = topics.sort((scoreA, scoreB) => scoreB.upvotes - scoreA.downvotes);
        const html = sortedScore.map(topic => {
            return `
                <ul data-discussed="${topic.discussedOn}">
                    <li class="archive-list"><button type="submit" class="archive-btn">ARC</button></li>
                    <li class="topicTitle">${topic.title}</li>
                    <span class="topicUpvotes">Upvotes: ${topic.upvotes}</span>
                    <span class="topicUownvotes">DownVotes: ${topic.downvotes}</span>
                </ul>
        `;    
        }).join('');
        // console.log(html);
        nextTopic.innerHTML = html;

        // topics.addEventListener('submit', e => {
        //     e.preventDefault();
        //     topic.title = topics.topicTitle.textContent;
        //     topic.upvotes = topics.topicUpvotes.textContent;
        //     topic.downvotes = topics.topicUownvotes.textContent;
        //     populateTeaTopic(topic);
        // }, { once: true });
        // document.body.appendChild('html');
    }
    const addNewTopics = () => {
        const newHtml = `
            <ul>
                <li><button type="button" class="archive-btn">ARC</button></li>
                <li>${addInput.value}</li>
                <span>UpVotes: 0</span>
                <span>DownVotes: 0</span>
            </ul>   
        `;
        console.log(newHtml);
        nextTopic.insertAdjacentHTML('afterbegin', newHtml);
    }

    let topicsList = [];
    const addTopic = (e) => {
        e.preventDefault();
        const element = e.target;
        const newElement = {
            id: new Date,
            upvotes: element.upvotes.textContent,
            title: element.title.textContent,
            downvotes: element.downvotes.textContent,
            discussedOn: discussedOn.textContent,
        }
        topicsList.push(newElement);
        newElement.reset();
        nextTopic.dispatchEvent( new CustomEvent('updatedTopics'));
    }

    // const initLocalStorage = () => {
    //     const localString = localStorage.getItem("topics");
    //     const lists = JSON.parse(localString);
    //     if(lists) {
    //         topicsList = lists;
    //     } else {
    //         topicsList = topics;
    //     }
    //     populateTeaTopic(topics);
    //     updateLocalStorage(); 
    // }
    // const updateLocalStorage = () => {
    //     localStorage.setItem(topics, JSON.stringify(data));
    // }

    // nextTopic.addEventListener('click', addArchive);
    submitButton.addEventListener('click', addNewTopics);
    nextTopic.addEventListener('submit', addNewTopics);

    populateTeaTopic();

    // initLocalStorage();