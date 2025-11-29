import { useState } from "react";
import { StudyCard } from "@/components/StudyCard";
import { MasonryGrid } from "@/components/MasonryGrid";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
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
    categoryColor: "primary"
  },
  {
    id: 2,
    image: biologyNotes,
    title: "Cell Biology Essentials",
    description: "Detailed notes on cell structure, mitosis, and cellular respiration",
    category: "Science",
    categoryColor: "secondary"
  },
  {
    id: 3,
    image: languageCards,
    title: "Spanish Vocabulary Mastery",
    description: "500+ essential Spanish words with pronunciation guides and examples",
    category: "Languages",
    categoryColor: "accent"
  },
  {
    id: 4,
    image: chemistryNotes,
    title: "Organic Chemistry Reactions",
    description: "Key reaction mechanisms and molecular structures explained simply",
    category: "Science",
    categoryColor: "secondary"
  },
  {
    id: 5,
    image: historyNotes,
    title: "World War II Timeline",
    description: "Comprehensive timeline with key events, dates, and historical figures",
    category: "History",
    categoryColor: "primary"
  },
  {
    id: 6,
    image: studyHero,
    title: "Study Techniques Guide",
    description: "Proven methods for effective studying, time management, and memory retention",
    category: "Study Tips",
    categoryColor: "accent"
  },
  {
    id: 7,
    image: mathNotes,
    title: "Linear Algebra Basics",
    description: "Matrices, vectors, and transformations explained with visual aids",
    category: "Mathematics",
    categoryColor: "primary"
  },
  {
    id: 8,
    image: biologyNotes,
    title: "Genetics & DNA",
    description: "Inheritance patterns, gene expression, and genetic engineering notes",
    category: "Science",
    categoryColor: "secondary"
  },
  {
    id: 9,
    image: languageCards,
    title: "French Grammar Rules",
    description: "Essential French grammar concepts with practice exercises",
    category: "Languages",
    categoryColor: "accent"
  },
  {
    id: 10,
    image: historyNotes,
    title: "Ancient Civilizations",
    description: "Study guide covering Egypt, Greece, Rome, and Mesopotamia",
    category: "History",
    categoryColor: "primary"
  },
];

const categories = ["All", "Mathematics", "Science", "Languages", "History", "Study Tips"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
                <StudyCard {...material} />
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
    </div>
  );
};

export default Index;
