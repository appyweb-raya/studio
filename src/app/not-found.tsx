import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-primary mb-4" />
      <h1 className="font-headline text-5xl md:text-6xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go Back to Homepage</Link>
      </Button>
    </div>
  );
}
