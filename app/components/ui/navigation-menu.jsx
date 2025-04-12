import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

function NavigationMenu({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn('group flex flex-1 list-none items-center space-x-1', className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }) {
  return <NavigationMenuPrimitive.Item className={cn('relative', className)} {...props} />;
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-full bg-background/90 px-5 py-2 text-sm font-medium text-primary hover:bg-secondary/20 hover:text-primary-dark hover:shadow-md focus:bg-secondary/20 focus:text-primary-dark disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-secondary/20 data-[state=open]:text-primary-dark data-[state=open]:focus:bg-secondary/20 data-[state=open]:bg-secondary/30 focus-visible:ring-primary-light/50 outline-none transition-all duration-300 ease-in-out focus-visible:ring-[3px] focus-visible:outline-1 border border-primary/20'
);

function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "data-[active=true]:focus:bg-secondary/20 data-[active=true]:hover:bg-secondary/20 data-[active=true]:bg-secondary/30 data-[active=true]:text-primary-dark hover:bg-secondary/20 hover:text-primary-dark focus:bg-secondary/20 focus:text-primary-dark focus-visible:ring-primary-light/50 [&_svg:not([class*='text-'])]:text-primary flex flex-col gap-1 rounded-xl p-3 text-sm transition-all duration-300 ease-in-out outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
};
