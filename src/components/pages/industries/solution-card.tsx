import { ElementType, FC } from "react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

type Props = {
  title?: string;
  description?: string;
  Icon?: ElementType;
};

export const SolutionCard: FC<Props> = ({ title, description, Icon }) => {
  return (
    <Card className="p-4">
      <div className="md:flex items-center justify-center text-center md:justify-start space-x-5 p-6">
        <div className="flex items-center justify-center w-full md:w-fit">
          {Icon && <Icon className="h-8 w-8" />}
        </div>
        <CardTitle className="mt-5 md:mt-0">{title}</CardTitle>
      </div>
      <CardContent>{description}</CardContent>
    </Card>
  );
};
