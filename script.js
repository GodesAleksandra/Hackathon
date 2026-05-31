const pets = [
    {
        id: 1,
        name: 'Victoria',
        owner: 'Yudha Cuglad',
        image: 'pexels-yudha-cuglad-938325-32421280.jpg'
    },
    {
        id: 2,
        name: 'Bella',
        owner: 'Sergey Syomin',
        image: 'pexels-3096301-5780939.jpg'
    },
    {
        id: 3,
        name: 'Lily',
        owner: 'Anna Kaharchuk',
        image: 'pexels-3885630-5780662.jpg'
    },
    {
        id: 4,
        name: 'Luna',
        owner: 'Marina Shishkina',
        image: 'pexels-140938577-10347798.jpg'
    },
    {
        id: 5,
        name: 'Chloe',
        owner: 'Kamren',
        image: 'pexels-724211268-34479025.jpg'
    },
    {
        id: 6,
        name: 'Lucy',
        owner: 'Leopoldo_Corkery',
        image: 'pexels-abi-ikhwanurridlo-3385258-5380197.jpg'
    },
    {
        id: 7,
        name: 'Alice',
        owner: 'Elwyn.Skiles',
        image: 'pexels-anilkarakaya-14017008.jpg'
    },
    {
        id: 8,
        name: 'Sophie',
        owner: 'Maxime_Nienow',
        image: 'pexels-chen-edison-2155188199-37390945.jpg'
    },
    {
        id: 9,
        name: 'Duchess',
        owner: 'Claudia Schmalz',
        image:'pexels-claudia-schmalz-3928374-14803378.jpg'
    },
    {
        id: 10,
        name: 'Penelope',
        owner: 'Dagmara Dombrovska',
        image:'pexels-dagmara-dombrovska-22732579-7696348.jpg'
    },
    {
        id: 11,
        name: 'Garfield',
        owner: 'Diana King',
        image:'pexels-fox-58267-37385907.jpg'
    },
    {
        id: 12,
        name: 'Felix',
        owner: 'Helena Jankovicova',
        image:'pexels-helen1-20211114.jpg'
    },
    {
        id: 13,
        name: 'Bucky',
        owner: 'Jerry',
        image:'pexels-jerry-2334361-16761418.jpg'
    },
    {
        id: 14,
        name: 'Thomas',
        owner: 'Aleks Kovacevic',
        image:'pexels-koolshooters-7680670.jpg'
    },
    {
        id: 15,
        name: 'Oliver',
        owner: 'Nika George',
        image:'pexels-koolshooters-7680672.jpg'
    },
    {
        id: 16,
        name: 'Max',
        owner: 'leonardo De Oliveira',
        image:'pexels-leonardo-de-oliveira-872270-2499282.jpg'
    },
    {
        id: 17,
        name: 'Charlie',
        owner: 'Natalia Sevruk',
        image:'pexels-natalia-sevruk-636238602-33202410.jpg'
    },
    {
        id: 18,
        name: 'Leo',
        owner: 'Nicohonasan',
        image:'pexels-nicohonasan-37671114.jpg'
    },
    {
        id: 19,
        name: 'Milo',
        owner: 'Nika Benedictova',
        image:'pexels-nika-benedictova-24565203-15802496.jpg'
    },
    {
        id: 20,
        name: 'Winston',
        owner: 'Natalya Fox',
        image:'pexels-pet-foto-644780685-17685206.jpg'
    },
    {
        id: 21,
        name: 'Arthur',
        owner: 'John Stanton',
        image:'pexels-pexels-user-399617868-17191487.jpg'
    },
    {
        id: 22,
        name: 'Henry',
        owner: 'Rain Lu',
        image:'pexels-rain-lu-452606747-29903738.jpg'
    },
    {
        id: 23,
        name: 'Baxter',
        owner: 'Anna Black',
        image:'pexels-shootsaga-30689866.jpg'
    },
    {
        id: 24,
        name: 'Duke',
        owner: 'Sofie Witters',
        image:'pexels-sofie-witters-248577-16579458.jpg'
    }
];

let classifier;

async function init() {
    // 1. Await the classifier model loading
    classifier = await ml5.imageClassifier('MobileNet');
    //document.getElementById('result').innerText = "Model loaded! Please upload an image.";
}

async function classifyImage(imageElement) {
    try {
        // 2. Await classification results
        const results = await classifier.classify(imageElement);
        
        // 3. Display the top result
        const label = results[0].label;
        const confidence = (results[0].confidence * 100).toFixed(2);
        document.getElementById('result').innerText = 
            `Prediction: ${label} (${confidence}% confidence)`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = "Classification failed.";
    }
}

document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('inputImage');
            img.src = e.target.result;
            img.style.display = 'block';
            
            // Wait for the image to load before classifying
            img.onload = async function() {
                document.getElementById('result').innerText = "Classifying...";
                await classifyImage(img);
            }
        }
        reader.readAsDataURL(file);
    }
});

// Initialize the model on page load
init();

const pets_container = document.getElementById("pets-container");

const input = document.getElementById("search");
input.addEventListener("input", (event) => {
    document.querySelectorAll('.pet').forEach(el => el.remove());
    let petsFiltArr = pets.filter(pet => pet.name.toLowerCase().includes(event.target.value.toLowerCase()));
    //console.log(petsFiltArr);
    displayPets(petsFiltArr);
});

function createPet(id) {
    let pet = document.createElement("div");
    pet.classList.add("pet");
    pet.setAttribute('id', id);
    pet.style.backgroundImage = "url('card-pattern.png')";
    pet.style.backgroundColor = "#2ED1CC";
    pets_container.appendChild(pet);
}

function createTextElement(text, id, font_size, font_weight) {
    const p = document.createElement("p");
    p.textContent = text;
    p.style.fontSize = font_size;
    p.style.fontWeight  = font_weight;
    p.style.lineHeight = "0.1";
    document.getElementById(id).appendChild(p);
}

function displayPets(petsArr = pets) {
    let div_pet, img;
    petsArr.forEach(pet => {
        createPet(pet.id);
        div_pet = document.getElementById(pet.id);
        img = document.createElement('img');
        img.src = pet.image;
        img.width = 200;
        img.classList.add('rounded-border');
        div_pet.appendChild(img);
        createTextElement(pet.name, pet.id, "20px", "bold");
        createTextElement(pet.owner, pet.id, "16px", "normal");     });
}

displayPets();