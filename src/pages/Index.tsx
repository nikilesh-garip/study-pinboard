import { useState } from "react";
import { StudyCard } from "@/components/StudyCard";
import { MasonryGrid } from "@/components/MasonryGrid";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { StudyCardDetail } from "@/components/StudyCardDetail";
import { ThemeToggle } from "@/components/ThemeToggle";
import studyHero from "@/assets/study-hero.jpg";
import mathNotes from "@/assets/math-notes.jpg";
import biologyNotes from "@/assets/biology-notes.jpg";
import chemistryNotes from "@/assets/chemistry-notes.jpg";
import languageCards from "@/assets/language-cards.jpg";
import historyNotes from "@/assets/history-notes.jpg";

const studyMaterials = [
  {
    id: 1,
    image: mathNotes,
    title: "Calculus Fundamentals",
    description: "Complete guide to derivatives, integrals, and limits with visual examples",
    category: "Mathematics",
    categoryColor: "primary",
    fullContent: "Calculus is the mathematical study of continuous change. This comprehensive guide covers the fundamental concepts of differential and integral calculus, providing you with the tools to understand rates of change, areas under curves, and optimization problems. Perfect for students preparing for exams or anyone wanting to strengthen their mathematical foundation.",
    keyPoints: [
      "Understanding derivatives and their applications in real-world problems",
      "Mastering integration techniques including substitution and integration by parts",
      "Learning the Fundamental Theorem of Calculus and its significance",
      "Applying calculus to optimization problems and curve sketching",
      "Exploring limits, continuity, and differentiability concepts"
    ],
    tags: ["Calculus", "Derivatives", "Integrals", "Limits", "Math", "STEM"]
  },
  {
    id: 2,
    image: biologyNotes,
    title: "Cell Biology Essentials",
    description: "Detailed notes on cell structure, mitosis, and cellular respiration",
    category: "Science",
    categoryColor: "secondary",
    fullContent: "Dive deep into the fascinating world of cells - the building blocks of life. This study guide explores cellular structures, organelles, and the intricate processes that keep cells alive and functioning. From the nucleus to mitochondria, understand how each component plays a vital role in maintaining life at the microscopic level.",
    keyPoints: [
      "Cell membrane structure and selective permeability",
      "Mitochondria and ATP production through cellular respiration",
      "The cell cycle, mitosis, and meiosis explained with diagrams",
      "DNA replication and protein synthesis processes",
      "Differences between prokaryotic and eukaryotic cells"
    ],
    tags: ["Biology", "Cells", "Mitosis", "DNA", "Science", "Life Science"]
  },
  {
    id: 3,
    image: languageCards,
    title: "Spanish Vocabulary Mastery",
    description: "500+ essential Spanish words with pronunciation guides and examples",
    category: "Languages",
    categoryColor: "accent",
    fullContent: "Master Spanish vocabulary with this curated collection of the most frequently used words and phrases. Each entry includes pronunciation guides, example sentences, and cultural context to help you speak like a native. Whether you're a beginner or looking to expand your vocabulary, these flashcards will accelerate your language learning journey.",
    keyPoints: [
      "Common greetings, introductions, and everyday phrases",
      "Essential verbs conjugated in present, past, and future tenses",
      "Food, travel, and shopping vocabulary for practical situations",
      "Idiomatic expressions and colloquialisms used by native speakers",
      "Memory techniques and mnemonics for faster vocabulary retention"
    ],
    tags: ["Spanish", "Vocabulary", "Language Learning", "Flashcards", "Speaking"]
  },
  {
    id: 4,
    image: chemistryNotes,
    title: "Organic Chemistry Reactions",
    description: "Key reaction mechanisms and molecular structures explained simply",
    category: "Science",
    categoryColor: "secondary",
    fullContent: "Organic chemistry doesn't have to be overwhelming. This guide breaks down complex reaction mechanisms into understandable steps, helping you visualize how molecules interact and transform. Learn to predict products, understand stereochemistry, and master the logic behind organic reactions.",
    keyPoints: [
      "Major functional groups and their characteristic reactions",
      "SN1, SN2, E1, and E2 mechanisms with detailed examples",
      "Understanding reaction arrows and electron flow",
      "Stereochemistry, chirality, and enantiomers explained clearly",
      "Common reagents and their uses in synthesis pathways"
    ],
    tags: ["Chemistry", "Organic Chemistry", "Reactions", "Molecules", "STEM"]
  },
  {
    id: 5,
    image: historyNotes,
    title: "World War II Timeline",
    description: "Comprehensive timeline with key events, dates, and historical figures",
    category: "History",
    categoryColor: "primary",
    fullContent: "Explore the most significant conflict of the 20th century through a detailed chronological timeline. This guide covers major battles, political decisions, technological innovations, and the human stories that shaped World War II. Understand the causes, progression, and lasting impact of this global war.",
    keyPoints: [
      "Pre-war tensions and the rise of totalitarian regimes",
      "Key battles: Pearl Harbor, D-Day, Stalingrad, and Midway",
      "The Holocaust and war crimes tribunals",
      "Technological advancements including atomic weapons",
      "Post-war consequences and the formation of the United Nations"
    ],
    tags: ["History", "WWII", "Timeline", "20th Century", "War", "Politics"]
  },
  {
    id: 6,
    image: studyHero,
    title: "Study Techniques Guide",
    description: "Proven methods for effective studying, time management, and memory retention",
    category: "Study Tips",
    categoryColor: "accent",
    fullContent: "Transform your study habits with scientifically-backed techniques that boost retention and comprehension. Learn how to study smarter, not harder, with methods used by top students worldwide. From the Pomodoro Technique to active recall, discover strategies that work for your learning style.",
    keyPoints: [
      "Active recall and spaced repetition for long-term memory",
      "The Pomodoro Technique for focused study sessions",
      "Mind mapping and visual learning strategies",
      "Effective note-taking methods: Cornell, outline, and mapping",
      "Creating a productive study environment and routine"
    ],
    tags: ["Study Tips", "Productivity", "Learning", "Memory", "Time Management"]
  },
  {
    id: 7,
    image: mathNotes,
    title: "Linear Algebra Basics",
    description: "Matrices, vectors, and transformations explained with visual aids",
    category: "Mathematics",
    categoryColor: "primary",
    fullContent: "Linear algebra is the foundation of modern mathematics, computer science, and data science. Master the concepts of vectors, matrices, and linear transformations that power everything from 3D graphics to machine learning algorithms.",
    keyPoints: [
      "Vector operations and geometric interpretations",
      "Matrix multiplication, determinants, and inverses",
      "Eigenvalues and eigenvectors applications",
      "Linear transformations and their matrix representations",
      "Solving systems of linear equations efficiently"
    ],
    tags: ["Math", "Linear Algebra", "Matrices", "Vectors", "STEM"]
  },
  {
    id: 8,
    image: biologyNotes,
    title: "Genetics & DNA",
    description: "Inheritance patterns, gene expression, and genetic engineering notes",
    category: "Science",
    categoryColor: "secondary",
    fullContent: "Unravel the mysteries of heredity and molecular biology. This comprehensive guide explores how traits are passed from generation to generation and how genes control the characteristics of living organisms.",
    keyPoints: [
      "DNA structure and replication mechanisms",
      "Mendelian genetics and inheritance patterns",
      "Gene expression and regulation",
      "CRISPR and modern genetic engineering techniques",
      "Mutations and their effects on organisms"
    ],
    tags: ["Biology", "Genetics", "DNA", "Heredity", "Science"]
  },
  {
    id: 9,
    image: languageCards,
    title: "French Grammar Rules",
    description: "Essential French grammar concepts with practice exercises",
    category: "Languages",
    categoryColor: "accent",
    fullContent: "Build a solid foundation in French grammar with clear explanations and practical examples. From verb conjugations to sentence structure, master the rules that will help you communicate effectively in French.",
    keyPoints: [
      "Verb conjugations: present, past, and future tenses",
      "Gender rules for nouns and adjectives",
      "Subjunctive mood and when to use it",
      "Pronoun usage and placement in sentences",
      "Common grammatical mistakes to avoid"
    ],
    tags: ["French", "Grammar", "Language Learning", "Verbs", "Writing"]
  },
  {
    id: 10,
    image: historyNotes,
    title: "Ancient Civilizations",
    description: "Study guide covering Egypt, Greece, Rome, and Mesopotamia",
    category: "History",
    categoryColor: "primary",
    fullContent: "Journey through time to explore the greatest civilizations of the ancient world. Learn about their innovations, cultures, governments, and lasting impact on modern society.",
    keyPoints: [
      "Egyptian pyramids, hieroglyphics, and pharaohs",
      "Greek philosophy, democracy, and mythology",
      "Roman engineering, law, and military conquests",
      "Mesopotamian writing systems and city-states",
      "Trade routes and cultural exchanges between civilizations"
    ],
    tags: ["History", "Ancient History", "Civilizations", "Culture", "Archaeology"]
  },
];

const categories = ["All", "Mathematics", "Science", "Languages", "History", "Study Tips"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCard, setSelectedCard] = useState<typeof studyMaterials[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleCardClick = (card: typeof studyMaterials[0]) => {
    setSelectedCard(card);
    setIsDetailOpen(true);
  };

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              StudyPin
            </h1>
            <ThemeToggle />
          </div>
          <div className="flex justify-center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6 animate-fade-in-up">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Masonry Grid */}
      <main className="container mx-auto px-4 py-8 animate-scale-in">
        {filteredMaterials.length > 0 ? (
          <MasonryGrid>
            {filteredMaterials.map((material, index) => (
              <div 
                key={material.id} 
                className="break-inside-avoid"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <StudyCard {...material} onClick={() => handleCardClick(material)} />
              </div>
            ))}
          </MasonryGrid>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No study materials found</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      <StudyCardDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        card={selectedCard}
      />
    </div>
  );
};

export default Index;
