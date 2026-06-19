import { insertManyPhil } from "./db/apis/api.ts";

const samole = [
    {
        "philosopher": "Friedrich Nietzsche",
        "region": "German Modern",
        "frameworks": [
            "Amor Fati",
            "Will to Power",
            "Übermensch",
            "Active Nihilism"
        ],
        "topics": [
            "resilience",
            "burnout",
            "purpose",
            "self-doubt",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Jean-Paul Sartre",
        "region": "French Modern",
        "frameworks": [
            "Existential Dread",
            "Bad Faith",
            "Radical Freedom"
        ],
        "topics": [
            "anxiety",
            "procrastination",
            "purpose",
            "self-doubt",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Albert Camus",
        "region": "French Modern",
        "frameworks": [
            "The Absurd",
            "Sisyphian Defiance",
            "Philosophical Suicide"
        ],
        "topics": [
            "burnout",
            "backlog",
            "resilience",
            "purpose",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Arthur Schopenhauer",
        "region": "German Modern",
        "frameworks": [
            "Will to Live",
            "Aesthetic Contemplation",
            "Asceticism"
        ],
        "topics": [
            "anxiety",
            "distraction",
            "focus",
            "mock tests",
            "self-doubt"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Immanuel Kant",
        "region": "German Modern",
        "frameworks": [
            "Categorical Imperative",
            "Deontology",
            "Sapere Aude"
        ],
        "topics": [
            "discipline",
            "consistency",
            "procrastination",
            "revision",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "John Stuart Mill",
        "region": "British Modern",
        "frameworks": [
            "Utilitarian Calculus",
            "Harm Principle",
            "Higher Pleasures"
        ],
        "topics": [
            "deep work",
            "distraction",
            "focus",
            "backlog",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "William James",
        "region": "American Modern",
        "frameworks": [
            "Pragmatism",
            "Will to Believe",
            "Stream of Consciousness"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "focus",
            "mock tests",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Søren Kierkegaard",
        "region": "Danish Modern",
        "frameworks": [
            "Leap of Faith",
            "Anxiety of Freedom",
            "Knight of Faith"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "purpose",
            "procrastination",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Baruch Spinoza",
        "region": "Dutch Modern",
        "frameworks": [
            "Sub Specie Aeternitatis",
            "Conatus",
            "Intellectual Love of God"
        ],
        "topics": [
            "anxiety",
            "resilience",
            "focus",
            "burnout",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "René Descartes",
        "region": "French Modern",
        "frameworks": [
            "Methodological Skepticism",
            "Cogito Ergo Sum",
            "Cartesian Dualism"
        ],
        "topics": [
            "self-doubt",
            "revision",
            "deep work",
            "focus",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "David Hume",
        "region": "Scottish Modern",
        "frameworks": [
            "Bundle Theory",
            "Problem of Induction",
            "Mitigated Skepticism"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "mock tests",
            "revision",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Francis Bacon",
        "region": "British Modern",
        "frameworks": [
            "Idols of the Mind",
            "Empirical Method",
            "Scientia Potentia Est"
        ],
        "topics": [
            "distraction",
            "mock tests",
            "revision",
            "deep work",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "John Locke",
        "region": "British Modern",
        "frameworks": [
            "Tabula Rasa",
            "Empiricism",
            "Association of Ideas"
        ],
        "topics": [
            "backlog",
            "revision",
            "consistency",
            "focus",
            "deep work"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "G.W.F. Hegel",
        "region": "German Modern",
        "frameworks": [
            "Dialectical Triad",
            "Zeitgeist",
            "Master-Slave Dialectic"
        ],
        "topics": [
            "backlog",
            "resilience",
            "consistency",
            "purpose",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Karl Marx",
        "region": "German Modern",
        "frameworks": [
            "Historical Materialism",
            "Alienation",
            "Base and Superstructure"
        ],
        "topics": [
            "burnout",
            "purpose",
            "distraction",
            "consistency",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ralph Waldo Emerson",
        "region": "American Modern",
        "frameworks": [
            "Self-Reliance",
            "The Oversoul",
            "Transcendental Compensation"
        ],
        "topics": [
            "self-doubt",
            "purpose",
            "discipline",
            "anxiety",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Henry David Thoreau",
        "region": "American Modern",
        "frameworks": [
            "Deliberate Living",
            "Civil Disobedience",
            "Simplicity"
        ],
        "topics": [
            "distraction",
            "deep work",
            "focus",
            "burnout",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Martin Heidegger",
        "region": "German Modern",
        "frameworks": [
            "Dasein",
            "Authenticity",
            "Throwness"
        ],
        "topics": [
            "purpose",
            "procrastination",
            "distraction",
            "deep work",
            "anxiety"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Simone de Beauvoir",
        "region": "French Modern",
        "frameworks": [
            "Ethics of Ambiguity",
            "The Other",
            "Situation"
        ],
        "topics": [
            "self-doubt",
            "purpose",
            "anxiety",
            "resilience",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Thomas Hobbes",
        "region": "British Modern",
        "frameworks": [
            "Social Contract",
            "State of Nature",
            "Leviathan Discipline"
        ],
        "topics": [
            "discipline",
            "consistency",
            "procrastination",
            "distraction",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Miyamoto Musashi",
        "region": "Japanese",
        "frameworks": [
            "The Way of Alone",
            "No-Mind State",
            "Two Heavens as One",
            "Perception vs Sight"
        ],
        "topics": [
            "focus",
            "discipline",
            "resilience",
            "mock tests",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Dogen Zenji",
        "region": "Japanese",
        "frameworks": [
            "Just Sitting",
            "Oneness of Practice and Enlightenment",
            "Continuous Practice",
            "Time-Being"
        ],
        "topics": [
            "consistency",
            "deep work",
            "focus",
            "procrastination",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Takuan Soho",
        "region": "Japanese",
        "frameworks": [
            "Unfettered Mind",
            "No-Abode Mind",
            "Right Mind vs Wrong Mind"
        ],
        "topics": [
            "distraction",
            "anxiety",
            "focus",
            "mock tests",
            "self-doubt"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Yamamoto Tsunetomo",
        "region": "Japanese",
        "frameworks": [
            "The Way of the Samurai",
            "Daily Meditation on Death",
            "Single-Minded Devotion"
        ],
        "topics": [
            "discipline",
            "purpose",
            "resilience",
            "procrastination",
            "anxiety"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Nishida Kitaro",
        "region": "Japanese",
        "frameworks": [
            "Pure Experience",
            "Logic of Basho",
            "Absolute Contradictory Self-Identity"
        ],
        "topics": [
            "deep work",
            "self-doubt",
            "focus",
            "anxiety",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kukai",
        "region": "Japanese",
        "frameworks": [
            "Attaining Buddhahood in This Body",
            "Three Mysteries",
            "Esoteric Realization"
        ],
        "topics": [
            "purpose",
            "discipline",
            "deep work",
            "revision",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Hakuin Ekaku",
        "region": "Japanese",
        "frameworks": [
            "Sound of One Hand Clapping",
            "Great Doubt",
            "Meditation in the Midst of Activity"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "focus",
            "mock tests",
            "resilience"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Zeami Motokiyo",
        "region": "Japanese",
        "frameworks": [
            "Detached Gaze",
            "Mysterious Elegance",
            "The Moving Flower"
        ],
        "topics": [
            "mock tests",
            "revision",
            "consistency",
            "focus",
            "self-doubt"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Honen",
        "region": "Japanese",
        "frameworks": [
            "Exclusive Recitation",
            "Other-Power",
            "Single-Minded Reliance"
        ],
        "topics": [
            "anxiety",
            "consistency",
            "procrastination",
            "backlog",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Shinran",
        "region": "Japanese",
        "frameworks": [
            "Absolute Reliance",
            "Naturalness as Ultimate Reality",
            "True Entrusting Mind"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "burnout",
            "purpose",
            "resilience"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ishida Baigan",
        "region": "Japanese",
        "frameworks": [
            "Heart Governance",
            "Knowing One's Lot",
            "Sincerity in Duty"
        ],
        "topics": [
            "discipline",
            "consistency",
            "procrastination",
            "backlog",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ninomiya Sontoku",
        "region": "Japanese",
        "frameworks": [
            "Repayment of Virtue",
            "Returning Good for Good",
            "Thrift and Industry"
        ],
        "topics": [
            "backlog",
            "consistency",
            "discipline",
            "revision",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kaibara Ekiken",
        "region": "Japanese",
        "frameworks": [
            "Record of Great Doubts",
            "Nourishing Life",
            "Practical Rationalism"
        ],
        "topics": [
            "burnout",
            "revision",
            "deep work",
            "focus",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ogyu Sorai",
        "region": "Japanese",
        "frameworks": [
            "Study of Ancient Words",
            "The Way of the Early Kings",
            "Political Pragmatism"
        ],
        "topics": [
            "revision",
            "mock tests",
            "backlog",
            "discipline",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ito Jinsai",
        "region": "Japanese",
        "frameworks": [
            "Meaning of Ancient Terms",
            "Vital Force Cosmology",
            "Daily Moral Practice"
        ],
        "topics": [
            "consistency",
            "revision",
            "deep work",
            "focus",
            "procrastination"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Motoori Norinaga",
        "region": "Japanese",
        "frameworks": [
            "Pathos of Things",
            "The True Heart",
            "Indigenous Mind"
        ],
        "topics": [
            "anxiety",
            "burnout",
            "self-doubt",
            "purpose",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Tanabe Hajime",
        "region": "Japanese",
        "frameworks": [
            "Philosophy as Metanoetics",
            "Logic of the Species",
            "Absolute Self-Surrender"
        ],
        "topics": [
            "resilience",
            "self-doubt",
            "backlog",
            "mock tests",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Watsuji Tetsuro",
        "region": "Japanese",
        "frameworks": [
            "Climate and Culture Analysis",
            "Betweenness",
            "Spatiality of Human Existence"
        ],
        "topics": [
            "distraction",
            "focus",
            "consistency",
            "deep work",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Sen no Rikyu",
        "region": "Japanese",
        "frameworks": [
            "Rustic Simplicity",
            "Harmony, Respect, Purity, Tranquility",
            "One Time, One Meeting"
        ],
        "topics": [
            "focus",
            "distraction",
            "anxiety",
            "deep work",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Bankei Yotaku",
        "region": "Japanese",
        "frameworks": [
            "The Unborn Mind",
            "Abiding in the Unborn",
            "Direct Exchange"
        ],
        "topics": [
            "anxiety",
            "distraction",
            "focus",
            "procrastination",
            "self-doubt"
        ],
        "timesUsed": 0,
        "lastUsed": null
    }
    ,
    {
        "philosopher": "Confucius",
        "region": "Chinese",
        "frameworks": [
            "Ritual Propriety",
            "Filial Piety",
            "Cultivation of Virtue",
            "The Golden Rule"
        ],
        "topics": [
            "discipline",
            "consistency",
            "purpose",
            "revision",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Laozi",
        "region": "Chinese",
        "frameworks": [
            "Wu Wei",
            "The Tao",
            "Return to Simplicity",
            "The Three Treasures"
        ],
        "topics": [
            "anxiety",
            "burnout",
            "focus",
            "distraction",
            "self-doubt"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Zhuangzi",
        "region": "Chinese",
        "frameworks": [
            "Free and Easy Wandering",
            "The Fasting of the Mind",
            "Transformation of Things",
            "Making All Things Equal"
        ],
        "topics": [
            "anxiety",
            "mock tests",
            "self-doubt",
            "distraction",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Mencius",
        "region": "Chinese",
        "frameworks": [
            "Inherent Goodness of Human Nature",
            "Four Sprouts of Virtue",
            "Nourishing the Flood-Like Qi"
        ],
        "topics": [
            "resilience",
            "purpose",
            "self-doubt",
            "consistency",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Xunzi",
        "region": "Chinese",
        "frameworks": [
            "Human Nature is Evil",
            "Deliberate Effort",
            "Rectification of Names"
        ],
        "topics": [
            "discipline",
            "procrastination",
            "consistency",
            "backlog",
            "deep work"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Han Feizi",
        "region": "Chinese",
        "frameworks": [
            "Two Handles of Reward and Punishment",
            "Systematic Law",
            "Strategic Position",
            "Administrative Methods"
        ],
        "topics": [
            "discipline",
            "procrastination",
            "mock tests",
            "consistency",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Mozi",
        "region": "Chinese",
        "frameworks": [
            "Universal Love",
            "Condemnation of Aggression",
            "Elevating Uniformity",
            "Anti-Fatalism"
        ],
        "topics": [
            "purpose",
            "procrastination",
            "resilience",
            "deep work",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Sun Tzu",
        "region": "Chinese",
        "frameworks": [
            "Subduing without Fighting",
            "Tactical Flexibility",
            "Knowing Yourself and the Enemy",
            "Strategic Momentum"
        ],
        "topics": [
            "mock tests",
            "revision",
            "focus",
            "discipline",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Wang Yangming",
        "region": "Chinese",
        "frameworks": [
            "Unity of Knowing and Acting",
            "Innate Knowing",
            "Mind is Principle"
        ],
        "topics": [
            "procrastination",
            "consistency",
            "deep work",
            "self-doubt",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Zhu Xi",
        "region": "Chinese",
        "frameworks": [
            "Investigation of Things",
            "Co-inherence of Li and Qi",
            "Preserving Heavenly Principle"
        ],
        "topics": [
            "deep work",
            "revision",
            "focus",
            "backlog",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Guo Xiang",
        "region": "Chinese",
        "frameworks": [
            "Spontaneous Self-Transformation",
            "Mysterious Union with the Universe",
            "Tracing the Trace-less"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "purpose",
            "burnout",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Wang Bi",
        "region": "Chinese",
        "frameworks": [
            "Original Non-Being",
            "Elucidating the Fundamental",
            "Words and Images Forgotten"
        ],
        "topics": [
            "focus",
            "distraction",
            "anxiety",
            "deep work",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Huayan Faxang",
        "region": "Chinese",
        "frameworks": [
            "Indra's Net of Interpenetration",
            "Mutual Identity of All Phenomena",
            "Ten Mysteries"
        ],
        "topics": [
            "focus",
            "backlog",
            "revision",
            "distraction",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Sengcan",
        "region": "Chinese",
        "frameworks": [
            "Faith in Mind",
            "The Great Way Without Difficulty",
            "Ceasing of Dualistic Views"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "mock tests",
            "focus",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Huineng",
        "region": "Chinese",
        "frameworks": [
            "Sudden Enlightenment",
            "No-Thought as Doctrine",
            "Original Purity of Mind"
        ],
        "topics": [
            "focus",
            "distraction",
            "self-doubt",
            "anxiety",
            "deep work"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Linji Yixuan",
        "region": "Chinese",
        "frameworks": [
            "The True Man of No Status",
            "Shouting and Striking Methods",
            "Four Sovereign Positions"
        ],
        "topics": [
            "procrastination",
            "focus",
            "discipline",
            "resilience",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Dai Zhen",
        "region": "Chinese",
        "frameworks": [
            "Evidential Research Methodology",
            "Examination of Desires",
            "Reason in Daily Life"
        ],
        "topics": [
            "revision",
            "mock tests",
            "deep work",
            "backlog",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Gu Yanwu",
        "region": "Chinese",
        "frameworks": [
            "State of Practical Usefulness",
            "Original Evidence Strategy",
            "Collective Responsibility for the Realm"
        ],
        "topics": [
            "backlog",
            "discipline",
            "consistency",
            "purpose",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kang Youwei",
        "region": "Chinese",
        "frameworks": [
            "The Book of Great Harmony",
            "Three Ages of Progress",
            "Reinterpreting Confucius as Reformer"
        ],
        "topics": [
            "purpose",
            "resilience",
            "consistency",
            "burnout",
            "procrastination"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Tan Sitong",
        "region": "Chinese",
        "frameworks": [
            "Philosophy of Ether and Benevolence",
            "Breaking the Core Net of Bonds",
            "Martyrdom for Radical Transformation"
        ],
        "topics": [
            "resilience",
            "anxiety",
            "self-doubt",
            "purpose",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    }
    ,
    {
        "philosopher": "Adi Shankara",
        "region": "Indian",
        "frameworks": [
            "Advaita Vedanta",
            "Adhyasa",
            "Neti Neti",
            "Sadhana Chatushtaya"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "focus",
            "distraction",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Swami Vivekananda",
        "region": "Indian",
        "frameworks": [
            "Practical Vedanta",
            "Raja Yoga Mental Control",
            "Karma Yoga Execution"
        ],
        "topics": [
            "focus",
            "discipline",
            "resilience",
            "self-doubt",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Chanakya",
        "region": "Indian",
        "frameworks": [
            "Saptanga Theory",
            "Sama Dana Bheda Danda",
            "Anvikshiki Strategy"
        ],
        "topics": [
            "discipline",
            "mock tests",
            "backlog",
            "procrastination",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Patanjali",
        "region": "Indian",
        "frameworks": [
            "Ashtanga Yoga",
            "Chitta Vritti Nirodha",
            "Abhyasa and Vairagya"
        ],
        "topics": [
            "distraction",
            "focus",
            "deep work",
            "anxiety",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Gautama Buddha",
        "region": "Indian",
        "frameworks": [
            "Four Noble Truths",
            "Eightfold Path",
            "Vipassana Awareness",
            "Anicca"
        ],
        "topics": [
            "anxiety",
            "burnout",
            "distraction",
            "self-doubt",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Mahavira",
        "region": "Indian",
        "frameworks": [
            "Anekantavada",
            "Syadvada",
            "Aparigraha Mental Detachment"
        ],
        "topics": [
            "anxiety",
            "mock tests",
            "burnout",
            "self-doubt",
            "resilience"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Sri Aurobindo",
        "region": "Indian",
        "frameworks": [
            "Integral Yoga",
            "Supermind Evolution",
            "Divine Life Strategy"
        ],
        "topics": [
            "burnout",
            "purpose",
            "deep work",
            "resilience",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Ramanuja",
        "region": "Indian",
        "frameworks": [
            "Vishishtadvaita",
            "Prapatti Surrender",
            "Bhakti Yoga Focus"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "purpose",
            "burnout",
            "resilience"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Madhvacharya",
        "region": "Indian",
        "frameworks": [
            "Dvaita Vedanta",
            "Pancha-bheda",
            "Hari-bhakti Execution"
        ],
        "topics": [
            "discipline",
            "consistency",
            "backlog",
            "revision",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Nagarjuna",
        "region": "Indian",
        "frameworks": [
            "Shunyata",
            "Madhyamaka Dialectic",
            "Two Truths Doctrine"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "mock tests",
            "focus",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Vasubandhu",
        "region": "Indian",
        "frameworks": [
            "Yogacara",
            "Vijnapti-matrata",
            "Storehouse Consciousness"
        ],
        "topics": [
            "distraction",
            "focus",
            "deep work",
            "procrastination",
            "anxiety"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Abhinavagupta",
        "region": "Indian",
        "frameworks": [
            "Kashmir Shaivism",
            "Pratyabhijna",
            "Rasa Aesthetic Theory"
        ],
        "topics": [
            "purpose",
            "burnout",
            "deep work",
            "focus",
            "resilience"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kapila",
        "region": "Indian",
        "frameworks": [
            "Samkhya Dualism",
            "Purusha and Prakriti",
            "Satkaryavada"
        ],
        "topics": [
            "focus",
            "distraction",
            "revision",
            "backlog",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kanada",
        "region": "Indian",
        "frameworks": [
            "Vaisheshika Atomism",
            "Padartha Classification",
            "Cause and Effect Analysis"
        ],
        "topics": [
            "revision",
            "backlog",
            "mock tests",
            "deep work",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Aksapada Gautama",
        "region": "Indian",
        "frameworks": [
            "Nyaya Epistemology",
            "Pramana Prameya Method",
            "Syllogistic Reasoning"
        ],
        "topics": [
            "mock tests",
            "revision",
            "self-doubt",
            "focus",
            "backlog"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Jaimini",
        "region": "Indian",
        "frameworks": [
            "Mimamsa Ritualism",
            "Dharma Duty Code",
            "Apurva Momentum"
        ],
        "topics": [
            "consistency",
            "discipline",
            "procrastination",
            "backlog",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Basava",
        "region": "Indian",
        "frameworks": [
            "Kayaka Principle",
            "Dasoha Philosophy",
            "Vachana Framework"
        ],
        "topics": [
            "consistency",
            "discipline",
            "purpose",
            "procrastination",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Kabir",
        "region": "Indian",
        "frameworks": [
            "Sahaja Samadhi",
            "Nirguna Bhakti",
            "Sabda Realization"
        ],
        "topics": [
            "anxiety",
            "distraction",
            "focus",
            "self-doubt",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Jiddu Krishnamurti",
        "region": "Indian",
        "frameworks": [
            "Choiceless Awareness",
            "Freedom from the Known",
            "The Observer is the Observed"
        ],
        "topics": [
            "anxiety",
            "distraction",
            "self-doubt",
            "focus",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Bhadrabahu",
        "region": "Indian",
        "frameworks": [
            "Sallekhana Discipline",
            "Upasarga Endurance",
            "Sutrakritanga Methods"
        ],
        "topics": [
            "resilience",
            "discipline",
            "focus",
            "burnout",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Socrates",
        "region": "Greek",
        "frameworks": [
            "Socratic Method",
            "Elenchus",
            "Intellectual Humility",
            "Examined Life"
        ],
        "topics": [
            "self-doubt",
            "revision",
            "mock tests",
            "focus",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Plato",
        "region": "Greek",
        "frameworks": [
            "Allegory of the Cave",
            "Theory of Forms",
            "Tripartite Soul",
            "Anamnesis"
        ],
        "topics": [
            "distraction",
            "focus",
            "deep work",
            "revision",
            "discipline"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Aristotle",
        "region": "Greek",
        "frameworks": [
            "Golden Mean",
            "Eudaimonia",
            "Nicomachean Habituation",
            "First Principles Thinking"
        ],
        "topics": [
            "consistency",
            "discipline",
            "procrastination",
            "burnout",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Epicurus",
        "region": "Greek",
        "frameworks": [
            "Ataraxia",
            "Aponia",
            "Tetrapharmakos",
            "Static Pleasures"
        ],
        "topics": [
            "anxiety",
            "burnout",
            "focus",
            "self-doubt",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Zeno of Citium",
        "region": "Greek Stoic",
        "frameworks": [
            "Life According to Nature",
            "Katalepsis",
            "Apatheia"
        ],
        "topics": [
            "anxiety",
            "resilience",
            "discipline",
            "mock tests",
            "consistency"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Epictetus",
        "region": "Greek Stoic",
        "frameworks": [
            "Prohairesis",
            "Dichotomy of Control",
            "Prosochê"
        ],
        "topics": [
            "anxiety",
            "focus",
            "resilience",
            "self-doubt",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Pyrrho of Elis",
        "region": "Greek Skeptic",
        "frameworks": [
            "Epoche",
            "Aphasia",
            "Acatalepsy"
        ],
        "topics": [
            "anxiety",
            "self-doubt",
            "mock tests",
            "distraction",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Diogenes of Sinope",
        "region": "Greek Cynic",
        "frameworks": [
            "Askesis",
            "Autarkeia",
            "Parrhesia"
        ],
        "topics": [
            "distraction",
            "discipline",
            "burnout",
            "resilience",
            "purpose"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Heraclitus",
        "region": "Greek",
        "frameworks": [
            "Panta Rhei",
            "Unity of Opposites",
            "Logos Alignment"
        ],
        "topics": [
            "backlog",
            "resilience",
            "consistency",
            "anxiety",
            "mock tests"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Parmenides",
        "region": "Greek",
        "frameworks": [
            "The Way of Truth",
            "The Way of Opinion",
            "Immutable Reality"
        ],
        "topics": [
            "focus",
            "distraction",
            "deep work",
            "self-doubt",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Pythagoras",
        "region": "Greek",
        "frameworks": [
            "Mathematical Harmony",
            "Akousmatikoi Discipline",
            "Transmigration of Soul"
        ],
        "topics": [
            "discipline",
            "consistency",
            "focus",
            "deep work",
            "revision"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Democritus",
        "region": "Greek",
        "frameworks": [
            "Atomism Cosmology",
            "Euthymia",
            "Causal Determinism"
        ],
        "topics": [
            "anxiety",
            "focus",
            "revision",
            "backlog",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Anaxagoras",
        "region": "Greek",
        "frameworks": [
            "Nous Governance",
            "Homoeomeries",
            "Cosmic Ordering"
        ],
        "topics": [
            "focus",
            "deep work",
            "discipline",
            "backlog",
            "procrastination"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Empedocles",
        "region": "Greek",
        "frameworks": [
            "Four Roots Theory",
            "Cosmic Forces of Love and Strife",
            "Cyclical Balance"
        ],
        "topics": [
            "burnout",
            "resilience",
            "consistency",
            "backlog",
            "anxiety"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Protagoras",
        "region": "Greek Sophist",
        "frameworks": [
            "Man is the Measure",
            "Orthoepeia",
            "Agonistic Argumentation"
        ],
        "topics": [
            "mock tests",
            "self-doubt",
            "revision",
            "focus",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Gorgias",
        "region": "Greek Sophist",
        "frameworks": [
            "Nihilistic Ontological Paradox",
            "Kairos",
            "Psychagogia"
        ],
        "topics": [
            "self-doubt",
            "anxiety",
            "mock tests",
            "procrastination",
            "focus"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Cleanthes",
        "region": "Greek Stoic",
        "frameworks": [
            "Hymn to Zeus Doctrine",
            "Cosmic Vital Heat",
            "Fate Leadership"
        ],
        "topics": [
            "purpose",
            "resilience",
            "consistency",
            "discipline",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Chrysippus",
        "region": "Greek Stoic",
        "frameworks": [
            "Propositional Logic Triads",
            "Compatibilist Cylinder",
            "Assent Mastery"
        ],
        "topics": [
            "focus",
            "mock tests",
            "revision",
            "backlog",
            "anxiety"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Arcesilaus",
        "region": "Greek Skeptic",
        "frameworks": [
            "Academic Skepticism",
            "Suspension of Assent",
            "Unerring Rational Strategy"
        ],
        "topics": [
            "self-doubt",
            "mock tests",
            "anxiety",
            "revision",
            "distraction"
        ],
        "timesUsed": 0,
        "lastUsed": null
    },
    {
        "philosopher": "Plotinus",
        "region": "Greek Neoplatonist",
        "frameworks": [
            "The One Emanation",
            "Intellect Realization",
            "Ascent of the Soul"
        ],
        "topics": [
            "deep work",
            "focus",
            "distraction",
            "purpose",
            "burnout"
        ],
        "timesUsed": 0,
        "lastUsed": null
    }
]

const insert = async (data: any) => {
    const done = await insertManyPhil(data);
    console.log(done)
}

insert(samole)