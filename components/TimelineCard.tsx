import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

type TimelineCardProps = {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  employmentType?: string;
  contentNode: React.ReactNode;
};

export function TimelineCard({
  title,
  subtitle,
  date,
  location,
  employmentType,
  contentNode,
}: TimelineCardProps) {
  return (
    <div className="relative flex pl-6 sm:pl-8">
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-primary border-2 border-primary-foreground"></span>
        <div className="h-full w-px flex-1 bg-border/80"></div>
      </div>

      <div className="flex-1 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-base font-medium text-muted-foreground">
              {subtitle}
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-1 sm:mt-0">
            {date}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {location && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
          {employmentType && (
            <Badge variant="outline" className="text-sm">
              {employmentType}
            </Badge>
          )}
        </div>

        <div className="pt-2">
          {contentNode}
        </div>
      </div>
    </div>
  );
}

