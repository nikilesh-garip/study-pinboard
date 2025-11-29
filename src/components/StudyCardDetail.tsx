import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface StudyCardDetailProps {
  isOpen: boolean;
  onClose: () => void;
  card: {
    image: string;
    title: string;
    description: string;
    category: string;
    categoryColor?: string;
    fullContent?: string;
    keyPoints?: string[];
    tags?: string[];
  } | null;
}

export const StudyCardDetail = ({ isOpen, onClose, card }: StudyCardDetailProps) => {
  if (!card) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <ScrollArea className="max-h-[85vh] pr-4">
          <div className="space-y-4">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  variant="secondary"
                  className={
                    card.categoryColor === 'primary' ? 'bg-primary/10 text-primary' :
                    card.categoryColor === 'secondary' ? 'bg-secondary/10 text-secondary' :
                    'bg-accent/10 text-accent'
                  }
                >
                  {card.category}
                </Badge>
              </div>
              <DialogTitle className="text-2xl">{card.title}</DialogTitle>
              <DialogDescription className="text-base">
                {card.description}
              </DialogDescription>
            </DialogHeader>

            <Separator />

            {card.fullContent && (
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.fullContent}
                </p>
              </div>
            )}

            {card.keyPoints && card.keyPoints.length > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Key Points</h3>
                  <ul className="space-y-2">
                    {card.keyPoints.map((point, index) => (
                      <li key={index} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {card.tags && card.tags.length > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
