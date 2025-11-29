import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StudyCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  categoryColor?: string;
  onClick?: () => void;
}

export const StudyCard = ({ image, title, description, category, categoryColor = "primary", onClick }: StudyCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="group overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-card"
          style={{ boxShadow: 'var(--shadow-card)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-card)';
          }}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 space-y-2">
        <Badge 
          variant="secondary" 
          className={`text-xs font-medium ${
            categoryColor === 'primary' ? 'bg-primary/10 text-primary hover:bg-primary/20' :
            categoryColor === 'secondary' ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' :
            'bg-accent/10 text-accent hover:bg-accent/20'
          }`}
        >
          {category}
        </Badge>
        
        <h3 className="font-semibold text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
};
