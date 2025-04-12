import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card';

export const CustomCard = ({ title, children, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
