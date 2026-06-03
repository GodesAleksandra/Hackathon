const pets = [
    {
        id: 1,
        name: 'Victoria',
        owner: 'Yudha Cuglad',
        breed: 'Scottish Fold',
        pattern: 'tabby',
        color: ['white','brown (chocolate)'],
        image: 'pexels-yudha-cuglad-938325-32421280.jpg'
    },
    {
        id: 2,
        name: 'Bella',
        owner: 'Sergey Syomin',
        breed: 'Maine Coon',
        pattern: 'tabby',
        color: ['blue (grey)','cream'],
        image: 'pexels-3096301-5780939.jpg'
    },
    {
        id: 3,
        name: 'Lily',
        owner: 'Anna Kaharchuk',
        breed: 'Siamese',
        pattern: 'colorpoint',
        color: ['seal'],
        image: 'pexels-3885630-5780662.jpg'
    },
    {
        id: 4,
        name: 'Luna',
        owner: 'Marina Shishkina',
        breed: 'Burmese',
        pattern: 'solid',
        color: ['black'],
        image: 'pexels-140938577-10347798.jpg'
    },
    {
        id: 5,
        name: 'Chloe',
        owner: 'Kamren',
        breed: 'Ragdoll',
        pattern: 'calico',
        color: ['white','brown (chocolate)'],
        image: 'pexels-724211268-34479025.jpg'
    },
    {
        id: 6,
        name: 'Lucy',
        owner: 'Leopoldo_Corkery',
        breed: 'Persian',
        pattern: 'tabby',
        color: ['orange (red)'],
        image: 'pexels-abi-ikhwanurridlo-3385258-5380197.jpg'
    },
    {
        id: 7,
        name: 'Alice',
        owner: 'Elwyn.Skiles',
        breed: 'Siamese',
        pattern: 'mink',
        color: ['seal'],
        image: 'pexels-anilkarakaya-14017008.jpg'
    },
    {
        id: 8,
        name: 'Sophie',
        owner: 'Maxime_Nienow',
        breed: 'Devon Rex',
        pattern: 'solid',
        color: ['cream'],
        image: 'pexels-chen-edison-2155188199-37390945.jpg'
    },
    {
        id: 9,
        name: 'Duchess',
        owner: 'Claudia Schmalz',
        breed: 'Persian',
        pattern: 'chinchilla',
        color: ['white'],
        image:'pexels-claudia-schmalz-3928374-14803378.jpg'
    },
    {
        id: 10,
        name: 'Penelope',
        owner: 'Dagmara Dombrovska',
        breed: 'Siamese',
        pattern: 'colorpoint',
        color: ['seal'],
        image:'pexels-dagmara-dombrovska-22732579-7696348.jpg'
    },
    {
        id: 11,
        name: 'Garfield',
        owner: 'Diana King',
        breed: 'No breed specified',
        pattern: 'tabby',
        color: ['brown (chocolate)'],
        image:'pexels-fox-58267-37385907.jpg'
    },
    {
        id: 12,
        name: 'Felix',
        owner: 'Helena Jankovicova',
        breed: 'Bengal',
        pattern: 'tabby',
        color: ['silver'],
        image:'pexels-helen1-20211114.jpg'
    },
    {
        id: 13,
        name: 'Bucky',
        owner: 'Jerry',
        breed: 'Bengal',
        pattern: 'tabby',
        color: ['brown (chocolate)'],
        image:'pexels-jerry-2334361-16761418.jpg'
    },
    {
        id: 14,
        name: 'Thomas',
        owner: 'Aleks Kovacevic',
        breed: 'Sphynx',
        pattern: 'solid',
        color: ['blue (grey)'],
        image:'pexels-koolshooters-7680670.jpg'
    },
    {
        id: 15,
        name: 'Oliver',
        owner: 'Nika George',
        breed: 'Sphynx',
        pattern: 'solid',
        color: ['blue (grey)'],
        image:'pexels-koolshooters-7680672.jpg'
    },
    {
        id: 16,
        name: 'Max',
        owner: 'leonardo De Oliveira',
        breed: 'Himalayan',
        pattern: 'colorpoint',
        color: ['seal'],
        image:'pexels-leonardo-de-oliveira-872270-2499282.jpg'
    },
    {
        id: 17,
        name: 'Charlie',
        owner: 'Natalia Sevruk',
        breed: 'Siamese',
        pattern: 'colorpoint',
        color: ['seal'],
        image:'pexels-natalia-sevruk-636238602-33202410.jpg'
    },
    {
        id: 18,
        name: 'Leo',
        owner: 'Nicohonasan',
        breed: 'Persian',
        pattern: 'tuxedo',
        color: ['orange (red)', 'white'],
        image:'pexels-nicohonasan-37671114.jpg'
    },
    {
        id: 19,
        name: 'Milo',
        owner: 'Nika Benedictova',
        breed: 'Bengal',
        pattern: 'tabby',
        color: ['brown (chocolate)'],
        image:'pexels-nika-benedictova-24565203-15802496.jpg'
    },
    {
        id: 20,
        name: 'Winston',
        owner: 'Natalya Fox',
        breed: 'Scottish Fold',
        pattern: 'tabby',
        color: ['blue (grey)'],
        image:'pexels-pet-foto-644780685-17685206.jpg'
    },
    {
        id: 21,
        name: 'Arthur',
        owner: 'John Stanton',
        breed: 'Sphynx',
        pattern: 'colorpoint',
        color: ['seal'],
        image:'pexels-pexels-user-399617868-17191487.jpg'
    },
    {
        id: 22,
        name: 'Henry',
        owner: 'Rain Lu',
        breed: 'Ragdoll',
        pattern: 'calico',
        color: ['white','brown (chocolate)'],
        image:'pexels-rain-lu-452606747-29903738.jpg'
    },
    {
        id: 23,
        name: 'Baxter',
        owner: 'Anna Black',
        breed: 'Persian',
        pattern: 'cap-and-saddle',
        color: ['white'],
        image:'pexels-shootsaga-30689866.jpg'
    },
    {
        id: 24,
        name: 'Duke',
        owner: 'Sofie Witters',
        breed: 'Scottish Fold',
        pattern: 'smoke',
        color: ['blue (grey)'],
        image:'pexels-sofie-witters-248577-16579458.jpg'
    }
];

let classifier;
let patterns = ['no pattern specified', 'solid', 'bicolor', 'tabby', 'tortoiseshell', 'calico', 'colorpoint', 'mink', 'sepia', 'smoke', 'shaded', 'chinchilla'];
let colors = ['no color specified', 'white', 'black', 'blue (grey)', 'brown (chocolate)', 'silver', 'golden', 'cream', 'fawn', 'isabella', 'seal', 'sable (dark brown)', 'champagne (warm beige)', 'platinum (pale grey-lavender)', 'lilac', 'cinnamon', 'orange (red)'];

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
        
        document.querySelectorAll('.pet').forEach(el => el.remove());    
    
        const petsFiltArr = pets.filter(pet => {
            const filtLabel = label.toLowerCase().replace('cat','').replaceAll(' ', '').split(',');
            const matchesPrediction = filtLabel.includes(pet.breed.toLowerCase()) || filtLabel.includes(pet.pattern.toLowerCase());
            
            return matchesPrediction;
        });

        displayPets(petsFiltArr);
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

const patternSelect = document.getElementById("pattern");
const colorSelect = document.getElementById("color");
const breedSelect = document.getElementById("breed");

patternSelect.addEventListener("change", filterData);
colorSelect.addEventListener("change", filterData);
breedSelect.addEventListener("change", filterData);

function filterData() {
    document.querySelectorAll('.pet').forEach(el => el.remove());
    
    const selectedPattern = patternSelect.value;
    const selectedColor = colorSelect.value;
    const selectedBreed = breedSelect.value;

    const petsFiltArr = pets.filter(pet => {
    const matchesPattern = selectedPattern === "no pattern specified" || pet.pattern === selectedPattern;
    const matchesColor = selectedColor === "no color specified" || pet.color.includes(selectedColor);
    const matchesBreed = selectedBreed === "no_breed" || pet.breed === selectedBreed;

    return matchesPattern && matchesColor && matchesBreed;
  });

  displayPets(petsFiltArr);
}

function createPet(id) {
    let pet = document.createElement("div");
    pet.classList.add("pet");
    pet.setAttribute('id', id);
    //pet.style.backgroundImage = "url('pet_pattern.jpg')";
    pet.style.backgroundColor = "rgba(16, 186, 209, 0.6)";
    pet.style.backgroundSize = "100% auto"; 
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
        createTextElement(pet.breed, pet.id, "20px", "normal");
        createTextElement(pet.pattern + " " + pet.color.join(" "), pet.id, "20px", "normal");
        createTextElement(pet.owner, pet.id, "16px", "normal");     });
}

window.onload = async (e) => {
    try {
        e.preventDefault();
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": "live_zLAE9dSElFBdN4qmC0wh8w56zbTwxOpN0eCvMn95xbSF8dfmiWFYXLz0TyZkV1s8"
        });

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        let catsUrl = 'https://api.thecatapi.com/v1/breeds';
        const response = await fetch(catsUrl, requestOptions);
        if (!response.ok) {
            throw new Error("Something went wrong");
        } else {
            let div_pet, img;
            let pets = await response.json();
            const select = document.getElementById('breed');
            for (const pet of pets) {
                const opt = document.createElement('option');
                opt.value = pet.name;
                opt.textContent = pet.name;
                select.appendChild(opt);
            }
                const opt = document.createElement('option');
                opt.value = 'no_breed';
                opt.textContent = 'no breed specified';
                opt.defaultSelected = true;
                select.appendChild(opt);

        }
    } catch (err) {
        console.log("In the catch ", err);
    }
}

function displayOptionsFilt() {
    const select_pattern = document.getElementById('pattern');
    for (const pattern of patterns) {
        const opt = document.createElement('option');
        opt.textContent = pattern;
        select_pattern.appendChild(opt);
    }
    
    const select_color = document.getElementById('color');
    for (const color of colors) {
        const opt = document.createElement('option');
        opt.textContent = color;
        select_color.appendChild(opt);
    }
}

displayOptionsFilt();
displayPets(pets);