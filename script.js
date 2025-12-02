const quizQuestions = [
            {
                question: "Какого вы пола?",
                options: [
                    { text: "Мужчина", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 7, "Baccarat Rouge 540": 7, "Kirke": 7, "Narciso Poudrée": 0, "Replica Jazz Club": 7, "Gypsy Water": 7, "Cocaine": 7, "Lady Vengeance": 0, "Santal": 7 } },
                    { text: "Женщина", scores: { "Good Girl Gone Bad": 7, "Lost Cherry": 7, "Baccarat Rouge 540": 7, "Kirke": 7, "Narciso Poudrée": 7, "Replica Jazz Club": 0, "Gypsy Water": 7, "Cocaine": 0, "Lady Vengeance": 7, "Santal": 7 } },
                    { text: "Не хочу чтобы это влияло на результат (будьте готовы к описанию для определенного пола)", scores: { "Good Girl Gone Bad": 7, "Lost Cherry": 7, "Baccarat Rouge 540": 7, "Kirke": 7, "Narciso Poudrée": 7, "Replica Jazz Club": 7, "Gypsy Water": 7, "Cocaine": 7, "Lady Vengeance": 7, "Santal": 7 } }
                ]
            },
            {
                question: "Как бы вы описали свою идеальную атмосферу для отдыха?",
                options: [
                    { text: "Уединённый домик в сосновом лесу", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 1 } },
                    { text: "Горячая ванна с пеной", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 1, "Kirke": 0, "Narciso Poudrée": 1, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Шумный лаунж-бар с живой музыкой", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 1, "Gypsy Water": 0, "Cocaine": 1, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Пляж на закате", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 1, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 1, "Santal": 0 } },
                    { text: "Вечеринка с коктейлями и караоке", scores: { "Good Girl Gone Bad": 1, "Lost Cherry": 1, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } }
                ]
            },
            {
                question: "Какое событие вы представляете, когда думаете о своём аромате?",
                options: [
                    { text: "Романтическое свидание", scores: { "Good Girl Gone Bad": 1, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 1, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Творческий рабочий процесс", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 1, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 1 } },
                    { text: "Важная деловая встреча", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 1, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 1, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Утро выходного дня", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 1, "Santal": 0 } },
                    { text: "Ночь в клубе с друзьями", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 1, "Baccarat Rouge 540": 0, "Kirke": 1, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } }
                ]
            },
            {
                question: "Какое из этих качеств у вас наиболее выражено?",
                options: [
                    { text: "Чувство юмора", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 1, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 1 } },
                    { text: "Целеустремленность", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 1, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Дружелюбие", scores: { "Good Girl Gone Bad": 1, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 1, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Свободолюбие", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 1, "Santal": 0 } },
                    { text: "Сценичность", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 1, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 1, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } }
                ]
            },
            {
                question: "Одежда какого цвета преобладает в вашем гардеробе?",
                options: [
                    { text: "Нейтральные оттенки(белый, черный, бежевый, серый)", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 1, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Темные цвета", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 1, "Lady Vengeance": 1, "Santal": 0 } },
                    { text: "Светлые оттенки", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 1, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 1 } },
                    { text: "Яркие цвета", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 1, "Baccarat Rouge 540": 0, "Kirke": 1, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } },
                    { text: "Не отдаю предпочтения какой-либо определенной гамме", scores: { "Good Girl Gone Bad": 1, "Lost Cherry": 0, "Baccarat Rouge 540": 0, "Kirke": 0, "Narciso Poudrée": 0, "Replica Jazz Club": 1, "Gypsy Water": 0, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } }
                ]
            },
            {
                question: "Искусство",
                options: [
                    { text: "В одном миге", scores: { "Good Girl Gone Bad": 0, "Lost Cherry": 1, "Baccarat Rouge 540": 0, "Kirke": 1, "Narciso Poudrée": 0, "Replica Jazz Club": 0, "Gypsy Water": 0, "Cocaine": 1, "Lady Vengeance": 1, "Santal": 1 } },
                    { text: "В бесконечности", scores: { "Good Girl Gone Bad": 1, "Lost Cherry": 0, "Baccarat Rouge 540": 1, "Kirke": 0, "Narciso Poudrée": 1, "Replica Jazz Club": 1, "Gypsy Water": 1, "Cocaine": 0, "Lady Vengeance": 0, "Santal": 0 } }
                ]
            }
        ];

        const results = {
            "Good Girl Gone Bad": {
                title: "Good Girl Gone Bad by Kilian",
                description: "Искушение в цветах иланг-иланга и жасмина. Для той, кто играет в двойственность. Её внешняя элегантность - лишь прикрытие для внутренней дерзости. Восхитительная провокаторша, которая знает, что один шип у розы всё-таки остался.<br><a href=\"p1.html\">Узнать больше!</a>",
                image: "p1.png"
            },
            "Lost Cherry": {
                title: "Lost Cherry by Tom Ford",
                description: "Греховная вишня, роза и чувственная пачуля. Для того, кто обожает быть в центре внимания и знает, как соблазнить с первого взгляда. Сочная вишня, миндаль и лёгкая ваниль — это аромат-праздник, сладкий, игривый и бесконечно обаятельный.<br><a href=\"p2.html\">Узнать больше!</a>",
                image: "p2.png"
            },
            "Baccarat Rouge 540": {
                title: "Baccarat Rouge 540 by Maison Francis Kurkdjian",
                description: "Драгоценное сияние шафрана и амбры. Для человека, который стремится к роскоши и исключительности. Этот аромат — как дорогой аксессуар, который сразу выдаёт безупречный вкус.<br><a href=\"p3.html\">Узнать больше!</a>",
                image: "p3.png"
            },
            "Kirke": {
                title: "Kirke by Tiziana Terenzi",
                description: "Сочный персик и тропические цветы, пьянящий коктейль. Для жизнелюбивого гедониста. Это взрыв спелого персика, тропических цветов и сладкого мускуса - как летний праздник, который никогда не кончается. Аромат безудержной радости и чувственности.<br><a href=\"p4.html\">Узнать больше!</a>",
                image: "p4.png"
            },
            "Narciso Poudrée": {
                title: "Narciso Poudrée by Narciso Rodriguez",
                description: "Нежный мускус в облаке цветочной пудры. Для женщины с безупречной внутренней архитектурой. Её сила - в спокойной уверенности, а не в громких заявлениях. Мягкий, пудровый мускус, обёрнутый в кремовую розу. Изысканность как данность.<br><a href=\"p5.html\">Узнать больше!</a>",
                image: "p5.png"
            },
            "Replica Jazz Club": {
                title: "Replica Jazz Club by Maison Margiela",
                description: "Табачный ром, кожа и атмосфера джаз-бара. Для ночного меланхолика и эстета. Тот, кто находит поэзию в полумраке баров, звуке саксофона и вкусе выдержанного рома. Это аура ночной романтики и мужского братства.<br><a href=\"p6.html\">Узнать больше!</a>",
                image: "p6.png"
            },
            "Gypsy Water": {
                title: "Gypsy Water by Byredo",
                description: "Свобода соснового леса, костра и ванили. Для свободного духом кочевника. Им не нужны адреса, только состояния: хвойный лес, костер, свобода. Это аромат для тех, чей дом - дорога, а главная ценность - внутренняя независимость.<br><a href=\"p7.html\">Узнать больше!</a>",
                image: "p7.png"
            },
            "Cocaine": {
                title: "Cocaine by Nasomatto",
                description: "Ледяной перец, мята и эвкалипт, острый холодок. Для нарциссичного перфекциониста на грани гения и безумия. Он одержим своей идеей, резок, амбициозен и заряжен чистой энергией. Это аромат-провокация, триггер и топливо для ума.<br><a href=\"p8.html\">Узнать больше!</a>",
                image: "p8.png"
            },
            "Lady Vengeance": {
                title: "Lady Vengeance by Juliette Has A Gun",
                description: "Роскошная роза на бархате пачули и ванили. Для роковой женщины нового поколения. Ее месть не в драмах, а в безупречной победе. Она современна, умна, решительна и носит бархатные перчатки. Ее оружие - холодная роза и непоколебимая воля.<br><a href=\"p9.html\">Узнать больше!</a>",
                image: "p9.png"
            },
            "Santal": {
                title: "Santal by Headspace",
                description: "Чистый, медитативный сандал и уютная древесина. Это минималистичный и современный парфюм для созерцательных натур, ценящих чистоту, пространство и глубину в каждой детали жизни.<br><a href=\"p10.html\">Узнать больше!</a>",
                image: "p10.png"
            }
        };

        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const progressBar = document.getElementById('progress-bar');
        const currentQuestionElement = document.getElementById('current-question');
        const totalQuestionsElement = document.getElementById('total-questions');
        const questionContainer = document.getElementById('question-container');
        const resultContainer = document.getElementById('result-container');
        const resultTitle = document.getElementById('result-title');
        const resultDescription = document.getElementById('result-description');
        const resultImage = document.getElementById('result-image'); 
        const restartBtn = document.getElementById('restart-btn');

        let currentQuestionIndex = 0;
        let userAnswers = Array(quizQuestions.length).fill(null);
        let userScores = {
            "Good Girl Gone Bad": 0,
            "Lost Cherry": 0,
            "Baccarat Rouge 540": 0,
            "Kirke": 0,
            "Narciso Poudrée": 0,
            "Replica Jazz Club": 0,
            "Gypsy Water": 0,
            "Cocaine": 0,
            "Lady Vengeance": 0,
            "Santal": 0
        };

        function initQuiz() {
            totalQuestionsElement.textContent = quizQuestions.length;
            loadQuestion(currentQuestionIndex);
            updateProgressBar();
        }

        function loadQuestion(index) {
            const question = quizQuestions[index];
            questionText.textContent = question.question;
            
            optionsContainer.innerHTML = '';
            currentQuestionElement.textContent = index + 1;
            
            question.options.forEach((option, optionIndex) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                if (userAnswers[index] === optionIndex) {
                    optionElement.classList.add('selected');
                }
                optionElement.textContent = option.text;
                
                optionElement.addEventListener('click', () => {
                    selectOption(index, optionIndex);
                });
                
                optionsContainer.appendChild(optionElement);
            });
            
            prevBtn.disabled = index === 0;
            nextBtn.disabled = userAnswers[index] === null;
            
            if (index === quizQuestions.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = userAnswers[index] !== null ? 'block' : 'none';
            } else {
                nextBtn.style.display = 'block';
                submitBtn.style.display = 'none';
            }
            
            updateProgressBar();
        }

        function selectOption(questionIndex, optionIndex) {
            userAnswers[questionIndex] = optionIndex;
            
            const options = document.querySelectorAll('.option');
            options.forEach((option, idx) => {
                if (idx === optionIndex) {
                    option.classList.add('selected');
                } else {
                    option.classList.remove('selected');
                }
            });
            
            nextBtn.disabled = false;
            
            if (currentQuestionIndex === quizQuestions.length - 1) {
                submitBtn.style.display = 'block';
            }
        }

        function updateProgressBar() {
            const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
            progressBar.style.width = `${progress}%`;
        }

        function calculateResult() {
            for (const character in userScores) {
                userScores[character] = 0;
            }
            
            userAnswers.forEach((answerIndex, questionIndex) => {
                if (answerIndex !== null) {
                    const option = quizQuestions[questionIndex].options[answerIndex];
                    for (const character in option.scores) {
                        userScores[character] += option.scores[character];
                    }
                }
            });
            
            let maxScore = -1;
            let resultCharacter = "";
            
            for (const character in userScores) {
                if (userScores[character] > maxScore) {
                    maxScore = userScores[character];
                    resultCharacter = character;
                }
            }
            
            return resultCharacter;
        }

        function showResult() {
            const resultCharacter = calculateResult();
            const result = results[resultCharacter];
            
            resultTitle.textContent = result.title;
            resultDescription.innerHTML = result.description;
            
            resultImage.src = result.image;
            resultImage.alt = result.title;
            
            questionContainer.style.display = 'none';
            resultContainer.style.display = 'block';
        }

        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = Array(quizQuestions.length).fill(null);
            
            for (const character in userScores) {
                userScores[character] = 0;
            }
            
            resultImage.src = "";
            
            questionContainer.style.display = 'block';
            resultContainer.style.display = 'none';
            
            loadQuestion(currentQuestionIndex);
        }

        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (userAnswers[currentQuestionIndex] !== null) {
                if (currentQuestionIndex < quizQuestions.length - 1) {
                    currentQuestionIndex++;
                    loadQuestion(currentQuestionIndex);
                }
            }
        });

        submitBtn.addEventListener('click', () => {
            if (userAnswers[currentQuestionIndex] !== null) {
                showResult();
            }
        });

        restartBtn.addEventListener('click', restartQuiz);

        initQuiz();